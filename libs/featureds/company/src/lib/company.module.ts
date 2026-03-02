import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { companyRoutes } from './lib.routes';
import { CompanyDetailComponent } from './pages/admin/company-detail/company-detail.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(companyRoutes)],
  declarations: [CompanyDetailComponent],
})
export class CompanyModule {}
