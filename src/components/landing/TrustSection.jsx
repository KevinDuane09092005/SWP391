import FeatureCard from './FeatureCard.jsx'
import SectionHeader from './SectionHeader.jsx'

// "Built for trust" — the header's Security link scrolls here.
export default function TrustSection({ content }) {
  const { id, title, description, items } = content

  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`}>
      <div className="container">
        <SectionHeader id={`${id}-title`} title={title} description={description} />
        <div className="card-grid card-grid--three">
          {items.map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}
