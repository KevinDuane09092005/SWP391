import { useEffect, useRef, useState } from 'react'
import Icon from './Icon.jsx'

// Horizontal scroll-snap carousel with dots and previous/next arrows.
// How many slides show per page is set in CSS with `--per-page` on `trackClassName`.
// Users can also swipe or scroll the track; the dots follow along.
// `labels` = { previous, next, goTo: (page, total) => string }.
export default function Carousel({
  items,
  getKey,
  renderSlide,
  slideClassName,
  trackClassName = '',
  labels,
}) {
  const trackRef = useRef(null)
  const [page, setPage] = useState(0)
  const [pageCount, setPageCount] = useState(1)

  // Width of one page = visible width + one gap (the gap after the last visible slide).
  const getStep = (track) =>
    track.clientWidth + (parseFloat(getComputedStyle(track).columnGap) || 0)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return undefined

    const measure = () => {
      const step = getStep(track)
      const maxScroll = track.scrollWidth - track.clientWidth
      const count = maxScroll > 1 ? Math.ceil(maxScroll / step - 0.01) + 1 : 1
      setPageCount(count)
      setPage(Math.min(count - 1, Math.round(track.scrollLeft / step)))
    }

    // ResizeObserver also fires once right away, which sets the first values.
    const observer = new ResizeObserver(measure)
    observer.observe(track)
    track.addEventListener('scroll', measure, { passive: true })
    return () => {
      observer.disconnect()
      track.removeEventListener('scroll', measure)
    }
  }, [items.length])

  const goTo = (index) => {
    const track = trackRef.current
    const target = Math.max(0, Math.min(index, pageCount - 1))
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    track.scrollTo({
      left: Math.min(target * getStep(track), track.scrollWidth - track.clientWidth),
      behavior: reduceMotion ? 'auto' : 'smooth',
    })
  }

  return (
    <>
      <ul ref={trackRef} className={`carousel__track ${trackClassName}`.trim()}>
        {items.map((item, index) => (
          <li key={getKey(item)} className={slideClassName}>
            {renderSlide(item, index)}
          </li>
        ))}
      </ul>

      {pageCount > 1 && (
        <div className="carousel__controls">
          <div className="carousel__dots">
            {Array.from({ length: pageCount }, (_, index) => (
              <button
                key={index}
                type="button"
                className="carousel__dot"
                aria-label={labels.goTo(index + 1, pageCount)}
                aria-current={index === page ? 'true' : undefined}
                onClick={() => goTo(index)}
              />
            ))}
          </div>
          <div className="carousel__arrows">
            <button
              type="button"
              className="carousel__arrow"
              aria-label={labels.previous}
              disabled={page === 0}
              onClick={() => goTo(page - 1)}
            >
              <Icon name="chevronLeft" size={18} />
            </button>
            <button
              type="button"
              className="carousel__arrow"
              aria-label={labels.next}
              disabled={page >= pageCount - 1}
              onClick={() => goTo(page + 1)}
            >
              <Icon name="chevronRight" size={18} />
            </button>
          </div>
        </div>
      )}
    </>
  )
}
