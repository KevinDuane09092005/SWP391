import { useState } from 'react'

// Small form helper used by the sign in, register, OTP and forgot-password pages.
// - `validate(values)` returns { fieldName: message } for every field with a problem.
// - A field shows its error after the user leaves it once, or after the first submit.
// - Inputs get the id `${formId}-${name}`, so the first bad field can be focused.
export default function useForm({ formId, initialValues, validate, fieldOrder }) {
  const [values, setValues] = useState(initialValues)
  const [touched, setTouched] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const errors = validate(values)
  const errorFor = (name) => ((submitted || touched[name]) && errors[name]) || undefined

  const setValue = (name, value) => setValues((current) => ({ ...current, [name]: value }))

  const handleChange = (name) => (event) => {
    const { type, checked, value } = event.target
    setValue(name, type === 'checkbox' ? checked : value)
  }

  // Props for <FormField>: id, value, change/blur handlers and the error to show.
  const fieldProps = (name) => ({
    id: `${formId}-${name}`,
    name,
    value: values[name],
    onChange: handleChange(name),
    onBlur: () => setTouched((current) => ({ ...current, [name]: true })),
    error: errorFor(name),
  })

  // Call at the start of onSubmit. Returns true when everything is valid;
  // otherwise shows all errors and moves the cursor to the first bad field.
  const checkBeforeSubmit = () => {
    setSubmitted(true)
    const firstInvalid = fieldOrder.find((name) => errors[name])
    if (firstInvalid) {
      document.getElementById(`${formId}-${firstInvalid}`)?.focus()
      return false
    }
    return true
  }

  return { values, setValue, errorFor, handleChange, fieldProps, checkBeforeSubmit }
}
