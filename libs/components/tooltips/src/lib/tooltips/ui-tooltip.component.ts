import { Component, HostBinding, Input } from '@angular/core';
import { TooltipPosition } from '../utils/tooltip-position.type';

@Component({
  selector: 'lib-ui-tooltip',
  templateUrl: './ui-tooltip.component.html',
  styleUrl: './ui-tooltip.component.scss',
})
export class UiTooltipComponent {
   @Input() message = '';
  @Input() position: TooltipPosition = 'top';
  @Input() tooltipClass: any;

  @HostBinding('class')
  get hostClasses(): string {
    return `ui-tooltip-host ui-tooltip-host--${this.position}`;
  }
}
