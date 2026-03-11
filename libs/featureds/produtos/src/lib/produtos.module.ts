import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { RouterModule } from '@angular/router';
import { produtosRoutes } from './lib.routes';
import { ProductFormComponent } from './pages/admin/product-form/product-form.component';
import { ProductTableComponent } from './pages/admin/product-table/product-table.component';
import { ProductDetailComponent } from './pages/public/product-detail/product-detail.component';
import { ProductsListComponent } from './pages/public/products-list/products-list.component';
import { InputPhotoModule } from '@cardapio-online/input-photo'
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);
@NgModule({
  imports: [CommonModule, RouterModule.forChild(produtosRoutes)],
  declarations: [
    ProductsListComponent,
    ProductDetailComponent,
    ProductFormComponent,
    ProductTableComponent,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' }],
})
export class ProdutosModule {}
