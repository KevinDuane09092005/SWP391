import FeatureCard from './FeatureCard.jsx'
import SectionHeader from './SectionHeader.jsx'

// "What can you store?" — six cards in a three-column grid on desktop.
export default function StorageGrid({ content }) {
  const { id, title, description, items } = content

  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`}>
      <div className="container">
        <SectionHeader id={`${id}-title`} title={title} description={description} />
        <div className="card-grid card-grid--storage">
          {items.map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}
