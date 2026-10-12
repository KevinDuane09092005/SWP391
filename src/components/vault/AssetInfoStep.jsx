import FormField from '../auth/FormField.jsx'
import { ASSET_TYPES, getTypeFields } from '../../vault/assetTypes.js'

// Add Asset — step 1 "Enter asset information".
// The fields in the middle change with the chosen asset type (see assetTypes.js).
export default function AssetInfoStep({ form, t }) {
  const typeOptions = Object.values(ASSET_TYPES).map((type) => ({
    value: type,
    label: t.assetTypes[type],
  }))

  return (
    <div className="form-stack">
      <FormField
        {...form.fieldProps('type')}
        as="select"
        label={t.fields.type.label}
        emptyOption={t.fields.type.empty}
        options={typeOptions}
      />

      <FormField
        {...form.fieldProps('name')}
        label={t.fields.name.label}
        placeholder={t.fields.name.placeholder}
        maxLength={80}
      />

      {/* Fields for the chosen type only */}
      {getTypeFields(form.values.type).map((field) => {
        const text = t.fields[field.name]
        const common = {
          ...form.fieldProps(field.name),
          label: text.label,
          optional: field.required ? undefined : t.optional,
          hint: text.hint,
        }
        if (field.kind === 'select') {
          return (
            <FormField
              key={field.name}
              {...common}
              as="select"
              emptyOption={text.empty}
              options={field.options.map((value) => ({
                value,
                label: t.options[field.name][value],
              }))}
            />
          )
        }
        return (
          <FormField
            key={field.name}
            {...common}
            placeholder={text.placeholder}
            inputMode={field.check === 'last4' ? 'numeric' : undefined}
            maxLength={field.check === 'last4' ? 4 : 120}
            autoComplete="off"
          />
        )
      })}

      <FormField
        {...form.fieldProps('description')}
        as="textarea"
        label={t.fields.description.label}
        optional={form.values.type === ASSET_TYPES.OTHER ? undefined : t.optional}
        placeholder={t.fields.description.placeholder}
      />

      <FormField
        {...form.fieldProps('handoverNotes')}
        as="textarea"
        label={t.fields.handoverNotes.label}
        optional={t.optional}
        placeholder={t.fields.handoverNotes.placeholder}
        hint={t.fields.handoverNotes.hint}
      />
    </div>
  )
}
