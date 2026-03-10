import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { produtosRoutes } from './lib.routes';
import { ProductFormComponent } from './pages/admin/product-form/product-form.component';
import { ProductTableComponent } from './pages/admin/product-table/product-table.component';
import { ProductDetailComponent } from './pages/public/product-detail/product-detail.component';
import { ProductsListComponent } from './pages/public/products-list/products-list.component';
import { InputPhotoModule } from '@cardapio-online/input-photo'

@NgModule({
  imports: [CommonModule, RouterModule.forChild(produtosRoutes)],
  declarations: [
    ProductsListComponent,
    ProductDetailComponent,
    ProductFormComponent,
    ProductTableComponent,
  ],
})
export class ProdutosModule {}
