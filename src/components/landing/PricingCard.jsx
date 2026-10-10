import Button from '../Button.jsx'
import SectionHeader from './SectionHeader.jsx'

// Pricing teaser only: no prices are shown and no payments are processed.
export default function PricingCard({ content }) {
  const { id, title, description, card } = content

  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`}>
      <div className="container">
        <SectionHeader id={`${id}-title`} title={title} description={description} />
        <div className="card pricing-card">
          <div className="pricing-card__copy">
            <h3 className="pricing-card__title">{card.heading}</h3>
            <p className="pricing-card__text">{card.description}</p>
          </div>
          <Button to={card.cta.to} variant="secondary" className="pricing-card__button">
            {card.cta.label}
          </Button>
        </div>
      </div>
    </section>
  )
}
