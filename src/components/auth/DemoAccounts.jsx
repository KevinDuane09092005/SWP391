import { DEMO_PASSWORD, mockUsers } from '../../mocks/mockUsers.js'

// DEMO ONLY: lists the fake accounts (one per role) so testers and reviewers can try
// every dashboard. "Use" fills the sign-in form. Remove when the real backend is connected.
export default function DemoAccounts({ labels, roleLabels, onUse }) {
  return (
    <details className="demo-accounts">
      <summary>
        <span className="badge">{labels.badge}</span>
        {labels.title}
      </summary>
      <p className="demo-accounts__text">{labels.text(DEMO_PASSWORD)}</p>
      <ul className="demo-accounts__list">
        {mockUsers.map((account) => (
          <li key={account.id}>
            <span>
              <strong>{roleLabels[account.role].label}</strong>
              <span className="demo-accounts__id">{account.identifier}</span>
            </span>
            <button
              type="button"
              className="btn btn-secondary btn-sm"
              onClick={() => onUse(account.identifier, DEMO_PASSWORD)}
            >
              {labels.use}
            </button>
          </li>
        ))}
      </ul>
    </details>
  )
}
