//cardapio-online\libs\components\inputs\src\lib\lib-input-password\input-password.component.ts
import { Component } from '@angular/core';
import { InputGLobal } from '../utils/input-global';

@Component({
  selector: 'lib-input-password',
  templateUrl: './input-password.component.html',
  styleUrl: './input-password.component.scss',
})
export class InputPasswordComponent extends InputGLobal {
  protected hidePassword = true;

  protected get inputType(): 'password' | 'text' {
    return this.hidePassword ? 'password' : 'text';
  }

  protected togglePasswordVisibility(): void {
    if (this.disabled) {
      return;
    }

    this.hidePassword = !this.hidePassword;
  }
}
