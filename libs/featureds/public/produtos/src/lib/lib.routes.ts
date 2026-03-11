import { Route } from '@angular/router';
import { ProductsListComponent } from './pages/products-list/products-list.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { AuthGuard } from '@cardapio-online/auth'
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
    ],
  },
];
