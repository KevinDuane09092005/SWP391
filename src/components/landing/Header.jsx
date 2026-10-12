import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Brand from '../Brand.jsx'
import Button from '../Button.jsx'
import Icon from '../Icon.jsx'
import LanguageSwitcher from '../LanguageSwitcher.jsx'
import SmartLink from '../SmartLink.jsx'
import ThemeToggle from '../ThemeToggle.jsx'

// Split '/#security' into its page ('/') and section id ('security').
function parseLink(link) {
  const [path, sectionId] = (link.to ?? '').split('#')
  return { path, sectionId }
}

// Site header used by the landing, home, and pricing pages.
// The current item is underlined: page links match the URL, and section links
// (e.g. '/#security') match whichever section is on screen while scrolling.
export default function Header({ links, ui }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState(null)
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  // Section ids on this page that the nav links point to, as a string so the effect
  // below only re-runs when the list really changes.
  const sectionKey = links
    .map(parseLink)
    .filter(({ path, sectionId }) => sectionId && path === pathname)
    .map(({ sectionId }) => sectionId)
    .join(',')

  // Track which linked section sits just under the sticky header.
  useEffect(() => {
    if (!sectionKey) return undefined
    const ids = sectionKey.split(',')
    let frame = 0

    const update = () => {
      frame = 0
      const line = (document.querySelector('.site-header')?.offsetHeight ?? 64) + 24
      let current = null
      for (const id of ids) {
        const rect = document.getElementById(id)?.getBoundingClientRect()
        if (rect && rect.top <= line && rect.bottom > line) current = id
      }
      setActiveSection(current)
    }
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    schedule()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
    }
  }, [sectionKey])

  // 'page' for the page you are on, 'location' for the section in view.
  const currentFor = (link) => {
    const { path, sectionId } = parseLink(link)
    if (!link.to || path !== pathname) return undefined
    if (!sectionId) return 'page'
    return sectionId === activeSection ? 'location' : undefined
  }

  // Close the mobile menu with the Escape key.
  useEffect(() => {
    if (!menuOpen) return undefined
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  const scrollToTop = (event) => {
    event.preventDefault()
    closeMenu()
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' })
  }

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        {isHome ? (
          <Brand href="#top" onClick={scrollToTop} label={ui.brandLabel} />
        ) : (
          <Brand to="/" label={ui.brandLabel} />
        )}

        <div className="site-header__end">
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="site-nav"
            aria-label={menuOpen ? ui.closeMenu : ui.openMenu}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <Icon name={menuOpen ? 'close' : 'menu'} size={20} />
          </button>

          <nav
            id="site-nav"
            className={`site-nav${menuOpen ? ' is-open' : ''}`}
            aria-label={ui.mainNavLabel}
          >
            <div className="site-nav__links">
              {links.map((link) => (
                <SmartLink
                  key={link.to ?? link.href}
                  to={link.to}
                  href={link.href}
                  className="site-nav__link"
                  aria-current={currentFor(link)}
                  onClick={closeMenu}
                >
                  {link.label}
                </SmartLink>
              ))}
            </div>
            <div className="site-nav__actions">
              <Button to="/login" variant="link" className="site-nav__link" onClick={closeMenu}>
                {ui.signIn}
              </Button>
              <Button to="/register" size="sm" onClick={closeMenu}>
                {ui.getStarted}
              </Button>
            </div>
          </nav>

          <ThemeToggle className="site-header__lang" />
          <LanguageSwitcher label={ui.languageLabel} className="site-header__lang" />
        </div>
      </div>
    </header>
  )
}
