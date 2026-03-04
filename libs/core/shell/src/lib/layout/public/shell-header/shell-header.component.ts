//cardapio-online\libs\core\shell\src\lib\layout\public\shell-header\shell-header.component.ts
import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { AppConfig, APP_CONFIG} from '@cardapio-online/config';
import { Observable } from 'rxjs';
import { ThemeApplierService } from '../../../theme/theme-applier.service';
import  { DrawerService } from "@cardapio-online/drawer"

@Component({
  selector: 'lib-shell-header',
  templateUrl: './shell-header.component.html',
  styleUrl: './shell-header.component.scss',
})
export class  ShellHeaderComponent {
  private clickCount = 0;
  private timer: ReturnType<typeof setTimeout> | null = null;
  // count$: Observable<number> = this.cart.count$;

  constructor(
    @Inject(APP_CONFIG) public readonly cfg: AppConfig,
    private readonly router: Router,
        private readonly theme: ThemeApplierService,
        @Inject(DrawerService) private readonly drawer: DrawerService,
    // private readonly cart: CartFacadeService
  ) {}

  onBrandClickToLogin(ev: MouseEvent) {
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

  toggleTheme() {
    this.theme.toggle();
  }

  openCart() {
    // MVP: navegar para rota /checkout ou abrir drawer depois
    // this.router.navigate(['/checkout']);
  }

  openConfig() {
this.drawer.toggle('config');
  }
}