import { useEffect, useState } from 'react'

// Loads data for a page and tracks loading / error / ready.
// - `load` returns a promise (usually a vaultService call).
// - `key` is a string that changes when different data is needed (e.g. the vault id);
//   the data is loaded again whenever it changes.
// Returns { status: 'loading' | 'error' | 'ready', data, error, reload }.
export default function useAsync(load, key) {
  const [result, setResult] = useState({ key: null, attempt: -1, data: null, error: null })
  const [attempt, setAttempt] = useState(0)

  useEffect(() => {
    let cancelled = false
    load().then(
      (data) => !cancelled && setResult({ key, attempt, data, error: null }),
      (error) => !cancelled && setResult({ key, attempt, data: null, error }),
    )
    return () => {
      cancelled = true
    }
    // `load` is a new function on every render, so only `key` and `attempt` decide when to reload.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key, attempt])

  // Until the result for the current key/attempt arrives, we are loading.
  const isCurrent = result.key === key && result.attempt === attempt
  let status = 'loading'
  if (isCurrent) status = result.error ? 'error' : 'ready'

  return {
    status,
    data: isCurrent ? result.data : null,
    error: isCurrent ? result.error : null,
    reload: () => setAttempt((count) => count + 1),
  }
}
