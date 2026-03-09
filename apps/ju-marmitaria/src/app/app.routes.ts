// apps/ju-marmitaria/src/app/app.routes.ts
import { Route } from '@angular/router';
import { ShellLayoutAdminComponent, ShellLayoutComponent } from '@cardapio-online/shell';


export const appRoutes: Route[] = [
  {
    path: 'login',
    loadChildren: () =>
      import('@cardapio-online/login').then((m) => m.LoginModule),
  },
{
  path: 'admin',
  component: ShellLayoutAdminComponent,
  children: [
    { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
    {
      path: 'agendamento',
      loadChildren: () =>
        import('@cardapio-online/agendamento').then((m) => m.AgendamentoModule),
    },
    {
      path: 'dashboard',
      loadChildren: () =>
        import('@cardapio-online/dashboard').then((m) => m.DashboardModule),
    },
    {
  path: 'produtos',
  loadChildren: () =>
    import('@cardapio-online/products-admin').then((m) => m.ProductsAdminModule),
},
  ],
},
  {
    path: '',
    component: ShellLayoutComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'cardapio' },
      {
        path: '',
        loadChildren: () =>
          import('@cardapio-online/produtos').then((m) => m.ProdutosModule),
      },
      {
        path: 'agendamento',
        loadChildren: () =>
          import('@cardapio-online/agendamento').then((m) => m.AgendamentoModule),
      },
    ],
  },
];