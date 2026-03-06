import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiTooltipComponent } from './tooltips/ui-tooltip.component';
import { TooltipDirective } from './tooltips/tooltip.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [UiTooltipComponent, TooltipDirective],
  exports: [UiTooltipComponent, TooltipDirective],
})
export class TooltipModule {}
