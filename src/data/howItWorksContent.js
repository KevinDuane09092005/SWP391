// All text shown on the How it works page (/how-it-works), one block per language.
// `icon` values refer to names defined in src/components/Icon.jsx.
//
// Release path slides: each `visual` is built from optional blocks, drawn in this
// order: `steps` (numbered cards), `tiles` (collections), `list` (rows), `cards`.
// A list row shows either a `tag` (pill) or a `status` (plain text on the right).

const en = {
  hero: {
    eyebrow: 'How it works',
    title: 'A vault that stays closed until the right people need it',
    description:
      'LegacyVault helps you store the important things now, then makes access depend on a real request and the release rules you choose.',
    chips: ['Connected vaults', 'Access requests', 'Collection-level access'],
  },

  // Main area of the dashboard preview in the hero (the frame is in dashboardShellContent.js).
  preview: {
    connected: {
      title: "Vaults you're connected to",
      text: 'Accepted roles, pending invites, and collection-level access appear here.',
      search: 'Search owner, collection, role, or state',
      total: '1 total',
      columns: ['Vault owner', 'Role', 'Status', 'Collection', 'Access', 'Actions'],
      rows: [
        [
          { text: 'Tom', sub: 'tom@gmail.com' },
          { tag: 'Trusted' },
          { tag: 'Accepted' },
          'My Crypto Assets',
          { button: 'Open access' },
          { button: 'View details' },
        ],
      ],
    },
    requests: {
      title: 'Access requests',
      text: 'Track who requested which collection and what happens next.',
      badge: '7 total',
      search: 'Search requester, collection, or status',
      total: '7 total',
      columns: ['Requester', 'Collection', 'Status', 'Requested', 'Unlock date', 'Approvals'],
      rows: [
        ['Philip', 'My Policies', { tag: 'Unlocked' }, '17 Apr 2026', '17 Apr 2026', '1/1'],
        ['Jack', 'My Policies', { tag: 'Cancelled', muted: true }, '12 Apr 2026', '16 Apr 2026', 'Not required'],
      ],
      footer: 'Page 2 of 2 · Showing 6–7 of 7 entries',
    },
  },

  pillars: [
    {
      icon: 'users',
      title: 'What makes it different',
      text: 'It is not just a folder of secrets. It is a controlled handoff plan for the people who may need to act later.',
    },
    {
      icon: 'shieldCheck',
      title: 'Security model',
      text: "Sensitive records are encrypted before storage, stay private while you're active, and only follow the release path after a legitimate request.",
    },
  ],

  releasePath: {
    id: 'release-path',
    eyebrow: 'Release path',
    title: 'The three-step flow behind vault access',
    description:
      'Every request follows the same path, so nothing is released by accident and nothing is released early.',
    carousel: {
      previous: 'Previous step',
      next: 'Next step',
      goTo: (page, total) => `Show step ${page} of ${total}`,
    },
    slides: [
      {
        label: 'Owner workspace',
        step: 'Step 1',
        title: 'Add trusted contacts and leave clear instructions',
        text: 'Start with the passwords, documents, and instructions your family would struggle to find fast.',
        visual: {
          badge: 'Owner setup',
          caption: 'Prepare the records and people that matter first.',
          list: {
            title: 'Family readiness collection',
            meta: '3 records',
            rows: [
              { name: 'Email passwords', tag: 'Logins' },
              { name: 'Insurance folder', tag: 'Documents' },
              { name: 'Family instructions', tag: 'Instructions' },
            ],
          },
          cards: [
            {
              title: 'Granted contacts',
              lines: ['Executor and Trusted', 'Both can request assigned collections and confirm later.'],
            },
            {
              title: 'Release rules',
              lines: ['14-day inactivity window', '2 total confirmations if requested'],
              highlight: true,
            },
          ],
        },
      },
      {
        label: 'Request tracking',
        step: 'Step 2',
        title: 'A request starts the policy checks',
        text: 'A trusted contact still has to request access. After that, your timing and confirmation rules begin.',
        visual: {
          badge: 'Request begins',
          caption: 'A trusted contact starts the process, not the unlock.',
          steps: [
            { title: 'Request submitted', text: 'Executor asks for the Family Instructions collection.' },
            { title: 'Checks begin', text: 'Inactivity timing and confirmations move into pending state.' },
            { title: 'Still locked', text: 'The request does not expose the collection by itself.' },
          ],
          cards: [
            { title: 'Status', lines: ['Pending confirmation'] },
            { title: 'Timing', lines: ['Final reminder still active'] },
            { title: 'Scope', lines: ['Only one collection is in play'] },
          ],
        },
      },
      {
        label: 'Controlled release path',
        step: 'Step 3',
        title: 'Unlock only when your chosen conditions are met',
        text: 'Only the eligible collection unlocks after the selected release path is satisfied: timed release, confirmations, or both.',
        visual: {
          badge: 'Eligible release',
          caption: 'Unlock only the collection that satisfied the selected rules.',
          tiles: [
            { name: 'My banking', status: 'Still locked' },
            { name: 'Family instructions', status: 'Unlocked for the approved requester', unlocked: true },
            { name: 'Crypto assets', status: 'Still locked' },
          ],
          list: {
            title: 'Released collection content',
            badge: 'Visible now',
            rows: [
              { name: 'Hospital folder and emergency contacts', status: 'Ready' },
              { name: 'Executor instructions and key documents', status: 'Ready' },
              { name: 'Other collections outside this request', status: 'Hidden' },
            ],
          },
        },
      },
    ],
  },
}

