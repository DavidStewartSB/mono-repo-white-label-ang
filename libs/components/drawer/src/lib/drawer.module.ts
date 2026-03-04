import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiDrawerComponent } from './ui-drawer/ui-drawer.component';

@NgModule({
  imports: [CommonModule],
  declarations: [UiDrawerComponent],
  exports: [UiDrawerComponent],
})
export class DrawerModule {}
