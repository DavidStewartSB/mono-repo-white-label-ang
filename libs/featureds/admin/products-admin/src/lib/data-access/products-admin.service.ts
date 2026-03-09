import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { PRODUCTS_ADMIN_MOCK } from '../mocks/products-admin.mock';
import { ProductAdminItem } from '../models/product-admin-item.type';
import { ProductAdminListResponse } from '../models/product-admin-list-response.type';

@Injectable({
  providedIn: 'root',
})
export class ProductsAdminService {
  getProducts(): Observable<ProductAdminListResponse> {
    const response: ProductAdminListResponse = {
      ...PRODUCTS_ADMIN_MOCK,
      items: PRODUCTS_ADMIN_MOCK.items.map((item) => this.normalizeItem(item)),
    };

    return of(response).pipe(delay(250));
  }

  private normalizeItem(item: ProductAdminItem): ProductAdminItem {
    return {
      ...item,
      image: item.image ?? 'assets/brand/empty.jpg',
    };
  }
}