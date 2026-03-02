import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { agendamentoRoutes } from './lib.routes';
import { AgendamentoHomeComponent } from './pages/agendamento-home/agendamento-home.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(agendamentoRoutes)],
  declarations: [AgendamentoHomeComponent],
  exports: [AgendamentoHomeComponent],
})
export class AgendamentoModule {}
