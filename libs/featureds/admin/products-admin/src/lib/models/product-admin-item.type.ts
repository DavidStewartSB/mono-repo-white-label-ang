export interface ProductAdminCategory {
  id: string;
  name: string;
}

export interface ProductAdminItem {
  id: string;
  name: string;
  description: string | null;
  tags: string[];
  price: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  category: ProductAdminCategory | null;
  image: string | null;
}