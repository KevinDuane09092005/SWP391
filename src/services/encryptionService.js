import { getSensitiveFieldNames } from '../vault/assetTypes.js'

// Flow 2, step "Encrypt sensitive data".
//
// NOT IMPLEMENTED: nothing is encrypted in this frontend demo.
// Real encryption has to be designed with the backend team: which algorithm, where the
// keys live, and who may decrypt after a release. Do not invent a cipher or keep keys in
// the browser just to make the screen look finished.
//
// What this function does today: it keeps the step in the right place in the save flow
// and records which filled-in fields WOULD be encrypted, so the UI can say so honestly.
// When encryption exists, this is the single place to plug it in.

export const ENCRYPTION_STATUS = {
  NOT_ENCRYPTED_DEMO: 'NOT_ENCRYPTED_DEMO',
}

// Which sensitive fields of this asset actually have a value.
export function listSensitiveFields(asset) {
  return getSensitiveFieldNames(asset.type).filter((name) => {
    const value = name in asset.details ? asset.details[name] : asset[name]
    return Boolean(value && String(value).trim())
  })
}

// Input:  asset object without encryption info
// Output: the same asset (unchanged) + { encryption: { status, sensitiveFields } }
export async function prepareSensitiveData(asset) {
  await new Promise((resolve) => setTimeout(resolve, 400))
  return {
    ...asset,
    encryption: {
      status: ENCRYPTION_STATUS.NOT_ENCRYPTED_DEMO,
      sensitiveFields: listSensitiveFields(asset),
    },
  }
}
