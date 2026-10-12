import Button from '../../components/Button.jsx'
import Icon from '../../components/Icon.jsx'
import OwnerLayout from '../../components/vault/OwnerLayout.jsx'
import { EmptyState, ErrorState, LoadingState } from '../../components/vault/PageStates.jsx'
import VaultCard from '../../components/vault/VaultCard.jsx'
import { useAuth } from '../../auth/AuthContext.jsx'
import { vaultContent } from '../../data/vaultContent.js'
import useAsync from '../../hooks/useAsync.js'
import { useLanguage } from '../../i18n/LanguageContext.jsx'
import { listVaults } from '../../services/vaultService.js'
import { ownerPaths } from '../../vault/paths.js'

// Flow 2 — My Vaults: every vault of the signed-in owner.
export default function MyVaultsPage() {
  const { user } = useAuth()
  const { language } = useLanguage()
  const t = vaultContent[language]
  const { status, data: vaults, error, reload } = useAsync(() => listVaults(user.id), user.id)

  return (
    <OwnerLayout>
      <div className="page-head">
        <div>
          <h1 className="page-title">{t.myVaults.title}</h1>
          <p className="page-text">{t.myVaults.subtitle}</p>
        </div>
        <Button to={ownerPaths.newVault}>
          <Icon name="layers" size={16} />
          {t.myVaults.createVault}
        </Button>
      </div>

      {status === 'loading' && <LoadingState label={t.loading} />}

      {status === 'error' && (
        <ErrorState
          message={t.errors[error.code] ?? t.errors.generic}
          retryLabel={t.retry}
          onRetry={reload}
        />
      )}

      {status === 'ready' &&
        (vaults.length === 0 ? (
          <EmptyState
            title={t.emptyVaults.title}
            text={t.emptyVaults.text}
            action={<Button to={ownerPaths.newVault}>{t.emptyVaults.cta}</Button>}
          />
        ) : (
          <div className="vault-grid">
            {vaults.map((vault) => (
              <VaultCard key={vault.id} vault={vault} t={t} language={language} />
            ))}
          </div>
        ))}
    </OwnerLayout>
  )
}
