// Text for the signed-in area: the placeholder dashboards and Access Denied.
// Keys under `roles` match ROLES in src/auth/roles.js.

const en = {
  languageLabel: 'Language',
  logout: 'Log out',
  loggingOut: 'Logging out…',
  demoBadge: 'Demo session',

  roles: {
    ADMIN: {
      label: 'Admin',
      title: 'Admin dashboard',
      description: 'Admins will manage users, roles, and platform settings here.',
    },
    VAULT_OWNER: {
      label: 'Vault owner',
      title: 'Vault owner dashboard',
      description: 'Vault owners will create their vault, add records, and choose trusted contacts here.',
    },
    EXECUTOR: {
      label: 'Executor / Trustee',
      title: 'Executor dashboard',
      description: 'Executors will request access to the collections assigned to them and follow the release steps here.',
    },
    BENEFICIARY: {
      label: 'Beneficiary',
      title: 'Beneficiary dashboard',
      description: 'Beneficiaries will see the collections released to them here.',
    },
    LEGAL_VERIFIER: {
      label: 'Legal verifier / Notary',
      title: 'Legal verifier dashboard',
      description: 'Legal verifiers will review and confirm documents attached to release requests here.',
    },
  },

  placeholder: {
    badge: 'Placeholder',
    text: 'This page only confirms that sign-in sent you to the right dashboard. The features for this role are built in later flows.',
  },

  session: {
    title: 'Your session',
    name: 'Name',
    identifier: 'Signed in with',
    role: 'Role',
    storage: 'Session kept',
    storageRemember: 'On this device (Keep me signed in)',
    storageTab: 'In this browser tab only',
    mode: 'Authentication',
    modeDemo: 'Demo, simulated in the browser',
    warning:
      'Demo limitation: this session is kept in browser storage and is not secure. The real backend must check the user and role on every request.',
  },

  accessDenied: {
    title: 'Access denied',
    text: (role) => `Your role (${role}) cannot open this page.`,
    cta: 'Go to my dashboard',
  },
}

const vi = {
  languageLabel: 'Ngôn ngữ',
  logout: 'Đăng xuất',
  loggingOut: 'Đang đăng xuất…',
  demoBadge: 'Phiên demo',

  roles: {
    ADMIN: {
      label: 'Quản trị viên',
      title: 'Bảng điều khiển quản trị',
      description: 'Quản trị viên sẽ quản lý người dùng, vai trò và cài đặt hệ thống tại đây.',
    },
    VAULT_OWNER: {
      label: 'Chủ kho',
      title: 'Bảng điều khiển chủ kho',
      description: 'Chủ kho sẽ tạo kho, thêm hồ sơ và chọn người liên hệ tin cậy tại đây.',
    },
    EXECUTOR: {
      label: 'Người thực thi / Ủy thác',
      title: 'Bảng điều khiển người thực thi',
      description: 'Người thực thi sẽ yêu cầu truy cập các bộ sưu tập được giao và làm theo các bước trao quyền tại đây.',
    },
    BENEFICIARY: {
      label: 'Người thụ hưởng',
      title: 'Bảng điều khiển người thụ hưởng',
      description: 'Người thụ hưởng sẽ xem các bộ sưu tập đã được trao cho họ tại đây.',
    },
    LEGAL_VERIFIER: {
      label: 'Người xác minh pháp lý / Công chứng',
      title: 'Bảng điều khiển người xác minh pháp lý',
      description: 'Người xác minh pháp lý sẽ xem xét và xác nhận giấy tờ đi kèm các yêu cầu trao quyền tại đây.',
    },
  },

  placeholder: {
    badge: 'Trang tạm',
    text: 'Trang này chỉ để xác nhận đăng nhập đã đưa bạn tới đúng bảng điều khiển. Chức năng của vai trò này sẽ được làm ở các flow sau.',
  },

  session: {
    title: 'Phiên đăng nhập',
    name: 'Họ tên',
    identifier: 'Đăng nhập bằng',
    role: 'Vai trò',
    storage: 'Lưu phiên',
    storageRemember: 'Trên thiết bị này (Duy trì đăng nhập)',
    storageTab: 'Chỉ trong tab trình duyệt này',
    mode: 'Xác thực',
    modeDemo: 'Demo, mô phỏng trong trình duyệt',
    warning:
      'Giới hạn của demo: phiên này được lưu trong bộ nhớ trình duyệt và không an toàn. Backend thật phải kiểm tra người dùng và vai trò ở mọi yêu cầu.',
  },

  accessDenied: {
    title: 'Không có quyền truy cập',
    text: (role) => `Vai trò của bạn (${role}) không được mở trang này.`,
    cta: 'Về bảng điều khiển của tôi',
  },
}

export const dashboardContent = { en, vi }
