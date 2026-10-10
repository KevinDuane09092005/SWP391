import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Brand from '../Brand.jsx'
import Button from '../Button.jsx'
import Icon from '../Icon.jsx'
import LanguageSwitcher from '../LanguageSwitcher.jsx'
import SmartLink from '../SmartLink.jsx'

// Site header used by the landing and pricing pages.
export default function Header({ links, ui }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()
  const isHome = pathname === '/'

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
                  aria-current={link.to === pathname ? 'page' : undefined}
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

          <LanguageSwitcher label={ui.languageLabel} className="site-header__lang" />
        </div>
      </div>
    </header>
  )
}
