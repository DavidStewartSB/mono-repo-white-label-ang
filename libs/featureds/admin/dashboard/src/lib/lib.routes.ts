import { Route } from '@angular/router';
import { DashboardAdminComponent } from './pages/dashboard/dashboard-admin.component';

export const dashboardRoutes: Route[] = [
  {
    path: '',
    component: DashboardAdminComponent,
  },
];
