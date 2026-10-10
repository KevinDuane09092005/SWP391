// Text for the frame of the mini owner-dashboard previews (top bar and sidebar),
// shared by the Home and How it works pages. Each page supplies its own main area.

const en = {
  badge: 'Owner dashboard',
  appName: 'LegacyVault',
  appTagline: "Private until it's time",
  email: 'marvin@gmail.com',
  signOut: 'Sign out',
  workspaceLabel: 'Workspace',
  workspaceName: 'Marvin',
  workspaceText: 'Manage your vault, trusted contacts, and access activity from one place.',
  switchLabel: 'Switch workspace',
  switchOptions: ['Personal', 'Firm'],
  nav: [
    { icon: 'home', label: 'Dashboard' },
    { icon: 'lock', label: 'Vault' },
    { icon: 'layers', label: 'Collections' },
    { icon: 'users', label: 'Contacts' },
    { icon: 'inbox', label: 'Requests' },
    { icon: 'unlock', label: 'Released access' },
    { icon: 'user', label: 'Account' },
  ],
}

const vi = {
  badge: 'Bảng điều khiển của chủ kho',
  appName: 'LegacyVault',
  appTagline: 'Riêng tư cho đến đúng lúc',
  email: 'marvin@gmail.com',
  signOut: 'Đăng xuất',
  workspaceLabel: 'Không gian làm việc',
  workspaceName: 'Marvin',
  workspaceText: 'Quản lý kho, người liên hệ tin cậy và hoạt động truy cập tại một nơi.',
  switchLabel: 'Chuyển không gian',
  switchOptions: ['Cá nhân', 'Công ty'],
  nav: [
    { icon: 'home', label: 'Tổng quan' },
    { icon: 'lock', label: 'Kho' },
    { icon: 'layers', label: 'Bộ sưu tập' },
    { icon: 'users', label: 'Liên hệ' },
    { icon: 'inbox', label: 'Yêu cầu' },
    { icon: 'unlock', label: 'Quyền đã trao' },
    { icon: 'user', label: 'Tài khoản' },
  ],
}

export const dashboardShellContent = { en, vi }
