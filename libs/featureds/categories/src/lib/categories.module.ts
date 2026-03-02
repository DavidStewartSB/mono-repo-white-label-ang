import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { categoriesRoutes } from './lib.routes';
import { CategoryFormComponent } from './pages/admin/category-form/category-form.component';
import { CategoryListComponent } from './pages/admin/category-list/category-list.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(categoriesRoutes)],
  declarations: [CategoryFormComponent, CategoryListComponent],
})
export class CategoriesModule {}
