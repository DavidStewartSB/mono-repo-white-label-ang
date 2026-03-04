// libs/core/shell/src/lib/theme/theme-applier.service.ts
import { Inject, Injectable } from '@angular/core';
import { APP_CONFIG, AppConfig } from '@cardapio-online/config';

@Injectable({ providedIn: 'root' })
export class ThemeApplierService {
  constructor(@Inject(APP_CONFIG) private readonly cfg: AppConfig) {}

  apply(root: HTMLElement = document.documentElement) {
    root.style.setProperty('--brand-primary', this.cfg.brandPrimary);
  }
}