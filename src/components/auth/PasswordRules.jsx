import Icon from '../Icon.jsx'
import { PASSWORD_RULES } from '../../auth/validation.js'

// Live checklist under the new password: each rule turns green once it is met.
export default function PasswordRules({ password, labels }) {
  return (
    <div className="password-rules">
      <p className="password-rules__title">{labels.title}</p>
      <ul>
        {Object.entries(PASSWORD_RULES).map(([key, rule]) => {
          const met = rule(password)
          return (
            <li key={key} className={met ? 'is-met' : undefined}>
              <Icon name={met ? 'check' : 'close'} size={13} strokeWidth={2.4} />
              {labels[key]}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