const vi = {
  hero: {
    eyebrow: 'Cách hoạt động',
    title: 'Một chiếc kho luôn đóng cho đến khi đúng người cần đến',
    description:
      'LegacyVault giúp bạn lưu trữ những điều quan trọng ngay hôm nay, và chỉ mở quyền truy cập khi có yêu cầu thật sự cùng các quy tắc trao quyền do bạn chọn.',
    chips: ['Kho được kết nối', 'Yêu cầu truy cập', 'Truy cập theo bộ sưu tập'],
  },

  preview: {
    connected: {
      title: 'Kho bạn được kết nối',
      text: 'Vai trò đã chấp nhận, lời mời đang chờ và quyền truy cập theo bộ sưu tập hiện ở đây.',
      search: 'Tìm theo chủ kho, bộ sưu tập, vai trò hoặc trạng thái',
      total: 'Tổng 1',
      columns: ['Chủ kho', 'Vai trò', 'Trạng thái', 'Bộ sưu tập', 'Truy cập', 'Thao tác'],
      rows: [
        [
          { text: 'Tom', sub: 'tom@gmail.com' },
          { tag: 'Tin cậy' },
          { tag: 'Đã chấp nhận' },
          'Tài sản tiền mã hóa',
          { button: 'Mở truy cập' },
          { button: 'Xem chi tiết' },
        ],
      ],
    },
    requests: {
      title: 'Yêu cầu truy cập',
      text: 'Theo dõi ai đã yêu cầu bộ sưu tập nào và bước tiếp theo là gì.',
      badge: 'Tổng 7',
      search: 'Tìm theo người yêu cầu, bộ sưu tập hoặc trạng thái',
      total: 'Tổng 7',
      columns: ['Người yêu cầu', 'Bộ sưu tập', 'Trạng thái', 'Ngày yêu cầu', 'Ngày mở', 'Phê duyệt'],
      rows: [
        ['Philip', 'Hợp đồng bảo hiểm', { tag: 'Đã mở' }, '17/04/2026', '17/04/2026', '1/1'],
        ['Jack', 'Hợp đồng bảo hiểm', { tag: 'Đã hủy', muted: true }, '12/04/2026', '16/04/2026', 'Không cần'],
      ],
      footer: 'Trang 2/2 · Hiển thị 6–7 trên 7 mục',
    },
  },

  pillars: [
    {
      icon: 'users',
      title: 'Điều gì khác biệt',
      text: 'Đây không chỉ là một thư mục chứa bí mật. Đây là kế hoạch bàn giao có kiểm soát cho những người có thể cần hành động sau này.',
    },
    {
      icon: 'shieldCheck',
      title: 'Mô hình bảo mật',
      text: 'Hồ sơ nhạy cảm được mã hóa trước khi lưu, luôn riêng tư khi bạn còn hoạt động, và chỉ đi theo lộ trình trao quyền sau một yêu cầu hợp lệ.',
    },
  ],

  releasePath: {
    id: 'release-path',
    eyebrow: 'Lộ trình trao quyền',
    title: 'Quy trình ba bước phía sau quyền truy cập kho',
    description:
      'Mọi yêu cầu đều đi theo cùng một lộ trình, nên không có gì bị mở nhầm hay mở sớm.',
    carousel: {
      previous: 'Bước trước',
      next: 'Bước tiếp',
      goTo: (page, total) => `Xem bước ${page} trên ${total}`,
    },
    slides: [
      {
        label: 'Không gian của chủ kho',
        step: 'Bước 1',
        title: 'Thêm người liên hệ tin cậy và để lại chỉ dẫn rõ ràng',
        text: 'Bắt đầu với mật khẩu, tài liệu và chỉ dẫn mà gia đình bạn khó tìm nhanh nhất.',
        visual: {
          badge: 'Thiết lập của chủ kho',
          caption: 'Chuẩn bị trước những hồ sơ và con người quan trọng nhất.',
          list: {
            title: 'Bộ sưu tập sẵn sàng cho gia đình',
            meta: '3 hồ sơ',
            rows: [
              { name: 'Mật khẩu email', tag: 'Đăng nhập' },
              { name: 'Hồ sơ bảo hiểm', tag: 'Tài liệu' },
              { name: 'Chỉ dẫn cho gia đình', tag: 'Chỉ dẫn' },
            ],
          },
          cards: [
            {
              title: 'Người liên hệ được cấp quyền',
              lines: ['Người thực thi và Người tin cậy', 'Cả hai có thể yêu cầu bộ sưu tập được giao và xác nhận sau.'],
            },
            {
              title: 'Quy tắc trao quyền',
              lines: ['Thời gian không hoạt động 14 ngày', 'Cần tổng cộng 2 xác nhận khi có yêu cầu'],
              highlight: true,
            },
          ],
        },
      },
      {
        label: 'Theo dõi yêu cầu',
        step: 'Bước 2',
        title: 'Một yêu cầu sẽ bắt đầu các bước kiểm tra',
        text: 'Người liên hệ tin cậy vẫn phải gửi yêu cầu truy cập. Sau đó, các quy tắc thời gian và xác nhận của bạn mới bắt đầu.',
        visual: {
          badge: 'Bắt đầu yêu cầu',
          caption: 'Người tin cậy chỉ bắt đầu quy trình, không phải mở khóa.',
          steps: [
            { title: 'Đã gửi yêu cầu', text: 'Người thực thi yêu cầu bộ sưu tập Chỉ dẫn cho gia đình.' },
            { title: 'Bắt đầu kiểm tra', text: 'Thời gian không hoạt động và các xác nhận chuyển sang trạng thái chờ.' },
            { title: 'Vẫn khóa', text: 'Chỉ riêng yêu cầu không làm lộ bộ sưu tập.' },
          ],
          cards: [
            { title: 'Trạng thái', lines: ['Đang chờ xác nhận'] },
            { title: 'Thời gian', lines: ['Lời nhắc cuối vẫn còn hiệu lực'] },
            { title: 'Phạm vi', lines: ['Chỉ một bộ sưu tập liên quan'] },
          ],
        },
      },
      {
        label: 'Lộ trình trao quyền có kiểm soát',
        step: 'Bước 3',
        title: 'Chỉ mở khi các điều kiện bạn chọn được đáp ứng',
        text: 'Chỉ bộ sưu tập đủ điều kiện mới được mở sau khi lộ trình đã chọn được đáp ứng: trao quyền theo thời gian, xác nhận, hoặc cả hai.',
        visual: {
          badge: 'Đủ điều kiện mở',
          caption: 'Chỉ mở bộ sưu tập đã đáp ứng các quy tắc được chọn.',
          tiles: [
            { name: 'Ngân hàng', status: 'Vẫn khóa' },
            { name: 'Chỉ dẫn cho gia đình', status: 'Đã mở cho người yêu cầu được duyệt', unlocked: true },
            { name: 'Tài sản tiền mã hóa', status: 'Vẫn khóa' },
          ],
          list: {
            title: 'Nội dung bộ sưu tập đã mở',
            badge: 'Đang hiển thị',
            rows: [
              { name: 'Hồ sơ bệnh viện và liên hệ khẩn cấp', status: 'Sẵn sàng' },
              { name: 'Chỉ dẫn cho người thực thi và tài liệu chính', status: 'Sẵn sàng' },
              { name: 'Các bộ sưu tập khác ngoài yêu cầu này', status: 'Ẩn' },
            ],
          },
        },
      },
    ],
  },
}

export const howItWorksContent = { en, vi }
