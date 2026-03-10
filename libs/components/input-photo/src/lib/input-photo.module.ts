import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiInputPhotoComponent } from './ui-input-photo/ui-input-photo.component';

@NgModule({
  imports: [CommonModule],
  declarations: [UiInputPhotoComponent],
  exports: [UiInputPhotoComponent],
})
export class InputPhotoModule {}
