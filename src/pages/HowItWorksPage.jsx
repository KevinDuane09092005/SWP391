import Carousel from '../components/Carousel.jsx'
import Icon from '../components/Icon.jsx'
import Header from '../components/landing/Header.jsx'
import Footer from '../components/landing/Footer.jsx'
import ReleaseSlide from '../components/how-it-works/ReleaseSlide.jsx'
import DashboardShell from '../components/preview/DashboardShell.jsx'
import MiniTable from '../components/preview/MiniTable.jsx'
import { dashboardShellContent } from '../data/dashboardShellContent.js'
import { howItWorksContent } from '../data/howItWorksContent.js'
import { landingContent } from '../data/landingContent.js'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import '../styles/landing.css'
import '../styles/marketing.css'
import '../styles/how-it-works.css'

export default function HowItWorksPage() {
  const { language } = useLanguage()
  const { ui, navLinks, footer } = landingContent[language]
  const { hero, preview, pillars, releasePath } = howItWorksContent[language]

  return (
    <div className="marketing-page">
      <Header links={navLinks} ui={ui} />
      <main>
        <section className="hiw-hero">
          <div className="container">
            <div className="hiw-hero__inner">
              <div>
                <span className="eyebrow">{hero.eyebrow}</span>
                <h1 className="hiw-hero__title">{hero.title}</h1>
                <p className="hiw-hero__text">{hero.description}</p>
              </div>

              <DashboardShell shell={dashboardShellContent[language]} chips={hero.chips}>
                <MiniTable table={preview.connected} columns="1fr 0.8fr 0.9fr 1.2fr 1fr 1fr" />
                <MiniTable table={preview.requests} columns="0.8fr 1fr 0.9fr 1fr 1fr 0.8fr" />
              </DashboardShell>
            </div>

            <div className="hiw-pillars">
              {pillars.map((pillar) => (
                <article key={pillar.title} className="card hiw-pillar">
                  <div className="hiw-pillar__head">
                    <span className="icon-tile icon-tile--round">
                      <Icon name={pillar.icon} size={18} />
                    </span>
                    <h2 className="hiw-pillar__title">{pillar.title}</h2>
                  </div>
                  <p className="hiw-pillar__text">{pillar.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id={releasePath.id}
          className="section section--tight"
          aria-labelledby={`${releasePath.id}-title`}
        >
          <div className="container">
            <span className="eyebrow">{releasePath.eyebrow}</span>
            <h2 id={`${releasePath.id}-title`} className="block-title">
              {releasePath.title}
            </h2>
            <p className="block-text">{releasePath.description}</p>

            <Carousel
              items={releasePath.slides}
              getKey={(slide) => slide.step}
              slideClassName="card release-card-slide"
              labels={releasePath.carousel}
              renderSlide={(slide) => <ReleaseSlide slide={slide} />}
            />
          </div>
        </section>
      </main>
      <Footer content={footer} navLabel={ui.footerNavLabel} />
    </div>
  )
}
