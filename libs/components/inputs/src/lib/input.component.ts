//cardapio-online\libs\components\inputs\src\lib\input.component.ts
import { Component, DoCheck } from '@angular/core';
import { InputGLobal } from './utils/input-global';

@Component({
  selector: 'lib-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent extends InputGLobal implements DoCheck {
  ngDoCheck(): void {
    this.checkValidation();
  }
}