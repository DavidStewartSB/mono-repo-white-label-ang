import { Component } from '@angular/core';
import { TooltipPosition } from 'libs/components/tooltips/src/lib/utils/tooltip-position.type';

@Component({
  selector: 'lib-agendamento-home',
  templateUrl: './agendamento-home.component.html',
  styleUrl: './agendamento-home.component.scss',
})
export class AgendamentoHomeComponent {
   title = 'Tooltip Demo';

  isTooltipDisabled = false;
  showDelay = 200;
  hideDelay = 120;
  tooltipPosition: TooltipPosition = 'top';

  tooltipMessage = 'Clique para salvar este produto no cardápio.';
  tooltipCustomClass = ['tooltip-brand'];
}
