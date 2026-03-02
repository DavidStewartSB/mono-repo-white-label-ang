// libs/components/button/src/lib/ui-button/ui-button.component.ts
import { Component, HostBinding, Inject, Input } from '@angular/core';
import { APP_CONFIG, AppConfig } from '@cardapio-online/config';

@Component({
  selector: 'ui-button',
  templateUrl: './ui-button.component.html',
  styleUrls: ['./ui-button.component.scss'],
})
export class UiButtonComponent {
  @Input() variant: 'primary' | 'ghost' = 'primary';
  @Input() type: 'button' | 'submit' = 'button';
  @Input() disabled = false;

  constructor(@Inject(APP_CONFIG) public readonly cfg: AppConfig) {}

  @HostBinding('style.--btn-primary')
  get primaryColor(): string {
    return this.cfg.brandPrimary;
  }
}