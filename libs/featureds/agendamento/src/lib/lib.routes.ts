import { Route } from '@angular/router';
import { AgendamentoHomeComponent } from './pages/agendamento-home/agendamento-home.component';

export const agendamentoRoutes: Route[] = [
  {
    path: '',
    component: AgendamentoHomeComponent,
  },
];
