import { useLocation, useParams } from 'react-router-dom'
import Button from '../../components/Button.jsx'
import FormAlert from '../../components/auth/FormAlert.jsx'
import Icon from '../../components/Icon.jsx'
import OwnerLayout from '../../components/vault/OwnerLayout.jsx'
import { Breadcrumbs, ErrorState, LoadingState } from '../../components/vault/PageStates.jsx'
import { useAuth } from '../../auth/AuthContext.jsx'
import { vaultContent } from '../../data/vaultContent.js'
import useAsync from '../../hooks/useAsync.js'
import { useLanguage } from '../../i18n/LanguageContext.jsx'
import { getAsset } from '../../services/vaultService.js'
import { getTypeFields } from '../../vault/assetTypes.js'
import { formatFileSize } from '../../vault/documentRules.js'
import { formatDate, formatFieldValue } from '../../vault/format.js'
import { ownerPaths } from '../../vault/paths.js'

// Flow 2 — Asset Details: everything saved for one asset, its documents, and the
// honest security status (demo: not uploaded, not encrypted).
export default function AssetDetailsPage() {
  const { vaultId, assetId } = useParams()
  const { user } = useAuth()
  const { language } = useLanguage()
  const t = vaultContent[language]
  const copy = t.assetDetails
  const location = useLocation()
  const { status, data, error } = useAsync(
    () => getAsset(user.id, vaultId, assetId),
    `${vaultId}/${assetId}`,
  )

  if (status !== 'ready') {
    return (
      <OwnerLayout>
        {status === 'loading' ? (
          <LoadingState label={t.loading} />
        ) : (
          <ErrorState message={t.errors[error.code] ?? t.errors.generic}>
            <Button to={ownerPaths.vault(vaultId)} variant="secondary">
              {copy.backToVault}
            </Button>
          </ErrorState>
        )}
      </OwnerLayout>
    )
  }

  const { asset, vault } = data

  return (
    <OwnerLayout>
      <Breadcrumbs
        label={t.breadcrumbsLabel}
        items={[
          { label: t.nav.vaults, to: ownerPaths.vaults },
          { label: vault.name, to: ownerPaths.vault(vault.id) },
          { label: asset.name },
        ]}
      />

      {location.state?.saved && <FormAlert tone="success">{copy.saved}</FormAlert>}

      <div className="page-head page-head--spaced">
        <div>
          <span className="badge">{t.assetTypes[asset.type]}</span>
          <h1 className="page-title">{asset.name}</h1>
          <p className="page-meta">
            {copy.vault}: {vault.name} · {copy.created} {formatDate(asset.createdAt, language)}
          </p>
        </div>
        <div className="page-head__actions">
          <Button to={ownerPaths.vault(vault.id)} variant="secondary">
            {copy.backToVault}
          </Button>
          <Button to={ownerPaths.newAsset(vault.id)}>{copy.addAnother}</Button>
        </div>
      </div>

      <div className="detail-grid">
        <section className="card detail-card" aria-labelledby="info-title">
          <h2 id="info-title" className="section-title">
            {copy.information}
          </h2>
          <dl className="detail-list">
            <div>
              <dt>{copy.type}</dt>
              <dd>{t.assetTypes[asset.type]}</dd>
            </div>
            {getTypeFields(asset.type).map((field) => (
              <div key={field.name}>
                <dt>{t.fields[field.name].label}</dt>
                <dd>{formatFieldValue(field, asset.details[field.name], t)}</dd>
              </div>
            ))}
            <div>
              <dt>{copy.description}</dt>
              <dd>{asset.description || t.empty}</dd>
            </div>
            <div>
              <dt>{copy.handoverNotes}</dt>
              <dd className="detail-list__long">{asset.handoverNotes || t.empty}</dd>
            </div>
          </dl>
        </section>

        <div className="detail-side">
          <section className="card detail-card" aria-labelledby="docs-title">
            <h2 id="docs-title" className="section-title">
              {copy.documents}
            </h2>
            {asset.relatedDocuments.length === 0 ? (
              <p className="review-box__muted">{copy.noDocuments}</p>
            ) : (
              <ul className="file-list file-list--compact">
                {asset.relatedDocuments.map((document) => (
                  <li key={document.id} className="file-list__item">
                    <Icon name="fileText" size={18} />
                    <span className="file-list__name">{document.name}</span>
                    <span className="file-list__size">{formatFileSize(document.size)}</span>
                  </li>
                ))}
              </ul>
            )}
            {asset.relatedDocuments.length > 0 && (
              <p className="detail-note">{copy.notUploaded}</p>
            )}
          </section>

          <section className="card detail-card" aria-labelledby="security-title">
            <h2 id="security-title" className="section-title">
              {copy.security}
            </h2>
            <p className="detail-warning">
              <Icon name="alertCircle" size={16} />
              <span>{copy.notEncrypted}</span>
            </p>
            {asset.encryption?.sensitiveFields.length > 0 && (
              <>
                <p className="detail-note">{copy.sensitiveFields}</p>
                <ul className="sensitive-list">
                  {asset.encryption.sensitiveFields.map((name) => (
                    <li key={name}>
                      <Icon name="lock" size={14} />
                      {t.fields[name].label}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </section>
        </div>
      </div>
    </OwnerLayout>
  )
}
