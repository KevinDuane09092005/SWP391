import DashboardShell from '../preview/DashboardShell.jsx'
import MiniTable from '../preview/MiniTable.jsx'

// Home hero picture: the dashboard overview with stats and vault entries.
export default function HomeDashboardPreview({ shell, content }) {
  return (
    <DashboardShell shell={shell}>
      <p className="dash__label">{content.eyebrow}</p>
      <strong className="dash__title">{content.title}</strong>
      <p className="dash__muted">{content.subtitle}</p>

      <div className="dash__stats">
        {content.stats.map((stat) => (
          <div key={stat.label} className="dash__stat">
            <p className="dash__label">{stat.label}</p>
            <strong>{stat.value}</strong>
            <p className="dash__muted">{stat.text}</p>
          </div>
        ))}
      </div>

      <MiniTable table={content.table} columns="1.3fr 1fr 1.4fr 0.7fr 1fr" />
    </DashboardShell>
  )
}
