import { Component, Inject } from '@angular/core';
import { AppConfig, APP_CONFIG} from '@cardapio-online/config';
@Component({
  selector: 'lib-shell-footer',
  templateUrl: './shell-footer.component.html',
  styleUrl: './shell-footer.component.scss',
})
export class ShellFooterComponent {
  constructor(@Inject(APP_CONFIG) public readonly cfg: AppConfig) {}

  get year(): number {
    return new Date().getFullYear();
  }
}
