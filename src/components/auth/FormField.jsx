import { useState } from 'react'
import Icon from '../Icon.jsx'

// Label + input + optional error, wired up so screen readers announce the error.
// `extra` sits on the label row (e.g. a "Forgot password?" link), `children` below the input.
// `as` picks the control: 'input' (default), 'textarea', or 'select' (with `options`
// = [{ value, label }] and an optional first `emptyOption` text). `hint` is help text.
export default function FormField({
  id,
  label,
  optional,
  error,
  hint,
  extra,
  as = 'input',
  options = [],
  emptyOption,
  type = 'text',
  revealLabels,
  children,
  ...inputProps
}) {
  const [revealed, setRevealed] = useState(false)
  const isPassword = as === 'input' && type === 'password'
  const errorId = `${id}-error`
  const hintId = `${id}-hint`
  const describedBy = [hint && hintId, error && errorId].filter(Boolean).join(' ') || undefined

  const shared = {
    id,
    className: `field__input${as === 'textarea' ? ' field__input--textarea' : ''}`,
    'aria-invalid': error ? 'true' : undefined,
    'aria-describedby': describedBy,
    ...inputProps,
  }

  let control
  if (as === 'textarea') {
    control = <textarea rows={4} {...shared} />
  } else if (as === 'select') {
    control = (
      <select {...shared}>
        {emptyOption && <option value="">{emptyOption}</option>}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    )
  } else {
    control = <input type={isPassword && revealed ? 'text' : type} {...shared} />
  }

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
        {control}
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

      {hint && (
        <p id={hintId} className="field__hint">
          {hint}
        </p>
      )}
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
