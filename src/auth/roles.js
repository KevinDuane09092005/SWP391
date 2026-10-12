// The five LegacyVault roles. Always use these constants instead of typing the strings.
export const ROLES = {
  ADMIN: 'ADMIN',
  VAULT_OWNER: 'VAULT_OWNER',
  EXECUTOR: 'EXECUTOR', // also called Trustee
  BENEFICIARY: 'BENEFICIARY',
  LEGAL_VERIFIER: 'LEGAL_VERIFIER', // also called Notary
}

// Where each role lands after signing in.
export const DASHBOARD_PATHS = {
  [ROLES.ADMIN]: '/dashboard/admin',
  [ROLES.VAULT_OWNER]: '/dashboard/owner',
  [ROLES.EXECUTOR]: '/dashboard/executor',
  [ROLES.BENEFICIARY]: '/dashboard/beneficiary',
  [ROLES.LEGAL_VERIFIER]: '/dashboard/verifier',
}

export function isKnownRole(role) {
  return Object.values(ROLES).includes(role)
}

export function getDashboardPath(role) {
  return DASHBOARD_PATHS[role] ?? '/login'
}
