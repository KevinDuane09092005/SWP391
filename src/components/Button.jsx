import Icon from './Icon.jsx'
import SmartLink from './SmartLink.jsx'

// One button style for the whole app.
// Pass `to` for a page link, `href` for an in-page anchor, or neither for a normal <button>.
export default function Button({
  variant = 'primary',
  size,
  icon,
  to,
  href,
  type = 'button',
  className = '',
  children,
  ...rest
}) {
  const classes = ['btn', `btn-${variant}`, size && `btn-${size}`, className]
    .filter(Boolean)
    .join(' ')

  const content = (
    <>
      {children}
      {icon && <Icon name={icon} size={16} />}
    </>
  )

  if (to || href) {
    return (
      <SmartLink to={to} href={href} className={classes} {...rest}>
        {content}
      </SmartLink>
    )
  }

  return (
    <button type={type} className={classes} {...rest}>
      {content}
    </button>
  )
}
