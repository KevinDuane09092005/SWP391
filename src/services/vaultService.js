import {
  mockCreateAsset,
  mockCreateVault,
  mockGetAsset,
  mockGetVault,
  mockListVaults,
} from '../mocks/mockVaultStore.js'
import { buildAssetFromForm } from '../vault/assetDraft.js'
import { VaultError } from '../vault/VaultError.js'
import { prepareDocuments } from './documentService.js'
import { prepareSensitiveData } from './encryptionService.js'

// The ONLY place the vault pages call for data (Flow 2).
//
// Right now everything uses the in-memory demo store (src/mocks/mockVaultStore.js).
// When the backend is ready, replace the mock calls with requests that follow the
// backend's real API contract. Keep the inputs/outputs below so the pages do not change,
// and throw `new VaultError(code)` so the right translated message is shown.
// The backend must also check that the signed-in user owns the vault (the frontend
// passes ownerId only because the demo has no server session).

export const IS_DEMO_MODE = true

// Output: [{ id, name, description, createdAt, assets: [asset] }], newest first
export function listVaults(ownerId) {
  return mockListVaults(ownerId)
}

// Output: { id, name, description, createdAt, assets: [asset] }
export function getVault(ownerId, vaultId) {
  return mockGetVault(ownerId, vaultId)
}

// Input:  { name, description }
// Output: the new vault (with an empty assets list)
export function createVault(ownerId, { name, description }) {
  return mockCreateVault(ownerId, { name: name.trim(), description: description.trim() })
}

// Output: { asset, vault: { id, name } }
export function getAsset(ownerId, vaultId, assetId) {
  return mockGetAsset(ownerId, vaultId, assetId)
}

// The save part of Flow 2, in the required business order:
//   1. check the asset information
//   2. attach the related documents   (demo: NOT uploaded, see documentService.js)
//   3. encrypt sensitive data          (demo: NOT encrypted, see encryptionService.js)
//   4. save the asset to its vault
// `onProgress(step)` is called with 'validate' | 'documents' | 'encryption' | 'saving'
// so the page can show where it is.
// Input:  values = the asset form values, files = picked files from documentRules
// Output: the saved asset
export async function saveAsset(ownerId, vaultId, { values, files }, onProgress = () => {}) {
  onProgress('validate')
  const asset = buildAssetFromForm(values)
  if (!asset.name || !asset.type) throw new VaultError('INVALID_ASSET')

  onProgress('documents')
  const relatedDocuments = await prepareDocuments(files)

  onProgress('encryption')
  const prepared = await prepareSensitiveData({ ...asset, relatedDocuments })

  onProgress('saving')
  return mockCreateAsset(ownerId, vaultId, prepared)
}
