// libs/core/shell/src/lib/theme/theme-applier.service.ts
import { Inject, Injectable } from '@angular/core';
import { APP_CONFIG, AppConfig } from '@cardapio-online/config';
type Theme = 'dark' | 'light';
@Injectable({ providedIn: 'root' })
export class ThemeApplierService {
  private readonly key = 'co_theme_v1';
  constructor(@Inject(APP_CONFIG) private readonly cfg: AppConfig) {}

  apply(root: HTMLElement = document.documentElement) {
    root.style.setProperty('--brand-primary', this.cfg.brandPrimary);
      const saved = (localStorage.getItem(this.key) as Theme | null) ?? 'dark';
    this.set(saved);
  }


  toggle(): Theme {
    const current = (document.documentElement.getAttribute('data-theme') as Theme | null) ?? 'dark';
    const next: Theme = current === 'dark' ? 'light' : 'dark';
    this.set(next);
    return next;
  }

  set(theme: Theme): void {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(this.key, theme);
  }

  getCurrent(): Theme {
    return (document.documentElement.getAttribute('data-theme') as Theme | null) ?? 'dark';
  }
}