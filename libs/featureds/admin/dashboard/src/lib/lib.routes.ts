//cardapio-online\libs\featureds\admin\dashboard\src\lib\lib.routes.ts
import { Route } from '@angular/router';
import { DashboardAdminComponent } from './pages/dashboard/dashboard-admin.component';

export const dashboardRoutes: Route[] = [
  {
    path: '',
    component: DashboardAdminComponent,
  },
];
