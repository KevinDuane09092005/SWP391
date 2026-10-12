// Small display helpers for the vault screens.

export function formatDate(isoDate, language) {
  return new Intl.DateTimeFormat(language === 'vi' ? 'vi-VN' : 'en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(new Date(isoDate))
}

// Shows a stored option value with its translated label (e.g. 'FACEBOOK' → 'Facebook').
export function formatFieldValue(field, value, content) {
  if (!value) return content.empty
  if (field.kind === 'select') return content.options[field.name]?.[value] ?? value
  return value
}
