// All text shown on the Home page (/home), one block per language.
// `icon` values refer to names defined in src/components/Icon.jsx.

const en = {
  hero: {
    eyebrow: 'Digital legacy planning',
    title:
      'If something happened to you tomorrow, would your family know where to find your passwords, documents, and final instructions?',
    description:
      'Store passwords, documents, recovery details, and final instructions securely. Keep everything private while you are active, then share only the right information with the right trusted contacts when it is truly needed.',
    note: 'No credit card required',
    primary: { label: 'Start free', to: '/register' },
    secondary: { label: 'How it works', href: '#handoff' },
  },

  highlights: [
    "Private while you're alive",
    'Trusted contacts do not get automatic access',
    'Share only approved information',
    'Start with one password, one document, one trusted person',
  ],

  // Main area of the dashboard preview in the hero. The frame text is in
  // dashboardShellContent.js.
  preview: {
    eyebrow: 'Dashboard',
    title: 'Legacy readiness at a glance',
    subtitle: 'See your vault, trusted contacts, and access activity in one place.',
    stats: [
      { label: 'Vault items', value: '7', text: 'Secure items currently stored in your vault' },
      { label: 'Trusted contacts', value: '4', text: 'Timed inactivity release is active for this vault' },
      { label: 'Inactivity window', value: '7d', text: 'Last active 28 Apr 2026. Final warning 24h before timed release.' },
      { label: 'Unlocked requests', value: '6', text: '7 access requests tracked so far' },
    ],
    table: {
      title: 'Vault entries',
      text: 'Passwords, documents, notes, and inheritance instructions, each assigned to a vault collection.',
      search: 'Search title, type, category or collection',
      total: '7 total',
      columns: ['Title', 'Type', 'Collection', 'Documents', 'Updated'],
      rows: [
        ['Encrypted vault item', { tag: 'Device passcode' }, 'My new test collection', '1', '17 Apr 2026'],
        ['Encrypted vault item', { tag: 'Last message' }, 'My family', '0', '17 Apr 2026'],
        ['Encrypted vault item', { tag: 'Other' }, 'My family', '0', '17 Apr 2026'],
      ],
    },
  },

  handoff: {
    id: 'handoff',
    eyebrow: 'If access is needed later',
    title: 'A clearer handoff for your family or executor',
    links: [
      { label: 'How it works', to: '/how-it-works' },
      { label: 'Digital estate planning checklist', to: '/guides/checklist' },
      { label: 'Executor access guide', to: '/guides/executor-access' },
    ],
    linksLabel: 'Related guides',
    steps: [
      'Someone requests access',
      'Your safeguards and timing rules run',
      'Only the approved collection unlocks',
    ],
    summary:
      'A trusted contact starts with a request. Your safeguards run first. Nothing unlocks from a request alone. Only the collection that meets your rules becomes available.',
  },

  addFirst: {
    id: 'what-to-add-first',
    eyebrow: 'What to add first',
    title: 'Start with the records your family would struggle to find',
    description:
      'Add the essentials in stages: passwords, recovery details, documents, and instructions. The goal is to reduce panic later, not to finish everything today.',
    carousel: {
      previous: 'Previous',
      next: 'Next',
      goTo: (page, total) => `Show page ${page} of ${total}`,
    },
    items: [
      {
        icon: 'key',
        title: 'Logins',
        text: 'Passwords, recovery codes, and device access your family may need quickly.',
      },
      {
        icon: 'fileText',
        title: 'Documents',
        text: 'Wills, policies, scans, and signed records that should not stay buried in folders.',
      },
      {
        icon: 'scroll',
        title: 'Instructions',
        text: 'What to do, who to call, and what you want people to know.',
      },
      {
        icon: 'laptop',
        title: 'Devices',
        text: 'Laptop and phone access details, backup codes, and recovery steps that are easy to miss.',
      },
      {
        icon: 'phone',
        title: 'People to call',
        text: 'Lawyers, executors, advisers, employers, and the people your family should contact first.',
      },
      {
        icon: 'creditCard',
        title: 'Bills and subscriptions',
        text: 'Recurring payments, account references, and services your family may need to stop or manage quickly.',
      },
      {
        icon: 'wallet',
        title: 'Money and accounts',
        text: 'Banks, pensions, investments, and where statements can be found.',
      },
      {
        icon: 'mail',
        title: 'Email and online accounts',
        text: 'Email, social media, and cloud storage that hold years of messages, photos, and files.',
      },
      {
        icon: 'heart',
        title: 'Final wishes',
        text: 'Personal messages, memorial preferences, and the things you want handled with care.',
      },
    ],
  },
}

