import { UiTableColumnType } from "./table.type";

export interface UiTableColumn {
  key: string;
  label: string;
  type?: UiTableColumnType;
  width?: string;
  emptyText?: string;
}

export interface UiTableAction {
  key: string;
  label: string;
  icon?: string;
  variant?: 'default' | 'danger';
}

export interface UiTablePaginationState {
  page: number;
  perPage: number;
  total: number;
}