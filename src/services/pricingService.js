// Plan data for the pricing page.
//
// Backend hook-up: replace the body of fetchPlans() with a real request, e.g.
//
//   const response = await fetch('/api/plans')
//   if (!response.ok) throw new Error(`Failed to load plans (${response.status})`)
//   return response.json()
//
// The response must keep the shape of `mockPlans` below. The API only returns ids,
// numbers, and flags; all wording (names, headlines, feature lines) is translated on
// the frontend in src/data/pricingContent.js, keyed by plan `id`.
//
//   id           'free' | 'essentials' | 'plus'
//   recommended  true shows the "Most balanced" badge and highlights the card
//   currency     ISO 4217 code, e.g. 'USD'
//   price        { monthly, yearly } in whole currency units (0 = free)
//   limits       numbers used to build the feature list

const mockPlans = [
  {
    id: 'free',
    recommended: false,
    currency: 'USD',
    price: { monthly: 0, yearly: 0 },
    limits: { collections: 1, records: 10, trustedContacts: 1, attachmentsPerRecord: 2 },
  },
  {
    id: 'essentials',
    recommended: false,
    currency: 'USD',
    price: { monthly: 4.99, yearly: 49 },
    limits: { collections: 5, records: 50, trustedContacts: 3, attachmentsPerRecord: 10 },
  },
  {
    id: 'plus',
    recommended: true,
    currency: 'USD',
    price: { monthly: 8.99, yearly: 89 },
    limits: { collections: 20, records: 250, trustedContacts: 10, attachmentsPerRecord: 25 },
  },
]

export async function fetchPlans() {
  return structuredClone(mockPlans)
}
