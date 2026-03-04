import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { AppConfig, APP_CONFIG} from '@cardapio-online/config';

@Component({
  selector: 'lib-shell-header',
  templateUrl: './shell-header.component.html',
  styleUrl: './shell-header.component.scss',
})
export class  ShellHeaderComponent {
  private clickCount = 0;
  private timer: ReturnType<typeof setTimeout> | null = null;

  constructor(
    @Inject(APP_CONFIG) public readonly cfg: AppConfig,
    private readonly router: Router
  ) {}

  onBrandClick(ev: MouseEvent) {
    ev.preventDefault();

    this.clickCount += 1;

    if (this.timer) clearTimeout(this.timer);

    this.timer = setTimeout(() => {
      this.clickCount = 0;
      this.timer = null;
      this.router.navigateByUrl('/');
    }, 350);

    if (this.clickCount >= 3) {
      if (this.timer) clearTimeout(this.timer);
      this.clickCount = 0;
      this.timer = null;
      this.router.navigateByUrl('/login');
    }
  }
}