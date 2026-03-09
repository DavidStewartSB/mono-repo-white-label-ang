// libs/core/shell/src/lib/theme/theme-applier.service.ts
import { Inject, Injectable } from '@angular/core';
import { APP_CONFIG, AppConfig } from '@cardapio-online/config';

type Theme = 'dark' | 'light';

@Injectable({ providedIn: 'root' })
export class ThemeApplierService {
  private readonly key = 'co_theme_v1';

  constructor(@Inject(APP_CONFIG) private readonly cfg: AppConfig) {}

  apply(root: HTMLElement = document.documentElement): void {
    root.style.setProperty('--brand-primary', this.cfg.brandPrimary);
    root.style.setProperty('--shell-brand', this.cfg.brandPrimary);

    const saved = (localStorage.getItem(this.key) as Theme | null) ?? 'dark';
    this.set(saved, root);
  }

  toggle(root: HTMLElement = document.documentElement): Theme {
    const current =
      (root.getAttribute('data-theme') as Theme | null) ?? 'dark';

    const next: Theme = current === 'dark' ? 'light' : 'dark';
    this.set(next, root);
    return next;
  }

  set(theme: Theme, root: HTMLElement = document.documentElement): void {
    root.setAttribute('data-theme', theme);
    localStorage.setItem(this.key, theme);
  }

  getCurrent(root: HTMLElement = document.documentElement): Theme {
    return (root.getAttribute('data-theme') as Theme | null) ?? 'dark';
  }
}