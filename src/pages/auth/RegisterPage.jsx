import { useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import AuthLayout from '../../components/auth/AuthLayout.jsx'
import FormAlert from '../../components/auth/FormAlert.jsx'
import FormField from '../../components/auth/FormField.jsx'
import PasswordRules from '../../components/auth/PasswordRules.jsx'
import SubmitButton from '../../components/auth/SubmitButton.jsx'
import Icon from '../../components/Icon.jsx'
import { savePendingVerification } from '../../auth/session.js'
import { normalizeIdentifier, validateRegister } from '../../auth/validation.js'
import { authContent } from '../../data/authContent.js'
import { pricingContent } from '../../data/pricingContent.js'
import useForm from '../../hooks/useForm.js'
import { useLanguage } from '../../i18n/LanguageContext.jsx'
import { register } from '../../services/authService.js'

// Flow 1 — Create a Vault Owner account, then continue to OTP verification.
export default function RegisterPage() {
  const { language } = useLanguage()
  const t = authContent[language]
  const copy = t.signup
  const navigate = useNavigate()

  // Plan chosen on the pricing page, e.g. /register?plan=essentials&billing=yearly
  const [searchParams] = useSearchParams()
  const pricing = pricingContent[language]
  const planId = searchParams.get('plan')
  const plan = pricing.plans[planId]
  const billing = searchParams.get('billing') === 'yearly' ? 'yearly' : 'monthly'

  const form = useForm({
    formId: 'register',
    initialValues: { fullName: '', identifier: '', password: '', confirmPassword: '', terms: false },
    validate: (values) => validateRegister(values, t.validation),
    fieldOrder: ['fullName', 'identifier', 'password', 'confirmPassword', 'terms'],
  })
  const [loading, setLoading] = useState(false)
  const [serverError, setServerError] = useState(null)

  const handleSubmit = async (event) => {
    event.preventDefault()
    setServerError(null)
    if (!form.checkBeforeSubmit()) return

    const fullName = form.values.fullName.trim()
    const identifier = normalizeIdentifier(form.values.identifier)
    setLoading(true)
    try {
      await register({
        fullName,
        identifier,
        password: form.values.password,
        plan: plan ? planId : '',
        billing: plan ? billing : '',
      })
      // Only the name and email/phone are kept for the OTP page — never the password.
      savePendingVerification({ identifier, fullName })
      navigate('/verify-otp')
    } catch (error) {
      setServerError(error.code ?? 'generic')
      setLoading(false)
    }
  }

  const termsError = form.errorFor('terms')
  const revealLabels = { show: t.showPassword, hide: t.hidePassword }

  return (
    <AuthLayout activeTab="signup">
      <h1 id="auth-title" className="auth-card__title">
        {copy.title}
      </h1>
      <p className="auth-card__subtitle">{copy.subtitle}</p>

      {plan && (
        <p className="auth-plan">
          <span>
            {copy.selectedPlan}: <strong>{plan.name}</strong> · {pricing.controls[billing]}
          </span>
          <Link to="/pricing" className="auth-link">
            {copy.changePlan}
          </Link>
        </p>
      )}

      {serverError && <FormAlert>{t.errors[serverError] ?? t.errors.generic}</FormAlert>}

      <form className="auth-form" noValidate onSubmit={handleSubmit}>
        <FormField
          {...form.fieldProps('fullName')}
          label={t.fields.fullName.label}
          placeholder={t.fields.fullName.placeholder}
          autoComplete="name"
          disabled={loading}
        />

        <FormField
          {...form.fieldProps('identifier')}
          label={t.fields.identifier.label}
          placeholder={t.fields.identifier.placeholder}
          autoComplete="username"
          disabled={loading}
        />

        <FormField
          {...form.fieldProps('password')}
          type="password"
          label={t.fields.password.label}
          placeholder={t.fields.password.newPlaceholder}
          autoComplete="new-password"
          revealLabels={revealLabels}
          disabled={loading}
        >
          <PasswordRules password={form.values.password} labels={t.passwordRules} />
        </FormField>

        <FormField
          {...form.fieldProps('confirmPassword')}
          type="password"
          label={t.fields.confirmPassword.label}
          placeholder={t.fields.confirmPassword.placeholder}
          autoComplete="new-password"
          revealLabels={revealLabels}
          disabled={loading}
        />

        <div>
          <label className="check-field__label">
            <input
              id="register-terms"
              type="checkbox"
              checked={form.values.terms}
              onChange={form.handleChange('terms')}
              disabled={loading}
              aria-invalid={termsError ? 'true' : undefined}
              aria-describedby={termsError ? 'register-terms-error' : undefined}
            />
            <span>
              {t.terms.before}{' '}
              <a href="/terms" target="_blank" rel="noreferrer" className="auth-link">
                {t.terms.terms}
              </a>{' '}
              {t.terms.and}{' '}
              <a href="/privacy" target="_blank" rel="noreferrer" className="auth-link">
                {t.terms.privacy}
              </a>
              {t.terms.after}
            </span>
          </label>
          {termsError && (
            <p id="register-terms-error" className="field__error">
              <Icon name="alertCircle" size={14} />
              {termsError}
            </p>
          )}
        </div>

        <SubmitButton loading={loading} loadingText={copy.submitting}>
          {copy.submit}
        </SubmitButton>
      </form>

      <p className="auth-switch">
        {copy.switchPrompt}{' '}
        <Link to="/login" className="auth-link">
          {copy.switchLink}
        </Link>
      </p>
    </AuthLayout>
  )
}
