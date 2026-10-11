import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import Brand from '../components/Brand.jsx'
import Button from '../components/Button.jsx'
import Icon from '../components/Icon.jsx'
import LanguageSwitcher from '../components/LanguageSwitcher.jsx'
import FormField from '../components/auth/FormField.jsx'
import { authContent } from '../data/authContent.js'
import { landingContent } from '../data/landingContent.js'
import { pricingContent } from '../data/pricingContent.js'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import { signIn, signUp } from '../services/authService.js'
import '../styles/marketing.css'
import '../styles/auth.css'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const PHONE_PATTERN = /^\+?[\d\s().-]{7,20}$/

// Shown as a live checklist under the new password.
const PASSWORD_RULES = {
  length: (value) => value.length >= 8,
  upper: (value) => /[A-Z]/.test(value),
  number: (value) => /\d/.test(value),
}

// Field order, used to focus the first field with an error.
const FIELDS = {
  signup: ['fullName', 'email', 'phone', 'password', 'confirmPassword', 'terms'],
  signin: ['email', 'password'],
}

const EMPTY = {
  fullName: '',
  email: '',
  phone: '',
  password: '',
  confirmPassword: '',
  terms: false,
  remember: false,
}

function validate(mode, values, messages) {
  const errors = {}
  const email = values.email.trim()

  if (mode === 'signup' && values.fullName.trim().length < 2) errors.fullName = messages.fullName
  if (!email) errors.email = messages.emailRequired
  else if (!EMAIL_PATTERN.test(email)) errors.email = messages.emailInvalid

  if (!values.password) errors.password = messages.passwordRequired

  if (mode === 'signup') {
    const phone = values.phone.trim()
    if (phone && !PHONE_PATTERN.test(phone)) errors.phone = messages.phone
    if (values.password && !Object.values(PASSWORD_RULES).every((rule) => rule(values.password))) {
      errors.password = messages.passwordWeak
    }
    if (values.confirmPassword !== values.password) errors.confirmPassword = messages.confirm
    if (!values.terms) errors.terms = messages.terms
  }
  return errors
}

