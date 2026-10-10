import Carousel from '../Carousel.jsx'
import Icon from '../Icon.jsx'

// "What to add first" — 3 cards per page on desktop, 2 on tablet, 1 on phones (home.css).
export default function AddFirstCarousel({ content }) {
  const { id, eyebrow, title, description, items, carousel } = content

  return (
    <section id={id} className="section section--tight" aria-labelledby={`${id}-title`}>
      <div className="container">
        <span className="eyebrow">{eyebrow}</span>
        <h2 id={`${id}-title`} className="block-title">
          {title}
        </h2>
        <p className="block-text">{description}</p>

        <Carousel
          items={items}
          getKey={(item) => item.title}
          trackClassName="add-first__track"
          slideClassName="card add-first__card"
          labels={carousel}
          renderSlide={(item) => (
            <>
              <div className="add-first__card-head">
                <span className="icon-tile icon-tile--round">
                  <Icon name={item.icon} size={17} />
                </span>
                <h3 className="add-first__card-title">{item.title}</h3>
              </div>
              <p className="add-first__card-text">{item.text}</p>
            </>
          )}
        />
      </div>
    </section>
  )
}
