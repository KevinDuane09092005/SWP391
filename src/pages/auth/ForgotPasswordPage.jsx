import { useState } from 'react'
import { Link } from 'react-router-dom'
import AuthLayout from '../../components/auth/AuthLayout.jsx'
import FormAlert from '../../components/auth/FormAlert.jsx'
import FormField from '../../components/auth/FormField.jsx'
import SubmitButton from '../../components/auth/SubmitButton.jsx'
import { normalizeIdentifier, validateForgotPassword } from '../../auth/validation.js'
import { authContent } from '../../data/authContent.js'
import useForm from '../../hooks/useForm.js'
import { useLanguage } from '../../i18n/LanguageContext.jsx'
import { requestPasswordReset } from '../../services/authService.js'

// Forgot password — interface only. Resetting a password is not part of Flow 1 yet,
// so the demo sends nothing and says so.
export default function ForgotPasswordPage() {
  const { language } = useLanguage()
  const t = authContent[language]
  const copy = t.forgot

  const form = useForm({
    formId: 'forgot',
    initialValues: { identifier: '' },
    validate: (values) => validateForgotPassword(values, t.validation),
    fieldOrder: ['identifier'],
  })
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const [serverError, setServerError] = useState(null)

  const handleSubmit = async (event) => {
    event.preventDefault()
    setSent(false)
    setServerError(null)
    if (!form.checkBeforeSubmit()) return

    setLoading(true)
    try {
      await requestPasswordReset({ identifier: normalizeIdentifier(form.values.identifier) })
      setSent(true)
    } catch (error) {
      setServerError(error.code ?? 'generic')
    } finally {
      setLoading(false)
    }
  }

  return (
    <AuthLayout>
      <h1 id="auth-title" className="auth-card__title auth-card__title--first">
        {copy.title}
      </h1>
      <p className="auth-card__subtitle">{copy.subtitle}</p>

      {sent && <FormAlert tone="info">{copy.sent}</FormAlert>}
      {serverError && <FormAlert>{t.errors[serverError] ?? t.errors.generic}</FormAlert>}

      <form className="auth-form" noValidate onSubmit={handleSubmit}>
        <FormField
          {...form.fieldProps('identifier')}
          label={t.fields.identifier.label}
          placeholder={t.fields.identifier.placeholder}
          autoComplete="username"
          disabled={loading}
        />
        <SubmitButton loading={loading} loadingText={copy.submitting}>
          {copy.submit}
        </SubmitButton>
      </form>

      <p className="auth-switch">
        <Link to="/login" className="auth-link">
          {copy.back}
        </Link>
      </p>
    </AuthLayout>
  )
}
