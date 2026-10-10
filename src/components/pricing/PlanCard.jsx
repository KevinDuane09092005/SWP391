import Button from '../Button.jsx'

// Prices are always written in US style ($4.99) because the currency is USD.
function formatMoney(amount, currency) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: Number.isInteger(amount) ? 0 : 2,
  }).format(amount)
}

// One plan column. `plan` comes from the API, `content` is the translated text.
export default function PlanCard({ plan, billing, content }) {
  const text = content.plans[plan.id]
  const amount = plan.price[billing]
  const isFree = plan.price.monthly === 0 && plan.price.yearly === 0
  const nameId = `plan-${plan.id}-name`

  let note = null
  if (!isFree) {
    note =
      billing === 'yearly'
        ? content.billedYearly(formatMoney(Math.round((amount / 12) * 100) / 100, plan.currency))
        : content.billedMonthly
  }

  return (
    <article
      className={`card plan-card${plan.recommended ? ' plan-card--featured' : ''}`}
      aria-labelledby={nameId}
    >
      <div className="plan-card__badges">
        <span id={nameId} className="badge">
          {text.name}
        </span>
        {plan.recommended && <span className="badge badge--accent">{content.recommended}</span>}
      </div>

      <h2 className="plan-card__headline">{text.headline}</h2>

      <div className="plan-card__price">
        {isFree ? (
          <span className="plan-card__amount">{content.free}</span>
        ) : (
          <>
            <span className="plan-card__amount">{formatMoney(amount, plan.currency)}</span>
            <span className="plan-card__currency">{plan.currency}</span>
            <span className="plan-card__period">
              {billing === 'yearly' ? content.perYear : content.perMonth}
            </span>
          </>
        )}
      </div>
      {note && <p className="plan-card__note">{note}</p>}

      <ul className="plan-card__features">
        {Object.entries(plan.limits).map(([key, value]) =>
          content.features[key] ? <li key={key}>{content.features[key](value)}</li> : null,
        )}
      </ul>

      <Button
        to={`/register?plan=${plan.id}&billing=${billing}`}
        variant={isFree ? 'secondary' : 'primary'}
        size="lg"
        className="plan-card__cta"
      >
        {text.cta}
      </Button>
    </article>
  )
}
