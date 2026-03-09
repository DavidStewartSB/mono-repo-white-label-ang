import { Route } from '@angular/router';
import { ProductListAdminComponent } from './pages/product-list/product-list-admin.component';
import { ProductFormAdminComponent } from './pages/product-form/product-form-admin.component';

export const productsAdminRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'lista',
  },
  {
    path: 'lista',
    component: ProductListAdminComponent,
  },
  {
    path: 'novo',
    component: ProductFormAdminComponent,
  },
  {
    path: 'editar/:id',
    component: ProductFormAdminComponent,
  },
];