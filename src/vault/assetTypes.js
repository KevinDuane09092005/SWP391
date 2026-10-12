// The five kinds of digital asset and the extra fields each one asks for.
// Labels and option texts are in src/data/vaultContent.js (keyed by the names below).
//
// Field settings:
//   required   must be filled in
//   kind       'text' (default) or 'select' (then `options` lists the allowed values)
//   check      extra format check in vaultValidation.js ('last4' or 'publicAddress')
//   sensitive  would be encrypted in the real system (shown in the encryption step)
//
// On purpose there is NO field for passwords, PINs, full account numbers, private keys
// or recovery (seed) phrases. LegacyVault only needs enough to identify the asset.

export const ASSET_TYPES = {
  BANK_ACCOUNT: 'BANK_ACCOUNT',
  CRYPTO_WALLET: 'CRYPTO_WALLET',
  SOCIAL_MEDIA: 'SOCIAL_MEDIA',
  IMPORTANT_DOCUMENT: 'IMPORTANT_DOCUMENT',
  OTHER: 'OTHER',
}

export const ASSET_TYPE_FIELDS = {
  BANK_ACCOUNT: [
    { name: 'bankName', required: true },
    { name: 'accountHolder', required: true, sensitive: true },
    { name: 'accountLast4', check: 'last4', sensitive: true },
  ],
  CRYPTO_WALLET: [
    { name: 'walletName', required: true },
    {
      name: 'network',
      required: true,
      kind: 'select',
      options: ['BITCOIN', 'ETHEREUM', 'BNB_CHAIN', 'SOLANA', 'TRON', 'OTHER'],
    },
    { name: 'publicAddress', check: 'publicAddress', sensitive: true },
  ],
  SOCIAL_MEDIA: [
    {
      name: 'platform',
      required: true,
      kind: 'select',
      options: ['FACEBOOK', 'INSTAGRAM', 'X', 'LINKEDIN', 'TIKTOK', 'YOUTUBE', 'ZALO', 'OTHER'],
    },
    { name: 'username', required: true, sensitive: true },
  ],
  IMPORTANT_DOCUMENT: [
    { name: 'documentTitle', required: true },
    {
      name: 'documentType',
      required: true,
      kind: 'select',
      options: ['WILL', 'INSURANCE', 'PROPERTY', 'IDENTITY', 'MEDICAL', 'OTHER'],
    },
  ],
  OTHER: [{ name: 'category', required: true }],
}

// Common fields that would also be encrypted in the real system.
const COMMON_SENSITIVE_FIELDS = ['handoverNotes']

export function getTypeFields(type) {
  return ASSET_TYPE_FIELDS[type] ?? []
}

// Names of the sensitive fields for one asset type.
export function getSensitiveFieldNames(type) {
  const typeFields = getTypeFields(type)
    .filter((field) => field.sensitive)
    .map((field) => field.name)
  return [...typeFields, ...COMMON_SENSITIVE_FIELDS]
}
