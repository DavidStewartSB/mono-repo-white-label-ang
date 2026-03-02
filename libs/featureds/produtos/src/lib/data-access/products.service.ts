// libs/featureds/produtos/src/lib/data-access/products.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export type ProductDto = {
  id: string;
  name: string;
  price: number;
};

@Injectable({ providedIn: 'root' })
export class ProductsService {
  constructor(private readonly http: HttpClient) {}

  list(): Observable<ProductDto[]> {
    return this.http.get<ProductDto[]>('/products');
  }

  getById(id: string): Observable<ProductDto> {
    return this.http.get<ProductDto>(`/products/${id}`);
  }

  create(payload: Omit<ProductDto, 'id'>): Observable<ProductDto> {
    return this.http.post<ProductDto>('/products', payload);
  }

  update(id: string, payload: Omit<ProductDto, 'id'>): Observable<ProductDto> {
    return this.http.put<ProductDto>(`/products/${id}`, payload);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`/products/${id}`);
  }
}