import { useEffect, useState } from 'react'
import Button from '../components/Button.jsx'
import Header from '../components/landing/Header.jsx'
import Footer from '../components/landing/Footer.jsx'
import BillingToggle from '../components/pricing/BillingToggle.jsx'
import PlanCard from '../components/pricing/PlanCard.jsx'
import { landingContent } from '../data/landingContent.js'
import { pricingContent } from '../data/pricingContent.js'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import { fetchPlans } from '../services/pricingService.js'
import '../styles/landing.css'
import '../styles/pricing.css'

export default function PricingPage() {
  const { language } = useLanguage()
  const { ui, navLinks, footer } = landingContent[language]
  const content = pricingContent[language]

  const [billing, setBilling] = useState('monthly')
  const [plans, setPlans] = useState([])
  const [status, setStatus] = useState('loading') // 'loading' | 'ready' | 'error'
  const [attempt, setAttempt] = useState(0)

  useEffect(() => {
    let cancelled = false
    fetchPlans()
      .then((data) => {
        if (cancelled) return
        setPlans(data)
        setStatus('ready')
      })
      .catch(() => {
        if (!cancelled) setStatus('error')
      })
    return () => {
      cancelled = true
    }
  }, [attempt])

  const retry = () => {
    setStatus('loading')
    setAttempt((count) => count + 1)
  }

  return (
    <>
      <Header links={navLinks} ui={ui} />
      <main className="section pricing-page">
        <div className="container">
          <div className="pricing-intro">
            <h1 className="pricing-intro__title">{content.title}</h1>
            <p className="pricing-intro__text">{content.description}</p>
          </div>

          <div className="card plan-controls">
            <span className="badge">{content.controls.badge}</span>
            <p id="billing-label" className="plan-controls__text">
              {content.controls.text}
            </p>
            <BillingToggle
              value={billing}
              onChange={setBilling}
              labelledBy="billing-label"
              options={[
                { value: 'monthly', label: content.controls.monthly },
                { value: 'yearly', label: content.controls.yearly },
              ]}
            />
          </div>

          {status === 'loading' && (
            <p className="plan-status" role="status">
              {content.loading}
            </p>
          )}

          {status === 'error' && (
            <div className="plan-status" role="alert">
              <p>{content.error}</p>
              <Button variant="secondary" onClick={retry}>
                {content.retry}
              </Button>
            </div>
          )}

          {status === 'ready' && (
            <div className="plan-grid">
              {plans.map((plan) => (
                <PlanCard key={plan.id} plan={plan} billing={billing} content={content} />
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer content={footer} navLabel={ui.footerNavLabel} />
    </>
  )
}
