// One table inside the mini dashboard preview.
// A cell is plain text, or { tag }, { button }, or { text, sub } for two lines.
function Cell({ cell }) {
  if (typeof cell === 'string') return <span>{cell}</span>
  if (cell.tag) {
    return (
      <span>
        <span className={`dash__tag${cell.muted ? ' dash__tag--muted' : ''}`}>{cell.tag}</span>
      </span>
    )
  }
  if (cell.button) {
    return (
      <span>
        <span className="dash__button">{cell.button}</span>
      </span>
    )
  }
  return (
    <span>
      <strong>{cell.text}</strong>
      <span className="dash__sub">{cell.sub}</span>
    </span>
  )
}

// `columns` is a CSS grid-template-columns value, e.g. '1.3fr 1fr 1.4fr 0.7fr 1fr'.
export default function MiniTable({ table, columns }) {
  return (
    <div className="dash__table">
      <div className="dash__table-head">
        <strong className="dash__table-title">{table.title}</strong>
        {table.badge && <span className="dash__tag">{table.badge}</span>}
      </div>
      <p className="dash__muted">{table.text}</p>
      <div className="dash__search">
        <span>{table.search}</span>
        <span className="dash__muted">{table.total}</span>
      </div>
      <div className="dash__row dash__row--head" style={{ '--cols': columns }}>
        {table.columns.map((column) => (
          <span key={column}>{column}</span>
        ))}
      </div>
      {table.rows.map((row, rowIndex) => (
        <div key={rowIndex} className="dash__row" style={{ '--cols': columns }}>
          {row.map((cell, cellIndex) => (
            <Cell key={cellIndex} cell={cell} />
          ))}
        </div>
      ))}
      {table.footer && <p className="dash__muted dash__table-foot">{table.footer}</p>}
    </div>
  )
}