// Sign in (/login) and sign up (/register) share this page; `mode` picks the form.
// Only the UI lives here. Requests go through src/services/authService.js.
export default function AuthPage({ mode }) {
  const { language } = useLanguage()
  const t = authContent[language]
  const copy = t[mode]
  const isSignup = mode === 'signup'

  // Plan chosen on the pricing page, e.g. /register?plan=essentials&billing=yearly
  const [searchParams] = useSearchParams()
  const pricing = pricingContent[language]
  const plan = pricing.plans[searchParams.get('plan')]
  const billing = searchParams.get('billing') === 'yearly' ? 'yearly' : 'monthly'

  const [values, setValues] = useState(EMPTY)
  const [touched, setTouched] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [status, setStatus] = useState('idle') // 'idle' | 'submitting' | 'success'
  const [serverError, setServerError] = useState(null)
  const [user, setUser] = useState(null)

  const errors = validate(mode, values, t.validation)
  // Show a field's error after the user leaves it once, or after the first submit.
  const errorFor = (name) => ((submitted || touched[name]) && errors[name]) || undefined

  const update = (name) => (event) => {
    const { type, checked, value } = event.target
    setValues((current) => ({ ...current, [name]: type === 'checkbox' ? checked : value }))
  }
  const markTouched = (name) => () => setTouched((current) => ({ ...current, [name]: true }))

  const handleSubmit = async (event) => {
    event.preventDefault()
    setSubmitted(true)
    setServerError(null)

    const firstInvalid = FIELDS[mode].find((name) => errors[name])
    if (firstInvalid) {
      document.getElementById(`${mode}-${firstInvalid}`)?.focus()
      return
    }

    setStatus('submitting')
    try {
      const result = isSignup
        ? await signUp({
            fullName: values.fullName.trim(),
            email: values.email.trim(),
            phone: values.phone.trim(),
            password: values.password,
            plan: plan ? searchParams.get('plan') : '',
            billing: plan ? billing : '',
          })
        : await signIn({
            email: values.email.trim(),
            password: values.password,
            remember: values.remember,
          })
      setUser(result.user)
      setStatus('success')
    } catch (error) {
      setServerError(error.code ?? 'generic')
      setStatus('idle')
    }
  }

  const submitting = status === 'submitting'
  const fieldProps = (name) => ({
    id: `${mode}-${name}`,
    name,
    value: values[name],
    onChange: update(name),
    onBlur: markTouched(name),
    error: errorFor(name),
    disabled: submitting,
  })
  const revealLabels = { show: t.showPassword, hide: t.hidePassword }

  return (
    <div className="marketing-page auth-page">
      <header className="auth-topbar">
        <div className="container auth-topbar__inner">
          <Brand to="/" label={landingContent[language].ui.brandLabel} />
          <div className="auth-topbar__end">
            <LanguageSwitcher label={t.languageLabel} />
            <Link to="/home" className="auth-topbar__back">
              <Icon name="arrowLeft" size={16} />
              <span>{t.backHome}</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="container auth-main">
        <div className="auth-layout">
          <aside className="auth-panel">
            <span className="auth-panel__mark" aria-hidden="true">
              <Icon name="shieldCheck" size={26} strokeWidth={1.8} />
            </span>
            <h2 className="auth-panel__title">{t.panel.title}</h2>
            <ul className="auth-panel__points">
              {t.panel.points.map((point) => (
                <li key={point}>
                  <Icon name="check" size={18} strokeWidth={2.2} />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </aside>

          <section className="card auth-card" aria-labelledby="auth-title">
            <nav className="auth-tabs" aria-label={t.tabsLabel}>
              <Link
                to="/register"
                className="auth-tabs__tab"
                aria-current={isSignup ? 'page' : undefined}
              >
                {t.tabs.signup}
              </Link>
              <Link
                to="/login"
                className="auth-tabs__tab"
                aria-current={isSignup ? undefined : 'page'}
              >
                {t.tabs.signin}
              </Link>
            </nav>

            {status === 'success' ? (
              <div className="auth-success" role="status">
                <span className="auth-success__icon">
                  <Icon name="check" size={26} strokeWidth={2.4} />
                </span>
                <h1 id="auth-title" className="auth-card__title">
                  {isSignup ? t.success.signupTitle : t.success.signinTitle}
                </h1>
                <p className="auth-card__subtitle">
                  {isSignup ? t.success.signupText(user.fullName) : t.success.signinText(user.email)}
                </p>
                <p className="auth-success__note">{t.success.prototype}</p>
                <Button to="/home" size="lg" className="auth-submit">
                  {t.success.cta}
                </Button>
              </div>
            ) : (
              <>
                <h1 id="auth-title" className="auth-card__title">
                  {copy.title}
                </h1>
                <p className="auth-card__subtitle">{copy.subtitle}</p>

                {isSignup && plan && (
                  <p className="auth-plan">
                    <span>
                      {copy.selectedPlan}: <strong>{plan.name}</strong> ·{' '}
                      {pricing.controls[billing]}
                    </span>
                    <Link to="/pricing" className="auth-link">
                      {copy.changePlan}
                    </Link>
                  </p>
                )}

                {serverError && (
                  <div className="auth-alert" role="alert">
                    <Icon name="alertCircle" size={18} />
                    <span>{t.errors[serverError] ?? t.errors.generic}</span>
                  </div>
                )}

                <form className="auth-form" noValidate onSubmit={handleSubmit}>
                  {isSignup && (
                    <FormField
                      {...fieldProps('fullName')}
                      label={t.fields.fullName.label}
                      placeholder={t.fields.fullName.placeholder}
                      autoComplete="name"
                    />
                  )}

                  <FormField
                    {...fieldProps('email')}
                    type="email"
                    label={t.fields.email.label}
                    placeholder={t.fields.email.placeholder}
                    autoComplete="email"
                    inputMode="email"
                  />

                  {isSignup && (
                    <FormField
                      {...fieldProps('phone')}
                      type="tel"
                      label={t.fields.phone.label}
                      optional={t.fields.phone.optional}
                      placeholder={t.fields.phone.placeholder}
                      autoComplete="tel"
                    />
                  )}

                  <FormField
                    {...fieldProps('password')}
                    type="password"
                    label={t.fields.password.label}
                    placeholder={
                      isSignup ? t.fields.password.newPlaceholder : t.fields.password.placeholder
                    }
                    autoComplete={isSignup ? 'new-password' : 'current-password'}
                    revealLabels={revealLabels}
                    extra={
                      !isSignup && (
                        <Link to="/forgot-password" className="auth-link">
                          {copy.forgot}
                        </Link>
                      )
                    }
                  >
                    {isSignup && (
                      <div className="password-rules">
                        <p className="password-rules__title">{t.passwordRules.title}</p>
                        <ul>
                          {Object.entries(PASSWORD_RULES).map(([key, rule]) => {
                            const met = rule(values.password)
                            return (
                              <li key={key} className={met ? 'is-met' : undefined}>
                                <Icon name={met ? 'check' : 'close'} size={13} strokeWidth={2.4} />
                                {t.passwordRules[key]}
                              </li>
                            )
                          })}
                        </ul>
                      </div>
                    )}
                  </FormField>

                  {isSignup && (
                    <FormField
                      {...fieldProps('confirmPassword')}
                      type="password"
                      label={t.fields.confirmPassword.label}
                      placeholder={t.fields.confirmPassword.placeholder}
                      autoComplete="new-password"
                      revealLabels={revealLabels}
                    />
                  )}

                  {isSignup ? (
                    <div className={`check-field${errorFor('terms') ? ' check-field--invalid' : ''}`}>
                      <label className="check-field__label">
                        <input
                          id="signup-terms"
                          type="checkbox"
                          checked={values.terms}
                          onChange={update('terms')}
                          disabled={submitting}
                          aria-invalid={errorFor('terms') ? 'true' : undefined}
                          aria-describedby={errorFor('terms') ? 'signup-terms-error' : undefined}
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
                      {errorFor('terms') && (
                        <p id="signup-terms-error" className="field__error">
                          <Icon name="alertCircle" size={14} />
                          {errorFor('terms')}
                        </p>
                      )}
                    </div>
                  ) : (
                    <label className="check-field__label">
                      <input
                        type="checkbox"
                        checked={values.remember}
                        onChange={update('remember')}
                        disabled={submitting}
                      />
                      <span>{copy.remember}</span>
                    </label>
                  )}

                  <Button type="submit" size="lg" className="auth-submit" disabled={submitting}>
                    {submitting && <span className="spinner" aria-hidden="true" />}
                    {submitting ? copy.submitting : copy.submit}
                  </Button>
                </form>

                <p className="auth-switch">
                  {copy.switchPrompt}{' '}
                  <Link to={isSignup ? '/login' : '/register'} className="auth-link">
                    {copy.switchLink}
                  </Link>
                </p>
              </>
            )}
          </section>
        </div>
      </main>
    </div>
  )
}
