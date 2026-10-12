import { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import AuthLayout from '../../components/auth/AuthLayout.jsx'
import FormAlert from '../../components/auth/FormAlert.jsx'
import FormField from '../../components/auth/FormField.jsx'
import SubmitButton from '../../components/auth/SubmitButton.jsx'
import {
  clearPendingVerification,
  readPendingVerification,
} from '../../auth/session.js'
import { validateOtp } from '../../auth/validation.js'
import { authContent } from '../../data/authContent.js'
import { DEMO_OTP_CODE } from '../../mocks/mockUsers.js'
import useForm from '../../hooks/useForm.js'
import { useLanguage } from '../../i18n/LanguageContext.jsx'
import { IS_DEMO_MODE, resendOtp, verifyOtp } from '../../services/authService.js'

const RESEND_WAIT_SECONDS = 30

// Flow 1 — Enter the 6-digit code after registering.
// In demo mode no code is sent; the page says so and shows the code to use.
export default function VerifyOtpPage() {
  const { language } = useLanguage()
  const t = authContent[language]
  const copy = t.otp
  const navigate = useNavigate()

  // Who registered (saved by the register page). Read once when the page opens.
  const [pending] = useState(readPendingVerification)

  const form = useForm({
    formId: 'otp',
    initialValues: { code: '' },
    validate: (values) => validateOtp(values, t.validation),
    fieldOrder: ['code'],
  })
  const [verifying, setVerifying] = useState(false)
  const [resending, setResending] = useState(false)
  const [serverError, setServerError] = useState(null)
  const [resent, setResent] = useState(false)
  const [cooldown, setCooldown] = useState(RESEND_WAIT_SECONDS)

  // Count down until "Resend code" can be pressed again.
  useEffect(() => {
    if (cooldown <= 0) return undefined
    const timer = setTimeout(() => setCooldown((seconds) => seconds - 1), 1000)
    return () => clearTimeout(timer)
  }, [cooldown])

  // Nobody is waiting for a code (page opened directly): start from registration.
  if (!pending?.identifier) return <Navigate to="/register" replace />

  const handleSubmit = async (event) => {
    event.preventDefault()
    setServerError(null)
    setResent(false)
    if (!form.checkBeforeSubmit()) return

    setVerifying(true)
    try {
      await verifyOtp({ identifier: pending.identifier, code: form.values.code })
      clearPendingVerification()
      navigate('/login', { replace: true, state: { verified: true, identifier: pending.identifier } })
    } catch (error) {
      setServerError(error.code ?? 'generic')
      setVerifying(false)
    }
  }

  const handleResend = async () => {
    setServerError(null)
    setResent(false)
    setResending(true)
    try {
      await resendOtp({ identifier: pending.identifier })
      setResent(true)
      setCooldown(RESEND_WAIT_SECONDS)
      form.setValue('code', '')
    } catch (error) {
      setServerError(error.code ?? 'generic')
    } finally {
      setResending(false)
    }
  }

  const registerAgain = () => {
    clearPendingVerification()
    navigate('/register', { replace: true })
  }

  const busy = verifying || resending

  return (
    <AuthLayout>
      <h1 id="auth-title" className="auth-card__title auth-card__title--first">
        {copy.title}
      </h1>
      <p className="auth-card__subtitle">{copy.subtitle(pending.identifier)}</p>

      {IS_DEMO_MODE && <FormAlert tone="info">{copy.demoNote(DEMO_OTP_CODE)}</FormAlert>}
      {serverError && <FormAlert>{t.errors[serverError] ?? t.errors.generic}</FormAlert>}
      {resent && <FormAlert tone="success">{copy.resent(DEMO_OTP_CODE)}</FormAlert>}

      <form className="auth-form" noValidate onSubmit={handleSubmit}>
        <div className="otp-field">
          <FormField
            {...form.fieldProps('code')}
            // Keep digits only, at most 6.
            onChange={(event) => form.setValue('code', event.target.value.replace(/\D/g, '').slice(0, 6))}
            label={t.fields.code.label}
            placeholder={t.fields.code.placeholder}
            inputMode="numeric"
            autoComplete="one-time-code"
            maxLength={6}
            disabled={busy}
          />
        </div>

        <SubmitButton loading={verifying} loadingText={copy.submitting}>
          {copy.submit}
        </SubmitButton>
      </form>

      <div className="otp-resend">
        <span>{copy.noCode}</span>
        <button
          type="button"
          className="auth-text-button"
          onClick={handleResend}
          disabled={busy || cooldown > 0}
        >
          {resending ? copy.resending : cooldown > 0 ? copy.resendIn(cooldown) : copy.resend}
        </button>
      </div>

      <p className="auth-switch">
        <button type="button" className="auth-text-button" onClick={registerAgain}>
          {copy.wrongAccount}
        </button>
      </p>

      <p className="auth-switch auth-switch--tight">
        <Link to="/login" className="auth-link">
          {t.forgot.back}
        </Link>
      </p>
    </AuthLayout>
  )
}
