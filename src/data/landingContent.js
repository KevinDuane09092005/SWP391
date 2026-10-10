// All text shown on the landing page, one block per language.
// Edit wording here without touching the components.
// Every language must have the same keys; only the text changes.
// `icon` values refer to names defined in src/components/Icon.jsx.

const en = {
  ui: {
    brandLabel: 'LegacyVault home',
    mainNavLabel: 'Main',
    footerNavLabel: 'Footer',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    signIn: 'Sign In',
    getStarted: 'Get Started',
    languageLabel: 'Language',
    stepLabel: 'Step',
  },

  navLinks: [
    { label: 'Home', to: '/home' },
    { label: 'How It Works', to: '/how-it-works' },
    { label: 'Security', to: '/#security' },
    { label: 'Pricing', to: '/pricing' },
  ],

  hero: {
    titleLines: ['Protect what matters.', 'Release it when it', 'matters most.'],
    description:
      'Store passwords, documents, and important instructions in one secure vault. Give the right people access only when your chosen conditions are met.',
    cta: { label: 'Create your vault', to: '/register' },
    card: {
      title: 'Secure release model',
      description: 'A simple, controlled way to prepare access for the people who need it later.',
      items: [
        {
          icon: 'shieldCheck',
          title: 'Secure release model',
          text: 'Define who receives access and when it should be released.',
        },
        {
          icon: 'users',
          title: 'Controlled access',
          text: 'Choose beneficiaries, executors, and the conditions that unlock access.',
        },
        {
          icon: 'badgeCheck',
          title: 'Verified handover',
          text: 'Release access only after the right checks and approvals are complete.',
        },
      ],
    },
  },

  trust: {
    id: 'security',
    title: 'Built for trust',
    description:
      'Your vault stays private while active, and access is released only when your rules are met.',
    items: [
      {
        icon: 'lock',
        title: 'Private while active',
        text: 'Your vault remains encrypted and private until a request is triggered.',
      },
      {
        icon: 'users',
        title: 'Controlled access',
        text: 'Choose who can request access, review assets, and when it should unlock.',
      },
      {
        icon: 'shieldCheck',
        title: 'Approved release',
        text: 'Access is released only after safeguards, timing rules, and approvals pass.',
      },
    ],
  },

  howItWorks: {
    id: 'how-it-works',
    title: 'How it works',
    description:
      'A simple, repeatable flow that keeps your vault private until the right conditions are met.',
    steps: [
      {
        title: 'Someone requests access',
        text: 'A trusted contact starts a request, and your vault stays private until the next step runs.',
      },
      {
        title: 'Safeguards and timing rules run',
        text: 'Check-ins, waiting periods, and approval rules are evaluated before anything unlocks.',
      },
      {
        title: 'Only the approved collection unlocks',
        text: 'Only the collection that meets your rules becomes available to the right person.',
      },
    ],
  },

  storage: {
    id: 'what-you-can-store',
    title: 'What can you store?',
    description:
      'Organize the essentials in one secure place so the right people can find them when needed.',
    items: [
      {
        icon: 'key',
        title: 'Passwords',
        text: 'Store login credentials, recovery codes, and essential account details.',
      },
      {
        icon: 'fileText',
        title: 'Documents',
        text: 'Upload wills, trust deeds, insurance policies, and other important files.',
      },
      {
        icon: 'pencil',
        title: 'Instructions',
        text: 'Leave notes, wishes, and practical guidance for the people who will need it.',
      },
      {
        icon: 'smartphone',
        title: 'Devices',
        text: 'Keep phone PINs, laptop passwords, and hardware access details organized.',
      },
      {
        icon: 'contact',
        title: 'Important contacts',
        text: 'Store executor details, emergency contacts, and trusted professionals.',
      },
      {
        icon: 'layers',
        title: 'Collections',
        text: 'Group related items into collections so the right people receive only what they need.',
      },
    ],
  },

  pricing: {
    id: 'pricing',
    title: 'Pricing',
    description: 'Start free. Upgrade when you need more storage, collections, or trusted contacts.',
    card: {
      heading: 'Start free. Upgrade when you need more storage, collections, or trusted contacts.',
      description:
        'Compare plans to find the right balance of security, access controls, and vault capacity.',
      cta: { label: 'Compare plans', to: '/pricing' },
    },
  },

  finalCta: {
    title: 'Ready to protect what matters?',
    description: 'Create your vault today and start organizing the essentials in one secure place.',
    primary: { label: 'Create your vault', to: '/register' },
    secondary: { label: 'Learn more', href: '#how-it-works' },
  },

  footer: {
    tagline: 'Secure release for the people who matter most.',
    links: [
      { label: 'Security', to: '/#security' },
      { label: 'Privacy', to: '/privacy' },
      { label: 'Contact', to: '/contact' },
    ],
    prototypeNotice:
      'Frontend prototype for a university project. No accounts, vault data, or files are stored, encrypted, or released yet.',
  },
}

