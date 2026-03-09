import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiLoaderComponent } from './loader/ui-loader.component';

@NgModule({
  imports: [CommonModule],
  declarations: [UiLoaderComponent],
  exports: [UiLoaderComponent],
})
export class LoadersModule {}
