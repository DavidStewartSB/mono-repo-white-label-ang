import { InputsModule } from './../../../../../components/inputs/src/lib/inputs.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { productsAdminRoutes } from './lib.routes';
import { ProductListAdminComponent } from './pages/product-list/product-list-admin.component';
import { ProductFormAdminComponent } from './pages/product-form/product-form-admin.component';
import { TablesModule } from '@cardapio-online/tables';
import { ReactiveFormsModule } from '@angular/forms';
import { InputPhotoModule } from '@cardapio-online/input-photo'

@NgModule({
  imports: [CommonModule, RouterModule.forChild(productsAdminRoutes), TablesModule, InputsModule, ReactiveFormsModule, InputPhotoModule],
  declarations: [ProductListAdminComponent, ProductFormAdminComponent],
  exports: [ProductListAdminComponent, ProductFormAdminComponent],
})
export class ProductsAdminModule {}
