import { useState } from 'react'
import Icon from '../Icon.jsx'

// Label + input + optional error, wired up so screen readers announce the error.
// `extra` sits on the label row (e.g. a "Forgot password?" link), `children` below the input.
export default function FormField({
  id,
  label,
  optional,
  error,
  extra,
  type = 'text',
  revealLabels,
  children,
  ...inputProps
}) {
  const [revealed, setRevealed] = useState(false)
  const isPassword = type === 'password'
  const errorId = `${id}-error`

  return (
    <div className={`field${error ? ' field--invalid' : ''}`}>
      <div className="field__label-row">
        <label htmlFor={id} className="field__label">
          {label}
          {optional && <span className="field__optional"> · {optional}</span>}
        </label>
        {extra}
      </div>

      <div className="field__control">
        <input
          id={id}
          type={isPassword && revealed ? 'text' : type}
          className="field__input"
          aria-invalid={error ? 'true' : undefined}
          aria-describedby={error ? errorId : undefined}
          {...inputProps}
        />
        {isPassword && revealLabels && (
          <button
            type="button"
            className="field__reveal"
            aria-label={revealed ? revealLabels.hide : revealLabels.show}
            aria-pressed={revealed}
            onClick={() => setRevealed((value) => !value)}
          >
            <Icon name={revealed ? 'eyeOff' : 'eye'} size={18} />
          </button>
        )}
      </div>

      {error && (
        <p id={errorId} className="field__error">
          <Icon name="alertCircle" size={14} />
          {error}
        </p>
      )}
      {children}
    </div>
  )
}
