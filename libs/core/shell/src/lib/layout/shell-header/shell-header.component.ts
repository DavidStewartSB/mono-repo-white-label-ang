import { Component, Inject } from '@angular/core';
import { AppConfig, APP_CONFIG} from '@cardapio-online/config';

@Component({
  selector: 'lib-shell-header',
  templateUrl: './shell-header.component.html',
  styleUrl: './shell-header.component.scss',
})
export class ShellHeaderComponent {
  constructor(@Inject(APP_CONFIG) public readonly cfg: AppConfig) {}
}
