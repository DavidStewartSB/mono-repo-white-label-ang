import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiFormsComponent } from './ui-forms/ui-forms.component';
import { UiFormsDynamicComponent } from './form-dynamic/ui-forms-dynamic.component';


@NgModule({
  imports: [CommonModule],
  declarations: [UiFormsComponent, UiFormsDynamicComponent],
  exports: [UiFormsComponent, UiFormsDynamicComponent],
})
export class FormsModule {}
