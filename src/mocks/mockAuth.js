import { AuthError } from '../auth/AuthError.js'
import { ROLES } from '../auth/roles.js'
import { DEMO_OTP_CODE, DEMO_PASSWORD, mockUsers } from './mockUsers.js'

// DEMO ONLY — pretends to be the backend so Flow 1 can be clicked through.
// - Nothing leaves the browser. No email or SMS is sent; the OTP is always DEMO_OTP_CODE.
// - New accounts are kept in memory only (passwords are never written to storage),
//   so they disappear when the page reloads. The demo accounts in mockUsers.js always work.
// - This is not authentication: it only lets the UI be tested before the backend exists.

const MAX_OTP_ATTEMPTS = 5

// Every demo account is verified and uses DEMO_PASSWORD.
const users = mockUsers.map((user) => ({ ...user, verified: true, password: DEMO_PASSWORD }))
const otpAttempts = new Map()

// Small pause so loading states can be seen, like a real network call.
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const findUser = (identifier) => users.find((user) => user.identifier === identifier)

// What the frontend is allowed to keep: no password, no verification details.
const toPublicUser = ({ id, fullName, identifier, role }) => ({ id, fullName, identifier, role })

export async function mockRegister({ fullName, identifier, password }) {
  await delay(800)
  if (findUser(identifier)) throw new AuthError('ACCOUNT_EXISTS')

  // Self-registration always creates a Vault Owner. Other roles are invited later (Flow 2+).
  users.push({
    id: `demo-${Date.now()}`,
    fullName,
    identifier,
    role: ROLES.VAULT_OWNER,
    verified: false,
    password,
  })
  otpAttempts.set(identifier, 0)
  return { identifier, verificationRequired: true }
}

export async function mockVerifyOtp({ identifier, code }) {
  await delay(700)
  const user = findUser(identifier)
  if (!user) throw new AuthError('REGISTRATION_NOT_FOUND')
  if (user.verified) return { verified: true }

  const attempts = otpAttempts.get(identifier) ?? 0
  if (attempts >= MAX_OTP_ATTEMPTS) throw new AuthError('OTP_ATTEMPTS_EXCEEDED')
  if (code !== DEMO_OTP_CODE) {
    otpAttempts.set(identifier, attempts + 1)
    throw new AuthError('INVALID_OTP')
  }

  user.verified = true
  otpAttempts.delete(identifier)
  return { verified: true }
}

export async function mockResendOtp({ identifier }) {
  await delay(600)
  if (!findUser(identifier)) throw new AuthError('REGISTRATION_NOT_FOUND')
  otpAttempts.set(identifier, 0)
  return { resent: true }
}

export async function mockLogin({ identifier, password }) {
  await delay(700)
  const user = findUser(identifier)
  // Same error for "no such account" and "wrong password", so accounts cannot be guessed.
  if (!user || user.password !== password) throw new AuthError('INVALID_CREDENTIALS')
  if (!user.verified) throw new AuthError('ACCOUNT_NOT_VERIFIED')
  return { user: toPublicUser(user) }
}

export async function mockRequestPasswordReset() {
  await delay(700)
  // Always "succeeds" so the page does not reveal which accounts exist.
  return { requested: true }
}

export async function mockLogout() {
  await delay(200)
  return { loggedOut: true }
}
