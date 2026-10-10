import { createContext, useContext, useEffect, useState } from 'react'
import { languages } from './languages.js'

const STORAGE_KEY = 'legacyvault.language'
const supported = languages.map((language) => language.code)

// Use the saved choice first, then the browser language, then English.
function getInitialLanguage() {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    if (supported.includes(saved)) return saved
  } catch {
    // Storage can be blocked (private mode, disabled cookies); fall through.
  }
  const browser = window.navigator.language?.slice(0, 2).toLowerCase()
  return supported.includes(browser) ? browser : languages[0].code
}

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(getInitialLanguage)

  // Keep <html lang> in sync for screen readers and remember the choice.
  useEffect(() => {
    document.documentElement.lang = language
    try {
      window.localStorage.setItem(STORAGE_KEY, language)
    } catch {
      // Not saving the choice is fine; the page still works.
    }
  }, [language])

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage must be used inside <LanguageProvider>')
  return context
}
