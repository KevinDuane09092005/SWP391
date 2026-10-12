// Addresses of the Vault Owner pages, in one place so links never get out of sync.
export const ownerPaths = {
  dashboard: '/dashboard/owner',
  vaults: '/dashboard/owner/vaults',
  newVault: '/dashboard/owner/vaults/new',
  vault: (vaultId) => `/dashboard/owner/vaults/${vaultId}`,
  newAsset: (vaultId) => `/dashboard/owner/vaults/${vaultId}/assets/new`,
  asset: (vaultId, assetId) => `/dashboard/owner/vaults/${vaultId}/assets/${assetId}`,
}
