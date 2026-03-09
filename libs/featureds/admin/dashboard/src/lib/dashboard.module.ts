import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { dashboardRoutes } from './lib.routes';
import { DashboardAdminComponent } from './pages/dashboard/dashboard-admin.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(dashboardRoutes)],
  declarations: [DashboardAdminComponent],
  exports: [DashboardAdminComponent],
})
export class DashboardModule {}
