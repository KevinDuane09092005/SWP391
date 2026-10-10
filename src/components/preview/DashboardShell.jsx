import Icon from '../Icon.jsx'

// A scaled-down, non-interactive picture of the owner dashboard built in HTML/CSS:
// top bar and sidebar here, main area passed in as children. It is decorative, so it
// is hidden from screen readers. Swap it for a real screenshot once the dashboard exists.
export default function DashboardShell({ shell, chips = [], children }) {
  return (
    <div className="dash-preview" aria-hidden="true">
      {chips.length > 0 && (
        <div className="dash-preview__chips">
          {chips.map((chip) => (
            <span key={chip} className="badge">
              {chip}
            </span>
          ))}
        </div>
      )}

      <div className="dash-preview__frame">
        <span className="badge dash-preview__badge">{shell.badge}</span>

        <div className="dash">
          <div className="dash__topbar">
            <div className="dash__app">
              <span className="dash__logo">
                <Icon name="lock" size={9} strokeWidth={2.4} />
              </span>
              <div>
                <strong>{shell.appName}</strong>
                <span>{shell.appTagline}</span>
              </div>
            </div>
            <div className="dash__user">
              <span>{shell.email}</span>
              <span className="dash__chip">{shell.signOut}</span>
            </div>
          </div>

          <div className="dash__body">
            <aside className="dash__sidebar">
              <p className="dash__label">{shell.workspaceLabel}</p>
              <strong className="dash__workspace">{shell.workspaceName}</strong>
              <p className="dash__muted">{shell.workspaceText}</p>
              <p className="dash__label">{shell.switchLabel}</p>
              <div className="dash__switch">
                {shell.switchOptions.map((option, index) => (
                  <span key={option} className={index === 0 ? 'is-active' : undefined}>
                    {option}
                  </span>
                ))}
              </div>
              <ul className="dash__nav">
                {shell.nav.map((item, index) => (
                  <li key={item.label} className={index === 0 ? 'is-active' : undefined}>
                    <Icon name={item.icon} size={9} strokeWidth={2} />
                    {item.label}
                  </li>
                ))}
              </ul>
            </aside>

            <div className="dash__main">{children}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
