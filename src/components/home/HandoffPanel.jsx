import SmartLink from '../SmartLink.jsx'

// "A clearer handoff for your family or executor" — the three release steps in one panel.
export default function HandoffPanel({ content }) {
  const { id, eyebrow, title, links, linksLabel, steps, summary } = content

  return (
    <section id={id} className="section section--tight" aria-labelledby={`${id}-title`}>
      <div className="container">
        <div className="card handoff">
          <div className="handoff__head">
            <div>
              <span className="eyebrow">{eyebrow}</span>
              <h2 id={`${id}-title`} className="handoff__title">
                {title}
              </h2>
            </div>
            <nav aria-label={linksLabel}>
              <ul className="handoff__links">
                {links.map((link) => (
                  <li key={link.to}>
                    <SmartLink to={link.to} className="handoff__link">
                      {link.label}
                    </SmartLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <ol className="handoff__steps">
            {steps.map((step, index) => (
              <li key={step} className="handoff__step">
                <span className="handoff__number">{index + 1}</span>
                <span className="handoff__step-title">{step}</span>
              </li>
            ))}
          </ol>

          <p className="handoff__summary">{summary}</p>
        </div>
      </div>
    </section>
  )
}
