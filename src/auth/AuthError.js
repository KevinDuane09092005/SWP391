// Error thrown by the auth service. `code` picks the translated message shown to the user
// (see `errors` in src/data/authContent.js). Codes used today:
//   INVALID_CREDENTIALS     wrong email/phone or password
//   ACCOUNT_EXISTS          register with an email/phone that already has an account
//   ACCOUNT_NOT_VERIFIED    sign in before entering the OTP
//   INVALID_OTP             wrong verification code
//   OTP_ATTEMPTS_EXCEEDED   too many wrong codes; the user must request a new one
//   REGISTRATION_NOT_FOUND  OTP page opened for an account that does not exist (any more)
//   NETWORK                 could not reach the server
// Any other code shows the generic message.
export class AuthError extends Error {
  constructor(code, message = code) {
    super(message)
    this.name = 'AuthError'
    this.code = code
  }
}
