import { Route, Routes } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop.jsx'
import LandingPage from './pages/LandingPage.jsx'
import PlaceholderPage from './pages/PlaceholderPage.jsx'
import PricingPage from './pages/PricingPage.jsx'

// All pages of the app. Placeholder routes will be replaced by real pages in Stage 4.
// Placeholder text lives in src/data/placeholderContent.js, keyed by `page`.
export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<PlaceholderPage page="login" />} />
        <Route path="/register" element={<PlaceholderPage page="register" />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/privacy" element={<PlaceholderPage page="privacy" />} />
        <Route path="/contact" element={<PlaceholderPage page="contact" />} />
        <Route path="*" element={<PlaceholderPage page="notFound" />} />
      </Routes>
    </>
  )
}
