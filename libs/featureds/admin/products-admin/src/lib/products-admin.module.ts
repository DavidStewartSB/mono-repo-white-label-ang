import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { productsAdminRoutes } from './lib.routes';
import { ProductListAdminComponent } from './pages/product-list/product-list-admin.component';
import { ProductFormAdminComponent } from './pages/product-form/product-form-admin.component';
import { TablesModule } from '@cardapio-online/tables';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(productsAdminRoutes), TablesModule],
  declarations: [ProductListAdminComponent, ProductFormAdminComponent],
  exports: [ProductListAdminComponent, ProductFormAdminComponent],
})
export class ProductsAdminModule {}
