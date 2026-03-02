import { Route } from '@angular/router';
export const appRoutes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'agendamento' },
  {
    path: 'agendamento',
    loadChildren: () =>
      import('@cardapio-online/agendamento').then((m) => m.AgendamentoModule),
  },
]
