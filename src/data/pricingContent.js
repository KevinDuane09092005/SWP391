// All text shown on the pricing page, one block per language.
// Prices and limits come from src/services/pricingService.js; the functions below
// turn those numbers into sentences. `plans` keys match the plan `id` from the API.

const en = {
  title: 'Compare plans',
  description: 'Start free. Upgrade when you need more storage, collections, or trusted contacts.',
  controls: {
    badge: 'Plan controls',
    text: 'Choose monthly or yearly pricing.',
    monthly: 'Monthly',
    yearly: 'Yearly',
  },
  loading: 'Loading plans…',
  error: 'We could not load the plans. Please try again.',
  retry: 'Try again',
  free: 'Free',
  recommended: 'Most balanced',
  perMonth: '/month',
  perYear: '/year',
  billedMonthly: 'billed monthly',
  billedYearly: (monthlyEquivalent) => `≈ ${monthlyEquivalent}/month billed annually`,
  features: {
    collections: (n) => `${n} vault ${n === 1 ? 'collection' : 'collections'}`,
    records: (n) => `Store up to ${n} passwords, documents, and instructions`,
    trustedContacts: (n) => `${n} trusted ${n === 1 ? 'contact' : 'contacts'}`,
    attachmentsPerRecord: (n) => `Attach up to ${n} encrypted documents to each record`,
  },
  plans: {
    free: {
      name: 'Free',
      headline: 'Start with a few important records and one trusted person.',
      cta: 'Start free',
    },
    essentials: {
      name: 'Essentials',
      headline: 'Protect the passwords, documents, and instructions that matter most.',
      cta: 'Start Essentials',
    },
    plus: {
      name: 'Plus',
      headline: 'More room for families managing larger digital estates.',
      cta: 'Start Plus',
    },
  },
}

const vi = {
  title: 'So sánh các gói',
  description:
    'Bắt đầu miễn phí. Nâng cấp khi bạn cần thêm dung lượng, bộ sưu tập hoặc người liên hệ tin cậy.',
  controls: {
    badge: 'Tùy chọn gói',
    text: 'Chọn thanh toán theo tháng hoặc theo năm.',
    monthly: 'Theo tháng',
    yearly: 'Theo năm',
  },
  loading: 'Đang tải các gói…',
  error: 'Không thể tải các gói. Vui lòng thử lại.',
  retry: 'Thử lại',
  free: 'Miễn phí',
  recommended: 'Cân bằng nhất',
  perMonth: '/tháng',
  perYear: '/năm',
  billedMonthly: 'thanh toán hằng tháng',
  billedYearly: (monthlyEquivalent) => `≈ ${monthlyEquivalent}/tháng, thanh toán hằng năm`,
  features: {
    collections: (n) => `${n} bộ sưu tập trong kho`,
    records: (n) => `Lưu tối đa ${n} mật khẩu, tài liệu và chỉ dẫn`,
    trustedContacts: (n) => `${n} người liên hệ tin cậy`,
    attachmentsPerRecord: (n) => `Đính kèm tối đa ${n} tài liệu được mã hóa cho mỗi hồ sơ`,
  },
  plans: {
    free: {
      name: 'Miễn phí',
      headline: 'Bắt đầu với một vài hồ sơ quan trọng và một người tin cậy.',
      cta: 'Bắt đầu miễn phí',
    },
    essentials: {
      name: 'Essentials',
      headline: 'Bảo vệ mật khẩu, tài liệu và chỉ dẫn quan trọng nhất của bạn.',
      cta: 'Chọn gói Essentials',
    },
    plus: {
      name: 'Plus',
      headline: 'Thêm không gian cho gia đình quản lý tài sản số lớn hơn.',
      cta: 'Chọn gói Plus',
    },
  },
}

export const pricingContent = { en, vi }
