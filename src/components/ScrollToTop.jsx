import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// On every navigation, scroll to the linked #section if there is one, otherwise to the top.
// `key` changes on each click, so clicking the same section link twice still scrolls.
export default function ScrollToTop() {
  const { pathname, hash, key } = useLocation()

  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView()
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash, key])

  return null
}
