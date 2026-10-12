// Form checks for Flow 1. They only help the user fix typos before sending;
// the backend must validate everything again.
// Each validate* function returns { fieldName: message } for every field with a problem.

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
// After removing spaces, dots, dashes and brackets: optional +, then 9 to 15 digits.
const PHONE_PATTERN = /^\+?\d{9,15}$/
const OTP_PATTERN = /^\d{6}$/

// Shown as a live checklist under the new password.
export const PASSWORD_RULES = {
  length: (value) => value.length >= 8,
  upper: (value) => /[A-Z]/.test(value),
  number: (value) => /\d/.test(value),
}

function stripPhoneFormatting(value) {
  return value.replace(/[\s().-]/g, '')
}

// 'email', 'phone', or null when the text is neither.
export function getIdentifierType(value) {
  const text = value.trim()
  if (EMAIL_PATTERN.test(text)) return 'email'
  if (PHONE_PATTERN.test(stripPhoneFormatting(text))) return 'phone'
  return null
}

// One spelling per account: emails in lowercase, phone numbers without spaces or dashes.
export function normalizeIdentifier(value) {
  const text = value.trim()
  return getIdentifierType(text) === 'phone' ? stripPhoneFormatting(text) : text.toLowerCase()
}

function checkIdentifier(value, messages) {
  if (!value.trim()) return messages.identifierRequired
  if (!getIdentifierType(value)) return messages.identifierInvalid
  return undefined
}

function withoutEmpty(errors) {
  return Object.fromEntries(Object.entries(errors).filter(([, message]) => message))
}

export function validateRegister(values, messages) {
  let password
  if (!values.password) password = messages.passwordRequired
  else if (!Object.values(PASSWORD_RULES).every((rule) => rule(values.password))) {
    password = messages.passwordWeak
  }

  let confirmPassword
  if (!values.confirmPassword) confirmPassword = messages.confirmRequired
  else if (values.confirmPassword !== values.password) confirmPassword = messages.confirm

  return withoutEmpty({
    fullName: values.fullName.trim().length < 2 ? messages.fullName : undefined,
    identifier: checkIdentifier(values.identifier, messages),
    password,
    confirmPassword,
    terms: values.terms ? undefined : messages.terms,
  })
}

export function validateLogin(values, messages) {
  return withoutEmpty({
    identifier: checkIdentifier(values.identifier, messages),
    password: values.password ? undefined : messages.passwordRequired,
  })
}

export function validateOtp(values, messages) {
  let code
  if (!values.code) code = messages.otpRequired
  else if (!OTP_PATTERN.test(values.code)) code = messages.otpInvalid
  return withoutEmpty({ code })
}

export function validateForgotPassword(values, messages) {
  return withoutEmpty({ identifier: checkIdentifier(values.identifier, messages) })
}
