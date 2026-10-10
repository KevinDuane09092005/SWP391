import SectionHeader from './SectionHeader.jsx'

export default function HowItWorks({ content, stepLabel }) {
  const { id, title, description, steps } = content

  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`}>
      <div className="container">
        <SectionHeader id={`${id}-title`} title={title} description={description} />
        <ol className="card-grid card-grid--three step-list">
          {steps.map((step, index) => (
            <li key={step.title} className="card feature-card step-card">
              <span className="step-card__number" aria-hidden="true">
                {index + 1}
              </span>
              <h3 className="feature-card__title">
                <span className="visually-hidden">
                  {stepLabel} {index + 1}:{' '}
                </span>
                {step.title}
              </h3>
              <p className="feature-card__text">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
