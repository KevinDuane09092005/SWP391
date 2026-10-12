import Button from '../../components/Button.jsx'
import DashboardLayout from '../../components/dashboard/DashboardLayout.jsx'
import Icon from '../../components/Icon.jsx'
import { useAuth } from '../../auth/AuthContext.jsx'
import { getDashboardPath } from '../../auth/roles.js'
import { dashboardContent } from '../../data/dashboardContent.js'
import { useLanguage } from '../../i18n/LanguageContext.jsx'

// Shown by RequireAuth when a signed-in user opens a page meant for another role.
export default function AccessDeniedPage() {
  const { user } = useAuth()
  const { language } = useLanguage()
  const t = dashboardContent[language]

  return (
    <DashboardLayout>
      <section className="card dashboard-card access-denied" aria-labelledby="denied-title">
        <span className="icon-tile icon-tile--danger">
          <Icon name="lock" />
        </span>
        <h1 id="denied-title" className="dashboard-title">
          {t.accessDenied.title}
        </h1>
        <p className="dashboard-text">{t.accessDenied.text(t.roles[user.role].label)}</p>
        <Button to={getDashboardPath(user.role)}>{t.accessDenied.cta}</Button>
      </section>
    </DashboardLayout>
  )
}
