// Text for the temporary pages (Sign In, Register, etc.), one block per language.
// Keys under `pages` match the `page` prop passed to PlaceholderPage in App.jsx.

const en = {
  defaultMessage: 'This page is planned for the next build stage and is not available yet.',
  notice:
    'LegacyVault is currently a frontend-only prototype. No accounts are created and no data is stored.',
  back: 'Back to home',
  languageLabel: 'Language',
  pages: {
    login: { title: 'Sign in' },
    register: { title: 'Create your vault' },
    privacy: { title: 'Privacy' },
    contact: { title: 'Contact' },
    notFound: {
      title: 'Page not found',
      message: 'The page you are looking for does not exist.',
    },
  },
}

const vi = {
  defaultMessage: 'Trang này được lên kế hoạch cho giai đoạn phát triển tiếp theo và hiện chưa khả dụng.',
  notice:
    'LegacyVault hiện chỉ là bản mẫu giao diện. Không có tài khoản nào được tạo và không có dữ liệu nào được lưu trữ.',
  back: 'Về trang chủ',
  languageLabel: 'Ngôn ngữ',
  pages: {
    login: { title: 'Đăng nhập' },
    register: { title: 'Tạo kho của bạn' },
    privacy: { title: 'Quyền riêng tư' },
    contact: { title: 'Liên hệ' },
    notFound: {
      title: 'Không tìm thấy trang',
      message: 'Trang bạn đang tìm không tồn tại.',
    },
  },
}

export const placeholderContent = { en, vi }