const vi = {
  ui: {
    brandLabel: 'Trang chủ LegacyVault',
    mainNavLabel: 'Điều hướng chính',
    footerNavLabel: 'Chân trang',
    openMenu: 'Mở menu',
    closeMenu: 'Đóng menu',
    signIn: 'Đăng nhập',
    getStarted: 'Bắt đầu',
    languageLabel: 'Ngôn ngữ',
    stepLabel: 'Bước',
  },

  navLinks: [
    { label: 'Trang chủ', to: '/home' },
    { label: 'Cách hoạt động', to: '/how-it-works' },
    { label: 'Bảo mật', to: '/#security' },
    { label: 'Bảng giá', to: '/pricing' },
  ],

  hero: {
    titleLines: ['Bảo vệ những gì quan trọng.', 'Trao lại vào đúng lúc', 'cần thiết nhất.'],
    description:
      'Lưu trữ mật khẩu, tài liệu và các chỉ dẫn quan trọng trong một kho an toàn. Chỉ cấp quyền truy cập cho đúng người khi các điều kiện bạn đặt ra được đáp ứng.',
    cta: { label: 'Tạo kho của bạn', to: '/register' },
    card: {
      title: 'Cơ chế trao quyền an toàn',
      description: 'Cách đơn giản và có kiểm soát để chuẩn bị quyền truy cập cho những người cần đến sau này.',
      items: [
        {
          icon: 'shieldCheck',
          title: 'Cơ chế trao quyền an toàn',
          text: 'Xác định ai được nhận quyền truy cập và khi nào quyền đó được trao.',
        },
        {
          icon: 'users',
          title: 'Truy cập có kiểm soát',
          text: 'Chọn người thụ hưởng, người thực thi và các điều kiện để mở quyền truy cập.',
        },
        {
          icon: 'badgeCheck',
          title: 'Bàn giao được xác minh',
          text: 'Chỉ trao quyền truy cập sau khi đã hoàn tất các bước kiểm tra và phê duyệt cần thiết.',
        },
      ],
    },
  },

  trust: {
    id: 'security',
    title: 'Xây dựng trên sự tin cậy',
    description:
      'Kho của bạn luôn được giữ riêng tư khi bạn còn hoạt động, và quyền truy cập chỉ được trao khi các quy tắc của bạn được đáp ứng.',
    items: [
      {
        icon: 'lock',
        title: 'Riêng tư khi còn hoạt động',
        text: 'Kho của bạn luôn được mã hóa và giữ riêng tư cho đến khi có yêu cầu truy cập.',
      },
      {
        icon: 'users',
        title: 'Truy cập có kiểm soát',
        text: 'Chọn ai có thể yêu cầu truy cập, xem tài sản và thời điểm kho được mở.',
      },
      {
        icon: 'shieldCheck',
        title: 'Trao quyền đã phê duyệt',
        text: 'Quyền truy cập chỉ được trao sau khi vượt qua các lớp bảo vệ, quy tắc thời gian và phê duyệt.',
      },
    ],
  },

  howItWorks: {
    id: 'how-it-works',
    title: 'Cách hoạt động',
    description:
      'Một quy trình đơn giản, nhất quán giúp kho của bạn luôn riêng tư cho đến khi đúng điều kiện.',
    steps: [
      {
        title: 'Có người yêu cầu truy cập',
        text: 'Một người liên hệ tin cậy gửi yêu cầu, và kho của bạn vẫn được giữ riêng tư cho đến bước tiếp theo.',
      },
      {
        title: 'Kiểm tra bảo vệ và quy tắc thời gian',
        text: 'Các lần xác nhận, thời gian chờ và quy tắc phê duyệt được đánh giá trước khi mở bất cứ thứ gì.',
      },
      {
        title: 'Chỉ mở bộ sưu tập đã được phê duyệt',
        text: 'Chỉ bộ sưu tập đáp ứng các quy tắc của bạn mới được mở cho đúng người.',
      },
    ],
  },

  storage: {
    id: 'what-you-can-store',
    title: 'Bạn có thể lưu trữ gì?',
    description:
      'Sắp xếp những thứ thiết yếu tại một nơi an toàn để đúng người có thể tìm thấy khi cần.',
    items: [
      {
        icon: 'key',
        title: 'Mật khẩu',
        text: 'Lưu thông tin đăng nhập, mã khôi phục và các chi tiết tài khoản quan trọng.',
      },
      {
        icon: 'fileText',
        title: 'Tài liệu',
        text: 'Tải lên di chúc, văn bản ủy thác, hợp đồng bảo hiểm và các tệp quan trọng khác.',
      },
      {
        icon: 'pencil',
        title: 'Chỉ dẫn',
        text: 'Để lại ghi chú, mong muốn và hướng dẫn cụ thể cho những người sẽ cần đến.',
      },
      {
        icon: 'smartphone',
        title: 'Thiết bị',
        text: 'Sắp xếp mã PIN điện thoại, mật khẩu máy tính và thông tin truy cập thiết bị.',
      },
      {
        icon: 'contact',
        title: 'Liên hệ quan trọng',
        text: 'Lưu thông tin người thực thi, liên hệ khẩn cấp và các chuyên gia đáng tin cậy.',
      },
      {
        icon: 'layers',
        title: 'Bộ sưu tập',
        text: 'Nhóm các mục liên quan thành bộ sưu tập để mỗi người chỉ nhận đúng những gì họ cần.',
      },
    ],
  },

  pricing: {
    id: 'pricing',
    title: 'Bảng giá',
    description: 'Bắt đầu miễn phí. Nâng cấp khi bạn cần thêm dung lượng, bộ sưu tập hoặc người liên hệ tin cậy.',
    card: {
      heading: 'Bắt đầu miễn phí. Nâng cấp khi bạn cần thêm dung lượng, bộ sưu tập hoặc người liên hệ tin cậy.',
      description:
        'So sánh các gói để tìm sự cân bằng phù hợp giữa bảo mật, kiểm soát truy cập và dung lượng kho.',
      cta: { label: 'So sánh các gói', to: '/pricing' },
    },
  },

  finalCta: {
    title: 'Sẵn sàng bảo vệ những gì quan trọng?',
    description: 'Tạo kho của bạn ngay hôm nay và bắt đầu sắp xếp những thứ thiết yếu tại một nơi an toàn.',
    primary: { label: 'Tạo kho của bạn', to: '/register' },
    secondary: { label: 'Tìm hiểu thêm', href: '#how-it-works' },
  },

  footer: {
    tagline: 'Trao lại an toàn cho những người quan trọng nhất.',
    links: [
      { label: 'Bảo mật', to: '/#security' },
      { label: 'Quyền riêng tư', to: '/privacy' },
      { label: 'Liên hệ', to: '/contact' },
    ],
    prototypeNotice:
      'Bản mẫu giao diện cho một dự án đại học. Hiện chưa có tài khoản, dữ liệu kho hay tệp nào được lưu trữ, mã hóa hoặc trao lại.',
  },
}

export const landingContent = { en, vi }
