import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextoComponent } from './lib-input-texto/input-texto.component';
import { InputEmailComponent } from './lib-input-email/input-email.component';
import { InputPasswordComponent } from './lib-input-password/input-password.component';
import { InputContainerComponent } from './input-container/input-container.component';
import { InputCheckboxComponent } from './ui-input-checkbox/input-checkbox.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './input.component';
import { InputTelComponent } from './lib-input-tel/lib-input-tel.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  declarations: [
    InputComponent,
    InputTextoComponent,
    InputEmailComponent,
    InputPasswordComponent,
    InputContainerComponent,
    InputCheckboxComponent,
    InputTelComponent,
  ],
  exports: [
    InputTextoComponent,
    InputEmailComponent,
    InputPasswordComponent,
    InputContainerComponent,
    InputCheckboxComponent,
    InputComponent,
    InputTelComponent,
  ],
})
export class InputsModule {}
