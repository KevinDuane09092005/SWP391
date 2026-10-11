// Sign in / sign up calls for the auth page.
//
// Backend hook-up: replace the mock bodies below with real requests, e.g.
//
//   const response = await fetch('/api/auth/login', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ email, password, remember }),
//   })
//   if (!response.ok) throw new AuthError((await response.json()).code)
//   return response.json()
//
// To show a translated message, throw an AuthError with one of these codes
// (texts are in src/data/authContent.js under `errors`):
//   INVALID_CREDENTIALS  wrong email or password
//   EMAIL_TAKEN          sign up with an email that already has an account
//   NETWORK              could not reach the server
// Any other error shows the generic message.

export class AuthError extends Error {
  constructor(code, message = code) {
    super(message)
    this.name = 'AuthError'
    this.code = code
  }
}

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

// Request body: { email, password, remember }
// Expected response: { user: { id, fullName, email } }
export async function signIn({ email }) {
  await wait(700)
  return { user: { id: 'demo', fullName: 'Demo Owner', email } }
}

// Request body: { fullName, email, phone, password, plan, billing }
// `plan` and `billing` come from the pricing page link and may be empty.
// Expected response: { user: { id, fullName, email } }
export async function signUp({ fullName, email }) {
  await wait(900)
  return { user: { id: 'demo', fullName, email } }
}
