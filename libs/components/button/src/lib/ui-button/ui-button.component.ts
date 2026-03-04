// libs/components/button/src/lib/ui-button/ui-button.component.ts
import { Component, HostBinding, Inject, Input } from '@angular/core';
import { APP_CONFIG, AppConfig } from '@cardapio-online/config';
import { ButtonType, ButtonVariant, ColorsBtn, PaletteTone } from './button.types';
import { resolveButtonTokens } from './button.palette';

@Component({
  selector: 'ui-button',
  templateUrl: './ui-button.component.html',
  styleUrls: ['./ui-button.component.scss'],
})
export class UiButtonComponent {
 @Input() variant: ButtonVariant = 'primary';
  @Input() type: ButtonType = 'button';
  @Input() disabled = false;

  /** Cor do botão (default: brandPrimary) */
  @Input() color: ColorsBtn = 'primary';

  /** Tom da paleta (usado quando color != 'primary') */
  @Input() tone: PaletteTone = 500;

  /** Tamanho opcional */
  @Input() size: 'sm' | 'md' | 'lg' = 'md';

  constructor(@Inject(APP_CONFIG) public readonly cfg: AppConfig) {}

  // ---- Brand token (se color = primary)
  @HostBinding('style.--btn-brand')
  get btnBrand(): string {
    return this.cfg.brandPrimary;
  }

  // ---- Size tokens (simples e útil)
  @HostBinding('style.--btn-h')
  get btnHeight(): string {
    return this.size === 'sm' ? '38px' : this.size === 'lg' ? '48px' : '44px';
  }

  @HostBinding('style.--btn-px')
  get btnPadX(): string {
    return this.size === 'sm' ? '12px' : this.size === 'lg' ? '16px' : '14px';
  }

  // ---- Resolved tokens
  private get tokens() {
    return resolveButtonTokens({
      variant: this.variant,
      color: this.color,
      tone: this.tone,
    });
  }

  @HostBinding('style.--btn-bg') get bg() { return this.tokens.bg; }
  @HostBinding('style.--btn-fg') get fg() { return this.tokens.fg; }
  @HostBinding('style.--btn-bd') get bd() { return this.tokens.bd; }

  @HostBinding('style.--btn-bg-hover') get bgHover() { return this.tokens.bgHover; }
  @HostBinding('style.--btn-fg-hover') get fgHover() { return this.tokens.fgHover; }
  @HostBinding('style.--btn-bd-hover') get bdHover() { return this.tokens.bdHover; }
}