import { useLanguage } from '../i18n/LanguageContext.jsx'
import { languages } from '../i18n/languages.js'

// Small EN / VI toggle. `label` is the group name read by screen readers.
export default function LanguageSwitcher({ label, className = '' }) {
  const { language, setLanguage } = useLanguage()

  return (
    <div className={`lang-switch ${className}`.trim()} role="group" aria-label={label}>
      {languages.map((option) => (
        <button
          key={option.code}
          type="button"
          lang={option.code}
          className="lang-switch__option"
          aria-pressed={language === option.code}
          title={option.name}
          onClick={() => setLanguage(option.code)}
        >
          {option.label}
        </button>
      ))}
    </div>
  )
}
