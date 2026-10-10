// One step of the release path: an example panel on the left, the explanation on the right.
// The panel is built from optional blocks (see the note in howItWorksContent.js).

function Steps({ steps }) {
  return (
    <ol className="rv-steps">
      {steps.map((step, index) => (
        <li key={step.title} className="rv-box rv-steps__item">
          <span className="rv-steps__number">{index + 1}</span>
          <strong className="rv-box__title">{step.title}</strong>
          <p className="rv-box__text">{step.text}</p>
        </li>
      ))}
    </ol>
  )
}

function Tiles({ tiles }) {
  return (
    <ul className="rv-tiles">
      {tiles.map((tile) => (
        <li key={tile.name} className={`rv-box${tile.unlocked ? ' rv-box--highlight' : ''}`}>
          <strong className="rv-box__title">{tile.name}</strong>
          <p className="rv-box__text">{tile.status}</p>
        </li>
      ))}
    </ul>
  )
}

function List({ list }) {
  return (
    <div className="rv-box rv-list">
      <div className="rv-list__head">
        <strong className="rv-box__title">{list.title}</strong>
        {list.meta && <span className="rv-list__meta">{list.meta}</span>}
        {list.badge && <span className="badge">{list.badge}</span>}
      </div>
      <ul className="rv-list__rows">
        {list.rows.map((row) => (
          <li key={row.name} className={`rv-list__row${row.status ? ' rv-list__row--status' : ''}`}>
            <span>{row.name}</span>
            {row.tag && <span className="badge">{row.tag}</span>}
            {row.status && <span className="rv-list__status">{row.status}</span>}
          </li>
        ))}
      </ul>
    </div>
  )
}

function Cards({ cards }) {
  return (
    <ul className="rv-cards" style={{ '--count': cards.length }}>
      {cards.map((card) => (
        <li key={card.title} className={`rv-box${card.highlight ? ' rv-box--highlight' : ''}`}>
          <strong className="rv-box__title">{card.title}</strong>
          {card.lines.map((line) => (
            <p key={line} className="rv-box__text">
              {line}
            </p>
          ))}
        </li>
      ))}
    </ul>
  )
}

export default function ReleaseSlide({ slide }) {
  const { label, step, title, text, visual } = slide

  return (
    <div className="release-slide">
      <div className="release-slide__visual">
        <span className="eyebrow eyebrow--solid">{label}</span>
        <div className="rv">
          <div className="rv__head">
            <span className="badge">{visual.badge}</span>
            <p className="rv__caption">{visual.caption}</p>
          </div>
          {visual.steps && <Steps steps={visual.steps} />}
          {visual.tiles && <Tiles tiles={visual.tiles} />}
          {visual.list && <List list={visual.list} />}
          {visual.cards && <Cards cards={visual.cards} />}
        </div>
      </div>

      <div className="release-slide__copy">
        <span className="eyebrow eyebrow--solid release-slide__step">{step}</span>
        <h3 className="release-slide__title">{title}</h3>
        <p className="release-slide__text">{text}</p>
      </div>
    </div>
  )
}
