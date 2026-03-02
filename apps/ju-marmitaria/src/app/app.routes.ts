// apps/ju-marmitaria/src/app/app.routes.ts
import { Route } from '@angular/router';
import { ShellLayoutComponent } from '@cardapio-online/shell';


export const appRoutes: Route[] = [
  {
    path: 'login',
    loadChildren: () =>
      import('@cardapio-online/login').then((m) => m.LoginModule),
  },
  {
    path: '',
    component: ShellLayoutComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'cardapio' },
      {
        path: 'cardapio',
        loadChildren: () =>
          import('@cardapio-online/produtos').then((m) => m.ProdutosModule),
      },
    ],
  },
];