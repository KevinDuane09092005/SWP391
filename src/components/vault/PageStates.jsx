import { Link } from 'react-router-dom'
import Button from '../Button.jsx'
import Icon from '../Icon.jsx'

// Small building blocks shared by the vault pages: loading, error, empty, breadcrumbs.

export function LoadingState({ label }) {
  return (
    <div className="page-state" role="status">
      <span className="spinner spinner--dark" aria-hidden="true" />
      <span>{label}</span>
    </div>
  )
}

export function ErrorState({ message, retryLabel, onRetry, children }) {
  return (
    <div className="page-state page-state--error" role="alert">
      <Icon name="alertCircle" size={22} />
      <p>{message}</p>
      <div className="page-state__actions">
        {onRetry && (
          <Button variant="secondary" onClick={onRetry}>
            {retryLabel}
          </Button>
        )}
        {children}
      </div>
    </div>
  )
}

export function EmptyState({ icon = 'layers', title, text, action }) {
  return (
    <div className="card empty-state">
      <span className="icon-tile empty-state__icon">
        <Icon name={icon} size={22} />
      </span>
      <h2 className="empty-state__title">{title}</h2>
      <p className="empty-state__text">{text}</p>
      {action}
    </div>
  )
}

// items: [{ label, to? }] — the last item is the current page (no link).
export function Breadcrumbs({ label, items }) {
  return (
    <nav className="breadcrumbs" aria-label={label}>
      <ol>
        {items.map((item, index) => (
          <li key={`${item.label}-${index}`}>
            {item.to && index < items.length - 1 ? (
              <Link to={item.to}>{item.label}</Link>
            ) : (
              <span aria-current="page">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
