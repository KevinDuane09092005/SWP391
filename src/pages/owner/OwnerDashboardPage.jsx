import { Link } from 'react-router-dom'
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

const PREVIEW_COUNT = 4

// Flow 2 — Owner Dashboard: totals and the newest vaults. Only VAULT_OWNER reaches it
// (RequireAuth in App.jsx). Shows every vault and asset this owner has saved so far.
export default function OwnerDashboardPage() {
  const { user } = useAuth()
  const { language } = useLanguage()
  const t = vaultContent[language]
  const { status, data: vaults, error, reload } = useAsync(() => listVaults(user.id), user.id)

  const assetTotal = vaults?.reduce((sum, vault) => sum + vault.assets.length, 0) ?? 0
  const documentTotal =
    vaults?.reduce(
      (sum, vault) =>
        sum + vault.assets.reduce((count, asset) => count + asset.relatedDocuments.length, 0),
      0,
    ) ?? 0

  return (
    <OwnerLayout>
      <div className="page-head">
        <div>
          <h1 className="page-title">{t.dashboard.welcome(user.fullName)}</h1>
          <p className="page-text">{t.dashboard.subtitle}</p>
        </div>
        <Button to={ownerPaths.newVault}>
          <Icon name="layers" size={16} />
          {t.dashboard.createVault}
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

      {status === 'ready' && (
        <>
          <dl className="stat-grid">
            <div className="card stat-card">
              <dt>{t.dashboard.stats.vaults}</dt>
              <dd data-testid="stat-vaults">{vaults.length}</dd>
            </div>
            <div className="card stat-card">
              <dt>{t.dashboard.stats.assets}</dt>
              <dd data-testid="stat-assets">{assetTotal}</dd>
            </div>
            <div className="card stat-card">
              <dt>{t.dashboard.stats.documents}</dt>
              <dd data-testid="stat-documents">{documentTotal}</dd>
            </div>
          </dl>

          <section className="page-section" aria-labelledby="vaults-title">
            <div className="section-row">
              <h2 id="vaults-title" className="section-title">
                {t.dashboard.vaultsTitle}
              </h2>
              {vaults.length > 0 && (
                <Link to={ownerPaths.vaults} className="auth-link">
                  {t.dashboard.viewAll}
                </Link>
              )}
            </div>

            {vaults.length === 0 ? (
              <EmptyState
                title={t.emptyVaults.title}
                text={t.emptyVaults.text}
                action={<Button to={ownerPaths.newVault}>{t.emptyVaults.cta}</Button>}
              />
            ) : (
              <div className="vault-grid">
                {vaults.slice(0, PREVIEW_COUNT).map((vault) => (
                  <VaultCard key={vault.id} vault={vault} t={t} language={language} />
                ))}
              </div>
            )}
          </section>
        </>
      )}
    </OwnerLayout>
  )
}
