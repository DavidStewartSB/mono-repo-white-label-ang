import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { RouterModule } from '@angular/router';
import { produtosRoutes } from './lib.routes';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ProductsListComponent } from './pages/products-list/products-list.component';

import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);
@NgModule({
  imports: [CommonModule, RouterModule.forChild(produtosRoutes)],
  declarations: [
    ProductsListComponent,
    ProductDetailComponent
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' }],
})
export class ProdutosModule {}
