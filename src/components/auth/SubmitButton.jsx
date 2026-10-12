import Button from '../Button.jsx'

// Full-width submit button that shows a spinner and `loadingText` while waiting.
export default function SubmitButton({ loading, loadingText, children }) {
  return (
    <Button type="submit" size="lg" className="auth-submit" disabled={loading}>
      {loading && <span className="spinner" aria-hidden="true" />}
      {loading ? loadingText : children}
    </Button>
  )
}
