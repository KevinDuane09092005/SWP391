// Title and short description shown at the top of each landing section.
export default function SectionHeader({ id, title, description }) {
  return (
    <div className="section-header">
      <h2 id={id} className="section-header__title">
        {title}
      </h2>
      {description && <p className="section-header__text">{description}</p>}
    </div>
  )
}
