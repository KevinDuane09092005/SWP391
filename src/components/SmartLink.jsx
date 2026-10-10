import { Link } from 'react-router-dom'

// Renders a router <Link> for app pages (`to`) or a plain <a> for in-page anchors (`href`).
export default function SmartLink({ to, href, children, ...rest }) {
  if (to) {
    return (
      <Link to={to} {...rest}>
        {children}
      </Link>
    )
  }

  return (
    <a href={href} {...rest}>
      {children}
    </a>
  )
}
