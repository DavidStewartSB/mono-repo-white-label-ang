// libs/core/shell/src/lib/layout/admin/models/admin-nav-item.model.ts
export interface AdminNavItem {
  label: string;
  icon?: string;
  route: string;
  badge?: string | number;
  isActive?: boolean;
}