import Icon from '../Icon.jsx'

// Numbered progress bar for the Add Asset flow. Finished steps show a check mark.
export default function Stepper({ steps, current, label }) {
  return (
    <ol className="stepper" aria-label={label}>
      {steps.map((step, index) => {
        let state = 'upcoming'
        if (index < current) state = 'done'
        if (index === current) state = 'current'
        return (
          <li
            key={step}
            className={`stepper__step stepper__step--${state}`}
            aria-current={state === 'current' ? 'step' : undefined}
          >
            <span className="stepper__dot">
              {state === 'done' ? <Icon name="check" size={14} strokeWidth={2.6} /> : index + 1}
            </span>
            <span className="stepper__label">{step}</span>
          </li>
        )
      })}
    </ol>
  )
}
