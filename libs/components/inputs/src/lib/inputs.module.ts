import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './lib-input/input.component';
import { InputTextoComponent } from './lib-input-texto/input-texto.component';
import { InputEmailComponent } from './lib-input-email/input-email.component';
import { InputPasswordComponent } from './lib-input-password/input-password.component';
import { InputContainerComponent } from './input-container/input-container.component';
import { InputCheckboxComponent } from './ui-input-checkbox/input-checkbox.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [
    InputComponent,
    InputTextoComponent,
    InputEmailComponent,
    InputPasswordComponent,
    InputContainerComponent,
    InputCheckboxComponent,
  ],
  exports: [
    InputComponent,
    InputTextoComponent,
    InputEmailComponent,
    InputPasswordComponent,
    InputContainerComponent,
    InputCheckboxComponent,
  ],
})
export class InputsModule {}
