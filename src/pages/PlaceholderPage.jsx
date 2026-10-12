import Brand from '../components/Brand.jsx'
import Button from '../components/Button.jsx'
import Icon from '../components/Icon.jsx'
import LanguageSwitcher from '../components/LanguageSwitcher.jsx'
import ThemeToggle from '../components/ThemeToggle.jsx'
import { placeholderContent } from '../data/placeholderContent.js'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import '../styles/placeholder.css'

// Temporary page for routes that are not built yet (Sign In, Register, etc.).
// It will be replaced by the real pages in Stage 4.
export default function PlaceholderPage({ page }) {
  const { language } = useLanguage()
  const content = placeholderContent[language]
  const { title, message } = content.pages[page]

  return (
    <div className="placeholder-page">
      <header className="placeholder-page__header">
        <div className="container placeholder-page__header-inner">
          <Brand to="/" />
          <div className="placeholder-page__tools">
            <ThemeToggle />
            <LanguageSwitcher label={content.languageLabel} />
          </div>
        </div>
      </header>

      <main className="container placeholder-page__main">
        <section className="card placeholder-card" aria-labelledby="placeholder-title">
          <span className="icon-tile">
            <Icon name="info" />
          </span>
          <h1 id="placeholder-title" className="placeholder-card__title">
            {title}
          </h1>
          <p className="placeholder-card__text">{message ?? content.defaultMessage}</p>
          <p className="placeholder-card__notice">{content.notice}</p>
          <Button to="/" variant="secondary">
            <Icon name="arrowLeft" size={16} />
            {content.back}
          </Button>
        </section>
      </main>
    </div>
  )
}
