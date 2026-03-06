import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiTablesComponent } from './ui-tables/ui-tables.component';

@NgModule({
  imports: [CommonModule],
  declarations: [UiTablesComponent],
  exports: [UiTablesComponent],
})
export class TablesModule {}
