import Icon from '../Icon.jsx'

// White card with an icon, a title, and a short description.
export default function FeatureCard({ icon, title, text }) {
  return (
    <article className="card feature-card">
      <span className="icon-tile">
        <Icon name={icon} />
      </span>
      <h3 className="feature-card__title">{title}</h3>
      <p className="feature-card__text">{text}</p>
    </article>
  )
}
