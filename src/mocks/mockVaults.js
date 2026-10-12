import { ASSET_TYPES } from '../vault/assetTypes.js'

// Same status the encryption step writes today: nothing is really encrypted in the demo.
const NOT_ENCRYPTED = 'NOT_ENCRYPTED_DEMO'

// DEMO ONLY — starting data for the vault screens, so the owner dashboard is not empty.
// It belongs to the demo account owner@legacyvault.demo (id 'demo-owner').
// Other owners (for example 0901234567 or a newly registered account) start with no vaults,
// which shows the empty state. Nothing here is a real account, password or secret.

export const seedVaults = [
  {
    id: 'vault-demo-family',
    ownerId: 'demo-owner',
    name: 'Family essentials',
    description: 'Accounts and papers my family would need first.',
    createdAt: '2026-09-20T09:00:00.000Z',
  },
  {
    id: 'vault-demo-online',
    ownerId: 'demo-owner',
    name: 'Online life',
    description: 'Social media and online accounts.',
    createdAt: '2026-09-28T14:30:00.000Z',
  },
]

export const seedAssets = [
  {
    id: 'asset-demo-bank',
    vaultId: 'vault-demo-family',
    name: 'Main savings account',
    type: ASSET_TYPES.BANK_ACCOUNT,
    description: 'Household savings.',
    handoverNotes: 'Contact the bank branch with the death certificate and ask about closing the account.',
    details: { bankName: 'Demo Bank', accountHolder: 'Demo Vault Owner', accountLast4: '4821' },
    relatedDocuments: [],
    encryption: { status: NOT_ENCRYPTED, sensitiveFields: ['accountHolder', 'accountLast4', 'handoverNotes'] },
    createdAt: '2026-09-20T09:10:00.000Z',
  },
  {
    id: 'asset-demo-will',
    vaultId: 'vault-demo-family',
    name: 'Signed will',
    type: ASSET_TYPES.IMPORTANT_DOCUMENT,
    description: 'Original is kept at the family lawyer’s office.',
    handoverNotes: '',
    details: { documentTitle: 'Last will and testament', documentType: 'WILL' },
    relatedDocuments: [
      {
        id: 'doc-demo-will',
        name: 'will-signed-2025.pdf',
        size: 482304,
        type: 'application/pdf',
        uploadStatus: 'NOT_UPLOADED_DEMO',
      },
    ],
    encryption: { status: NOT_ENCRYPTED, sensitiveFields: [] },
    createdAt: '2026-09-21T08:00:00.000Z',
  },
  {
    id: 'asset-demo-facebook',
    vaultId: 'vault-demo-online',
    name: 'Personal Facebook',
    type: ASSET_TYPES.SOCIAL_MEDIA,
    description: '',
    handoverNotes: 'Please turn the profile into a memorial page.',
    details: { platform: 'FACEBOOK', username: 'demo.owner' },
    relatedDocuments: [],
    encryption: { status: NOT_ENCRYPTED, sensitiveFields: ['username', 'handoverNotes'] },
    createdAt: '2026-09-28T14:40:00.000Z',
  },
]
