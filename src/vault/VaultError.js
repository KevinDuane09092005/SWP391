// Error thrown by the vault service. `code` picks the translated message
// (see `errors` in src/data/vaultContent.js). Codes used today:
//   VAULT_NOT_FOUND    the vault does not exist or belongs to someone else
//   ASSET_NOT_FOUND    the asset does not exist in this vault
//   VAULT_NAME_TAKEN   the owner already has a vault with this name
//   INVALID_ASSET      required asset data is missing
//   SAVE_FAILED        saving failed (the demo can simulate this, see mockVaultStore.js)
// Any other code shows the generic message.
export class VaultError extends Error {
  constructor(code, message = code) {
    super(message)
    this.name = 'VaultError'
    this.code = code
  }
}
