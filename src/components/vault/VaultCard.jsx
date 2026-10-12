import { Link } from 'react-router-dom'
import Button from '../Button.jsx'
import Icon from '../Icon.jsx'
import { formatDate } from '../../vault/format.js'
import { ownerPaths } from '../../vault/paths.js'

// One vault in a list: name, date, number of assets, and the two main actions.
export default function VaultCard({ vault, t, language }) {
  return (
    <article className="card vault-card">
      <div className="vault-card__head">
        <span className="icon-tile">
          <Icon name="lock" />
        </span>
        <div>
          <h3 className="vault-card__title">
            <Link to={ownerPaths.vault(vault.id)}>{vault.name}</Link>
          </h3>
          <p className="vault-card__meta">
            {t.createdOn(formatDate(vault.createdAt, language))} · {t.assetCount(vault.assets.length)}
          </p>
        </div>
      </div>

      {vault.description && <p className="vault-card__text">{vault.description}</p>}

      <div className="vault-card__actions">
        <Button to={ownerPaths.vault(vault.id)} variant="secondary" size="sm">
          {t.vaultCard.viewAssets}
        </Button>
        <Button to={ownerPaths.newAsset(vault.id)} size="sm">
          {t.vaultCard.addAsset}
        </Button>
      </div>
    </article>
  )
}
