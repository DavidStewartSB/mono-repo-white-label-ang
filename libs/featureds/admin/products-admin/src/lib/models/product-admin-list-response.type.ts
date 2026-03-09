import { ProductAdminItem } from './product-admin-item.type';

export interface ProductAdminListResponse {
  items: ProductAdminItem[];
  page: number;
  limit: number;
  total: number;
}