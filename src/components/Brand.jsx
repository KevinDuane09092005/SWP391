import Icon from './Icon.jsx'
import SmartLink from './SmartLink.jsx'

// The LegacyVault logo mark and name.
export default function Brand({ to, href, onClick, label = 'LegacyVault home' }) {
  return (
    <SmartLink to={to} href={href} onClick={onClick} className="brand" aria-label={label}>
      <span className="brand__mark">
        <Icon name="shieldCheck" size={18} strokeWidth={2} />
      </span>
      <span>LegacyVault</span>
    </SmartLink>
  )
}
