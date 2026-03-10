//cardapio-online\libs\components\table\src\lib\tables.module.ts
import { BreadcrumbModule } from './../../../breadcrumb/src/lib/breadcrumb.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiTablesComponent } from './ui-tables/ui-tables.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, BreadcrumbModule, RouterModule],
  declarations: [UiTablesComponent],
  exports: [UiTablesComponent],
})
export class TablesModule {}
