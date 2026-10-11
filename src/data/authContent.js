// All text on the sign in / sign up page, one block per language.

const en = {
  backHome: 'Back to home',
  languageLabel: 'Language',
  tabsLabel: 'Account',
  tabs: { signup: 'Sign Up', signin: 'Sign In' },

  panel: {
    eyebrow: 'LegacyVault',
    title: 'Your digital legacy, ready for the moment it matters.',
    points: [
      'Records are encrypted before they are stored',
      'Nothing unlocks without a request and your rules',
      'Free to start, no credit card required',
    ],
  },

  signup: {
    title: 'Create your vault owner account',
    subtitle: 'Start protecting your digital legacy in minutes.',
    submit: 'Create account',
    submitting: 'Creating account…',
    switchPrompt: 'Already have an account?',
    switchLink: 'Sign in',
    selectedPlan: 'Selected plan',
    changePlan: 'Change',
  },

  signin: {
    title: 'Welcome back',
    subtitle: 'Sign in to keep managing your digital legacy.',
    submit: 'Sign in',
    submitting: 'Signing in…',
    switchPrompt: "Don't have an account?",
    switchLink: 'Sign up now',
    remember: 'Keep me signed in',
    forgot: 'Forgot password?',
  },

  fields: {
    fullName: { label: 'Full name', placeholder: 'John Doe' },
    email: { label: 'Email address', placeholder: 'john@example.com' },
    phone: { label: 'Phone number', optional: 'Optional', placeholder: '+84 912 345 678' },
    password: { label: 'Password', placeholder: 'Enter password', newPlaceholder: 'Create a password' },
    confirmPassword: { label: 'Confirm password', placeholder: 'Re-enter password' },
  },

  showPassword: 'Show password',
  hidePassword: 'Hide password',

  passwordRules: {
    title: 'Your password needs',
    length: 'At least 8 characters',
    upper: 'One uppercase letter',
    number: 'One number',
  },

  terms: {
    before: 'I agree to the',
    terms: 'Terms of Service',
    and: 'and',
    privacy: 'Privacy Policy',
    after: '.',
  },

  validation: {
    fullName: 'Please enter your full name.',
    emailRequired: 'Please enter your email address.',
    emailInvalid: 'Please enter a valid email address, like name@example.com.',
    phone: 'Please enter a valid phone number, or leave it empty.',
    passwordRequired: 'Please enter your password.',
    passwordWeak: 'Your password does not meet all the requirements below.',
    confirm: 'Passwords do not match.',
    terms: 'Please accept the Terms of Service and Privacy Policy to continue.',
  },

  errors: {
    INVALID_CREDENTIALS: 'That email and password do not match. Please try again.',
    EMAIL_TAKEN: 'An account with this email already exists. Try signing in instead.',
    NETWORK: 'We could not reach the server. Check your connection and try again.',
    generic: 'Something went wrong. Please try again.',
  },

  success: {
    signupTitle: 'Your account is ready',
    signupText: (name) => `Welcome, ${name}. Your vault owner account has been created.`,
    signinTitle: 'You are signed in',
    signinText: (email) => `Signed in as ${email}.`,
    prototype: 'The owner dashboard is coming in the next build stage.',
    cta: 'Go to home',
  },
}

const vi = {
  backHome: 'Về trang chủ',
  languageLabel: 'Ngôn ngữ',
  tabsLabel: 'Tài khoản',
  tabs: { signup: 'Đăng ký', signin: 'Đăng nhập' },

  panel: {
    eyebrow: 'LegacyVault',
    title: 'Di sản số của bạn, sẵn sàng cho đúng thời điểm.',
    points: [
      'Hồ sơ được mã hóa trước khi lưu trữ',
      'Không gì được mở nếu không có yêu cầu và quy tắc của bạn',
      'Bắt đầu miễn phí, không cần thẻ tín dụng',
    ],
  },

  signup: {
    title: 'Tạo tài khoản chủ kho',
    subtitle: 'Bắt đầu bảo vệ di sản số của bạn chỉ trong vài phút.',
    submit: 'Tạo tài khoản',
    submitting: 'Đang tạo tài khoản…',
    switchPrompt: 'Đã có tài khoản?',
    switchLink: 'Đăng nhập',
    selectedPlan: 'Gói đã chọn',
    changePlan: 'Đổi gói',
  },

  signin: {
    title: 'Chào mừng trở lại',
    subtitle: 'Đăng nhập để tiếp tục quản lý di sản số của bạn.',
    submit: 'Đăng nhập',
    submitting: 'Đang đăng nhập…',
    switchPrompt: 'Chưa có tài khoản?',
    switchLink: 'Đăng ký ngay',
    remember: 'Duy trì đăng nhập',
    forgot: 'Quên mật khẩu?',
  },

  fields: {
    fullName: { label: 'Họ và tên', placeholder: 'Nguyễn Văn A' },
    email: { label: 'Địa chỉ email', placeholder: 'ten@example.com' },
    phone: { label: 'Số điện thoại', optional: 'Không bắt buộc', placeholder: '+84 912 345 678' },
    password: { label: 'Mật khẩu', placeholder: 'Nhập mật khẩu', newPlaceholder: 'Tạo mật khẩu' },
    confirmPassword: { label: 'Xác nhận mật khẩu', placeholder: 'Nhập lại mật khẩu' },
  },

  showPassword: 'Hiện mật khẩu',
  hidePassword: 'Ẩn mật khẩu',

  passwordRules: {
    title: 'Mật khẩu cần có',
    length: 'Ít nhất 8 ký tự',
    upper: 'Một chữ in hoa',
    number: 'Một chữ số',
  },

  terms: {
    before: 'Tôi đồng ý với',
    terms: 'Điều khoản dịch vụ',
    and: 'và',
    privacy: 'Chính sách quyền riêng tư',
    after: '.',
  },

  validation: {
    fullName: 'Vui lòng nhập họ và tên.',
    emailRequired: 'Vui lòng nhập địa chỉ email.',
    emailInvalid: 'Email chưa hợp lệ, ví dụ: ten@example.com.',
    phone: 'Số điện thoại chưa hợp lệ, hoặc bạn có thể để trống.',
    passwordRequired: 'Vui lòng nhập mật khẩu.',
    passwordWeak: 'Mật khẩu chưa đáp ứng đủ các yêu cầu bên dưới.',
    confirm: 'Mật khẩu xác nhận không khớp.',
    terms: 'Vui lòng đồng ý với Điều khoản dịch vụ và Chính sách quyền riêng tư để tiếp tục.',
  },

  errors: {
    INVALID_CREDENTIALS: 'Email hoặc mật khẩu không đúng. Vui lòng thử lại.',
    EMAIL_TAKEN: 'Email này đã có tài khoản. Hãy thử đăng nhập.',
    NETWORK: 'Không kết nối được máy chủ. Kiểm tra mạng và thử lại.',
    generic: 'Đã có lỗi xảy ra. Vui lòng thử lại.',
  },

  success: {
    signupTitle: 'Tài khoản đã sẵn sàng',
    signupText: (name) => `Chào mừng ${name}. Tài khoản chủ kho của bạn đã được tạo.`,
    signinTitle: 'Bạn đã đăng nhập',
    signinText: (email) => `Đã đăng nhập bằng ${email}.`,
    prototype: 'Bảng điều khiển của chủ kho sẽ có trong giai đoạn tiếp theo.',
    cta: 'Về trang chủ',
  },
}

export const authContent = { en, vi }