const vi = {
  hero: {
    eyebrow: 'Lập kế hoạch di sản số',
    title:
      'Nếu ngày mai có chuyện xảy ra với bạn, gia đình có biết tìm mật khẩu, tài liệu và những chỉ dẫn cuối cùng của bạn ở đâu không?',
    description:
      'Lưu trữ an toàn mật khẩu, tài liệu, thông tin khôi phục và những chỉ dẫn cuối cùng. Giữ mọi thứ riêng tư khi bạn còn hoạt động, và chỉ chia sẻ đúng thông tin cho đúng người liên hệ tin cậy khi thật sự cần.',
    note: 'Không cần thẻ tín dụng',
    primary: { label: 'Bắt đầu miễn phí', to: '/register' },
    secondary: { label: 'Cách hoạt động', href: '#handoff' },
  },

  highlights: [
    'Riêng tư khi bạn còn sống',
    'Người liên hệ tin cậy không tự động có quyền truy cập',
    'Chỉ chia sẻ thông tin đã được phê duyệt',
    'Bắt đầu với một mật khẩu, một tài liệu, một người tin cậy',
  ],

  preview: {
    eyebrow: 'Tổng quan',
    title: 'Mức độ sẵn sàng của di sản',
    subtitle: 'Xem kho, người liên hệ tin cậy và hoạt động truy cập tại một nơi.',
    stats: [
      { label: 'Mục trong kho', value: '7', text: 'Mục bảo mật đang được lưu trong kho' },
      { label: 'Người tin cậy', value: '4', text: 'Đang bật trao quyền khi không hoạt động' },
      { label: 'Thời gian chờ', value: '7d', text: 'Hoạt động gần nhất 28/04/2026. Cảnh báo cuối 24 giờ trước khi trao quyền.' },
      { label: 'Yêu cầu đã mở', value: '6', text: 'Đã ghi nhận 7 yêu cầu truy cập' },
    ],
    table: {
      title: 'Mục trong kho',
      text: 'Mật khẩu, tài liệu, ghi chú và chỉ dẫn thừa kế, mỗi mục thuộc một bộ sưu tập.',
      search: 'Tìm theo tiêu đề, loại, danh mục hoặc bộ sưu tập',
      total: 'Tổng 7',
      columns: ['Tiêu đề', 'Loại', 'Bộ sưu tập', 'Tài liệu', 'Cập nhật'],
      rows: [
        ['Mục kho đã mã hóa', { tag: 'Mã thiết bị' }, 'Bộ sưu tập thử', '1', '17/04/2026'],
        ['Mục kho đã mã hóa', { tag: 'Lời nhắn cuối' }, 'Gia đình', '0', '17/04/2026'],
        ['Mục kho đã mã hóa', { tag: 'Khác' }, 'Gia đình', '0', '17/04/2026'],
      ],
    },
  },

  handoff: {
    id: 'handoff',
    eyebrow: 'Nếu sau này cần truy cập',
    title: 'Bàn giao rõ ràng hơn cho gia đình hoặc người thực thi',
    links: [
      { label: 'Cách hoạt động', to: '/how-it-works' },
      { label: 'Danh sách kiểm tra di sản số', to: '/guides/checklist' },
      { label: 'Hướng dẫn cho người thực thi', to: '/guides/executor-access' },
    ],
    linksLabel: 'Hướng dẫn liên quan',
    steps: [
      'Có người yêu cầu truy cập',
      'Các lớp bảo vệ và quy tắc thời gian được kiểm tra',
      'Chỉ bộ sưu tập đã phê duyệt được mở',
    ],
    summary:
      'Người liên hệ tin cậy bắt đầu bằng một yêu cầu. Các lớp bảo vệ của bạn được kiểm tra trước. Chỉ một yêu cầu thì không mở được gì. Chỉ bộ sưu tập đáp ứng quy tắc của bạn mới được mở.',
  },

  addFirst: {
    id: 'what-to-add-first',
    eyebrow: 'Nên thêm gì trước',
    title: 'Bắt đầu với những hồ sơ mà gia đình khó tìm nhất',
    description:
      'Thêm những thứ thiết yếu theo từng bước: mật khẩu, thông tin khôi phục, tài liệu và chỉ dẫn. Mục tiêu là giảm hoảng loạn về sau, không phải hoàn thành mọi thứ ngay hôm nay.',
    carousel: {
      previous: 'Trước',
      next: 'Tiếp',
      goTo: (page, total) => `Xem trang ${page} trên ${total}`,
    },
    items: [
      {
        icon: 'key',
        title: 'Thông tin đăng nhập',
        text: 'Mật khẩu, mã khôi phục và quyền truy cập thiết bị mà gia đình có thể cần gấp.',
      },
      {
        icon: 'fileText',
        title: 'Tài liệu',
        text: 'Di chúc, hợp đồng bảo hiểm, bản scan và giấy tờ đã ký không nên bị chôn vùi trong thư mục.',
      },
      {
        icon: 'scroll',
        title: 'Chỉ dẫn',
        text: 'Cần làm gì, gọi cho ai và những điều bạn muốn mọi người biết.',
      },
      {
        icon: 'laptop',
        title: 'Thiết bị',
        text: 'Thông tin truy cập laptop và điện thoại, mã dự phòng và các bước khôi phục dễ bị bỏ sót.',
      },
      {
        icon: 'phone',
        title: 'Người cần liên hệ',
        text: 'Luật sư, người thực thi, cố vấn, nơi làm việc và những người gia đình nên liên hệ đầu tiên.',
      },
      {
        icon: 'creditCard',
        title: 'Hóa đơn và gói đăng ký',
        text: 'Các khoản thanh toán định kỳ, mã tài khoản và dịch vụ mà gia đình có thể cần dừng hoặc xử lý nhanh.',
      },
      {
        icon: 'wallet',
        title: 'Tiền và tài khoản',
        text: 'Ngân hàng, lương hưu, khoản đầu tư và nơi tìm sao kê.',
      },
      {
        icon: 'mail',
        title: 'Email và tài khoản trực tuyến',
        text: 'Email, mạng xã hội và lưu trữ đám mây chứa nhiều năm tin nhắn, ảnh và tệp.',
      },
      {
        icon: 'heart',
        title: 'Mong muốn cuối cùng',
        text: 'Lời nhắn riêng, mong muốn về tang lễ và những điều bạn muốn được xử lý cẩn thận.',
      },
    ],
  },
}

export const homeContent = { en, vi }
