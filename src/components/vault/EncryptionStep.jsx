import FormAlert from '../auth/FormAlert.jsx'
import Icon from '../Icon.jsx'
import { getTypeFields } from '../../vault/assetTypes.js'
import { formatFieldValue } from '../../vault/format.js'
import { listSensitiveFields } from '../../services/encryptionService.js'

// Add Asset — step 3 "Encrypt sensitive data".
// Encryption is NOT built yet, so this step says so plainly and only shows which
// fields would be encrypted, followed by a summary of what will be saved.
export default function EncryptionStep({ asset, documentCount, vaultName, t }) {
  const sensitive = listSensitiveFields(asset)

  return (
    <div className="form-stack">
      <div>
        <h2 className="step-title">{t.encryption.title}</h2>
      </div>

      <FormAlert tone="info">{t.encryption.notBuilt}</FormAlert>

      <section className="review-box">
        <h3 className="review-box__title">{t.encryption.fieldsTitle}</h3>
        {sensitive.length === 0 ? (
          <p className="review-box__muted">{t.encryption.noneFilled}</p>
        ) : (
          <ul className="sensitive-list">
            {sensitive.map((name) => (
              <li key={name}>
                <Icon name="lock" size={14} />
                {t.fields[name].label}
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="review-box">
        <h3 className="review-box__title">{t.encryption.summaryTitle}</h3>
        <dl className="detail-list">
          <div>
            <dt>{t.assetDetails.vault}</dt>
            <dd>{vaultName}</dd>
          </div>
          <div>
            <dt>{t.fields.name.label}</dt>
            <dd>{asset.name}</dd>
          </div>
          <div>
            <dt>{t.fields.type.label}</dt>
            <dd>{t.assetTypes[asset.type]}</dd>
          </div>
          {getTypeFields(asset.type).map((field) => (
            <div key={field.name}>
              <dt>{t.fields[field.name].label}</dt>
              <dd>{formatFieldValue(field, asset.details[field.name], t)}</dd>
            </div>
          ))}
          <div>
            <dt>{t.documents.title}</dt>
            <dd>{t.encryption.documentsLine(documentCount)}</dd>
          </div>
        </dl>
      </section>
    </div>
  )
}
