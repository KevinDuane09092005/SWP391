// Monthly / Yearly segmented control. `labelledBy` points at the text that names it.
export default function BillingToggle({ value, onChange, options, labelledBy }) {
  return (
    <div className="billing-toggle" role="group" aria-labelledby={labelledBy}>
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          className="billing-toggle__option"
          aria-pressed={value === option.value}
          onClick={() => onChange(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  )
}
