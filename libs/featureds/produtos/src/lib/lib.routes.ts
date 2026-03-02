import { Route } from '@angular/router';
import { ProductsListComponent } from './pages/public/products-list/products-list.component';
import { ProductDetailComponent } from './pages/public/product-detail/product-detail.component';
import { AuthGuard } from '@cardapio-online/auth'
import { ProductTableComponent } from './pages/admin/product-table/product-table.component';
import { ProductFormComponent } from './pages/admin/product-form/product-form.component';
// libs/core/auth/src/lib/guards/auth.guard.ts

export const produtosRoutes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'cardapio' },

  // PUBLIC
  { path: 'cardapio', component: ProductsListComponent },
  { path: 'item/:id', component: ProductDetailComponent },

  // ADMIN
  {
    path: 'admin',
    canActivate: [AuthGuard],
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'table' },
      { path: 'table', component: ProductTableComponent },
      { path: 'new', component: ProductFormComponent },
      { path: ':id/edit', component: ProductFormComponent },
    ],
  },
];
