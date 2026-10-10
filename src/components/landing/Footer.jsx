import SmartLink from '../SmartLink.jsx'

export default function Footer({ content, navLabel }) {
  const { tagline, links, prototypeNotice } = content

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__inner">
          <p className="site-footer__tagline">
            <strong>LegacyVault</strong> — {tagline}
          </p>
          <nav aria-label={navLabel}>
            <ul className="site-footer__links">
              {links.map((link) => (
                <li key={link.label}>
                  <SmartLink to={link.to} href={link.href} className="site-footer__link">
                    {link.label}
                  </SmartLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <p className="site-footer__notice">{prototypeNotice}</p>
      </div>
    </footer>
  )
}
