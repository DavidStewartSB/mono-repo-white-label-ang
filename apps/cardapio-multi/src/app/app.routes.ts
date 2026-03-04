import { Route } from '@angular/router';
import { ShellLayoutComponent } from '@cardapio-online/shell';
import { TenantAuthGuard } from 'libs/core/auth/src/lib/tenant/guards/tenant-auth.guard';

export const appRoutes: Route[] =  [
 {
    path: 'login',
    loadChildren: () =>
      import('@cardapio-online/login').then((m) => m.LoginModule),
  },
  {
    path: '',
    component: ShellLayoutComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'produtos/public/list' },
      {
        path: 'produtos',
        loadChildren: () =>
          import('@cardapio-online/produtos').then((m) => m.ProdutosModule),
      },
    ],
  },
];
