import DashboardLayout from '../../components/dashboard/DashboardLayout.jsx'
import Icon from '../../components/Icon.jsx'
import { useAuth } from '../../auth/AuthContext.jsx'
import { dashboardContent } from '../../data/dashboardContent.js'
import { useLanguage } from '../../i18n/LanguageContext.jsx'

// PLACEHOLDER dashboard, one per role. It only proves that sign-in sent the user to the
// right place and shows the current session. Role features belong to later flows.
export default function RoleDashboardPage({ role }) {
  const { session } = useAuth()
  const { language } = useLanguage()
  const t = dashboardContent[language]
  const roleText = t.roles[role]
  const { user } = session

  return (
    <DashboardLayout>
      <span className="badge badge--accent">{t.placeholder.badge}</span>
      <h1 className="dashboard-title">{roleText.title}</h1>
      <p className="dashboard-text">{roleText.description}</p>

      <div className="dashboard-grid">
        <section className="card dashboard-card">
          <div className="dashboard-card__head">
            <span className="icon-tile">
              <Icon name="info" />
            </span>
            <p>{t.placeholder.text}</p>
          </div>
        </section>

        <section className="card dashboard-card" aria-labelledby="session-title">
          <h2 id="session-title" className="dashboard-card__title">
            {t.session.title}
          </h2>
          <dl className="session-list">
            <div>
              <dt>{t.session.name}</dt>
              <dd>{user.fullName}</dd>
            </div>
            <div>
              <dt>{t.session.identifier}</dt>
              <dd>{user.identifier}</dd>
            </div>
            <div>
              <dt>{t.session.role}</dt>
              <dd>
                {roleText.label} <code>{user.role}</code>
              </dd>
            </div>
            <div>
              <dt>{t.session.storage}</dt>
              <dd>{session.remember ? t.session.storageRemember : t.session.storageTab}</dd>
            </div>
            <div>
              <dt>{t.session.mode}</dt>
              <dd>{t.session.modeDemo}</dd>
            </div>
          </dl>
          <p className="dashboard-warning">
            <Icon name="alertCircle" size={16} />
            <span>{t.session.warning}</span>
          </p>
        </section>
      </div>
    </DashboardLayout>
  )
}
