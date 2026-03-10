import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiBreadcrumbComponent } from './ui-breadcrumb/ui-breadcrumb.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [UiBreadcrumbComponent],
  exports: [UiBreadcrumbComponent],
})
export class BreadcrumbModule {}
