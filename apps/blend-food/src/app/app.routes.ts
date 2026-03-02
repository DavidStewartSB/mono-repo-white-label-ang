// apps/ju-marmitaria/src/app/app.routes.ts
import { Route } from '@angular/router';
import { ShellLayoutComponent } from '@cardapio-online/shell';
import { APP_CONFIG } from '@cardapio-online/config';

export const appRoutes: Route[] =  [
  {
    path: '',
    component: ShellLayoutComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'agendamento' },
      {
        path: 'agendamento',
        loadChildren: () =>
          import('@cardapio-online/agendamento').then((m) => m.AgendamentoModule),
      },
    ],
  },
]
