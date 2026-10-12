import Icon from './Icon.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import { useTheme } from '../theme/ThemeContext.jsx'

const labels = {
  en: { toDark: 'Switch to dark mode', toLight: 'Switch to light mode' },
  vi: { toDark: 'Chuyển sang giao diện tối', toLight: 'Chuyển sang giao diện sáng' },
}

// Round sun / moon button. Shows the icon of the theme you will switch to.
export default function ThemeToggle({ className = '' }) {
  const { theme, toggleTheme } = useTheme()
  const { language } = useLanguage()
  const isDark = theme === 'dark'
  const label = isDark ? labels[language].toLight : labels[language].toDark

  return (
    <button
      type="button"
      className={`theme-toggle ${className}`.trim()}
      aria-label={label}
      title={label}
      onClick={toggleTheme}
    >
      <Icon name={isDark ? 'sun' : 'moon'} size={18} />
    </button>
  )
}
