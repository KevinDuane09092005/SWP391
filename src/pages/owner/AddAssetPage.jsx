import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Button from '../../components/Button.jsx'
import FormAlert from '../../components/auth/FormAlert.jsx'
import AssetInfoStep from '../../components/vault/AssetInfoStep.jsx'
import DocumentsStep from '../../components/vault/DocumentsStep.jsx'
import EncryptionStep from '../../components/vault/EncryptionStep.jsx'
import OwnerLayout from '../../components/vault/OwnerLayout.jsx'
import { Breadcrumbs, ErrorState, LoadingState } from '../../components/vault/PageStates.jsx'
import SaveStep from '../../components/vault/SaveStep.jsx'
import Stepper from '../../components/vault/Stepper.jsx'
import { useAuth } from '../../auth/AuthContext.jsx'
import { vaultContent } from '../../data/vaultContent.js'
import useAsync from '../../hooks/useAsync.js'
import useForm from '../../hooks/useForm.js'
import { useLanguage } from '../../i18n/LanguageContext.jsx'
import { getVault, saveAsset } from '../../services/vaultService.js'
import { buildAssetFromForm, EMPTY_ASSET_FORM } from '../../vault/assetDraft.js'
import { checkNewFiles } from '../../vault/documentRules.js'
import { ownerPaths } from '../../vault/paths.js'
import { getAssetFieldOrder, validateAssetInfo } from '../../vault/vaultValidation.js'

// The four steps, in the business order required by Flow 2.
const STEP = { INFO: 0, DOCUMENTS: 1, ENCRYPTION: 2, SAVE: 3 }

// Flow 2 — Add Digital Asset:
//   1. enter asset information  → 2. pick related documents
//   → 3. encrypt sensitive data (demo) → 4. save asset → open the saved asset.
// Everything typed stays in this page's state, so Back never loses data.
export default function AddAssetPage() {
  const { vaultId } = useParams()
  const { user } = useAuth()
  const { language } = useLanguage()
  const t = vaultContent[language]
  const copy = t.addAsset
  const navigate = useNavigate()

  // The asset is always added to the vault in the address, so load it first.
  const vaultQuery = useAsync(() => getVault(user.id, vaultId), vaultId)

  const form = useForm({
    formId: 'asset',
    initialValues: EMPTY_ASSET_FORM,
    validate: (values) => validateAssetInfo(values, t.validation),
    fieldOrder: (values) => getAssetFieldOrder(values.type),
  })
  const [step, setStep] = useState(STEP.INFO)
  const [files, setFiles] = useState([])
  const [rejectedFiles, setRejectedFiles] = useState([])
  const [progress, setProgress] = useState(null)
  const [saveError, setSaveError] = useState(null)
  const [saving, setSaving] = useState(false)

  const goTo = (nextStep) => {
    setStep(nextStep)
    window.scrollTo({ top: 0 })
  }

  // Step 1 → 2 only when the information is valid.
  const handleInfoSubmit = (event) => {
    event.preventDefault()
    if (form.checkBeforeSubmit()) goTo(STEP.DOCUMENTS)
  }

  const addFiles = (picked) => {
    const { accepted, rejected } = checkNewFiles(picked, files)
    setFiles((current) => [...current, ...accepted])
    setRejectedFiles(rejected)
  }

  const removeFile = (id) => {
    setFiles((current) => current.filter((item) => item.id !== id))
    setRejectedFiles([])
  }

  const handleSave = async () => {
    // Check once more right before saving; go back to step 1 if something is wrong.
    if (!form.checkBeforeSubmit()) {
      goTo(STEP.INFO)
      return
    }
    goTo(STEP.SAVE)
    setSaving(true)
    setSaveError(null)
    try {
      const asset = await saveAsset(user.id, vaultId, { values: form.values, files }, setProgress)
      // Success is shown only after the save really finished.
      navigate(ownerPaths.asset(vaultId, asset.id), { state: { saved: true } })
    } catch (error) {
      // Keep everything the user entered so they can try again.
      setSaveError(error.code ?? 'generic')
      setSaving(false)
    }
  }

  const cancel = () => navigate(ownerPaths.vault(vaultId))

  if (vaultQuery.status !== 'ready') {
    return (
      <OwnerLayout>
        {vaultQuery.status === 'loading' ? (
          <LoadingState label={t.loading} />
        ) : (
          <ErrorState message={t.errors[vaultQuery.error.code] ?? t.errors.generic}>
            <Button to={ownerPaths.vaults} variant="secondary">
              {t.nav.vaults}
            </Button>
          </ErrorState>
        )}
      </OwnerLayout>
    )
  }

  const vault = vaultQuery.data

  return (
    <OwnerLayout>
      <Breadcrumbs
        label={t.breadcrumbsLabel}
        items={[
          { label: t.nav.vaults, to: ownerPaths.vaults },
          { label: vault.name, to: ownerPaths.vault(vault.id) },
          { label: copy.title },
        ]}
      />

      <div className="card form-card form-card--wide">
        <p className="page-meta">
          {copy.stepOf(step + 1, copy.steps.length)} · {copy.steps[step]}
        </p>
        <h1 className="page-title">{copy.title}</h1>
        <p className="page-text">{copy.toVault(vault.name)}</p>

        <Stepper steps={copy.steps} current={step} label={copy.stepsLabel} />

        {step === STEP.INFO && (
          <form noValidate onSubmit={handleInfoSubmit}>
            <FormAlert tone="info">{copy.safety}</FormAlert>
            <div className="form-stack--spaced">
              <AssetInfoStep form={form} t={t} />
            </div>
            <div className="form-actions">
              <Button variant="secondary" size="lg" onClick={cancel}>
                {t.cancel}
              </Button>
              <Button type="submit" size="lg">
                {copy.next}
              </Button>
            </div>
          </form>
        )}

        {step === STEP.DOCUMENTS && (
          <>
            <DocumentsStep
              files={files}
              rejected={rejectedFiles}
              onAdd={addFiles}
              onRemove={removeFile}
              t={t}
            />
            <div className="form-actions">
              <Button variant="secondary" size="lg" onClick={() => goTo(STEP.INFO)}>
                {copy.back}
              </Button>
              <Button size="lg" onClick={() => goTo(STEP.ENCRYPTION)}>
                {copy.next}
              </Button>
            </div>
          </>
        )}

        {step === STEP.ENCRYPTION && (
          <>
            <EncryptionStep
              asset={buildAssetFromForm(form.values)}
              documentCount={files.length}
              vaultName={vault.name}
              t={t}
            />
            <div className="form-actions">
              <Button variant="secondary" size="lg" onClick={() => goTo(STEP.DOCUMENTS)}>
                {copy.back}
              </Button>
              <Button size="lg" onClick={handleSave}>
                {copy.save}
              </Button>
            </div>
          </>
        )}

        {step === STEP.SAVE && (
          <>
            <SaveStep current={progress} error={saveError} t={t} />
            {!saving && saveError && (
              <div className="form-actions">
                <Button variant="secondary" size="lg" onClick={() => goTo(STEP.ENCRYPTION)}>
                  {copy.back}
                </Button>
                <Button size="lg" onClick={handleSave}>
                  {t.retry}
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </OwnerLayout>
  )
}
