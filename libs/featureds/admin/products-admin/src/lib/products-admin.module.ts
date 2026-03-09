import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { productsAdminRoutes } from './lib.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(productsAdminRoutes)],
})
export class ProductsAdminModule {}
