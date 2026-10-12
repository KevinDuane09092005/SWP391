import Icon from '../Icon.jsx'

const icons = { error: 'alertCircle', success: 'check', info: 'info' }

// Message box above a form. Errors are announced right away (role="alert"),
// success and info messages politely (role="status").
export default function FormAlert({ tone = 'error', children }) {
  return (
    <div className={`auth-alert auth-alert--${tone}`} role={tone === 'error' ? 'alert' : 'status'}>
      <Icon name={icons[tone]} size={18} />
      <div>{children}</div>
    </div>
  )
}
