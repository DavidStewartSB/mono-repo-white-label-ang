//cardapio-online\libs\featureds\admin\products-admin\src\lib\data-access\products-admin.service.ts
import { Injectable } from '@angular/core';
import { Observable, delay, map, of } from 'rxjs';
import { PRODUCTS_ADMIN_MOCK } from '../mocks/products-admin.mock';
import { ProductAdminItem } from '../models/product-admin-item.type';
import { ProductAdminListResponse } from '../models/product-admin-list-response.type';
//Temp
export interface SaveProductPayload {
  name: string;
  password: string;
  email: string;
  phone: string;
  active: boolean;
  featured: boolean;
  allowNotes: boolean;
  selectedCategories: Array<string | number>;
  selectedTags: Array<string | number>;
  selectedExtras: Array<string | number>;
}
@Injectable({
  providedIn: 'root',
})
export class ProductsAdminService {
 getProducts(): Observable<ProductAdminListResponse> {
    const response: ProductAdminListResponse = {
      ...PRODUCTS_ADMIN_MOCK,
      items: PRODUCTS_ADMIN_MOCK.items.map((item) => this.normalizeItem(item)),
    };

    return of(response).pipe(delay(500));
  }

  getProductById(productId: string): Observable<ProductAdminItem> {
    return of(PRODUCTS_ADMIN_MOCK.items).pipe(
      delay(1000),
      map((items) => {
        const found = items.find((item) => item.id === productId);

        if (!found) {
          throw new Error('Produto não encontrado.');
        }

        return this.normalizeItem(found);
      })
    );
  }

  createProduct(payload: SaveProductPayload): Observable<{ id: string }> {
    console.log('Mock createProduct payload:', payload);

    return of({
      id: crypto.randomUUID(),
    }).pipe(delay(1800));
  }

  updateProduct(
    productId: string,
    payload: SaveProductPayload
  ): Observable<{ id: string }> {
    console.log('Mock updateProduct payload:', { productId, ...payload });

    return of({
      id: productId,
    }).pipe(delay(1800));
  }

  private normalizeItem(item: ProductAdminItem): ProductAdminItem {
    return {
      ...item,
      image: item.image ?? 'assets/brand/empty.jpg',
    };
  }
}