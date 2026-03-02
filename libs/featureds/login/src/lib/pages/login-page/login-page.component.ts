import { Component, Inject } from '@angular/core';
import { AppConfig, APP_CONFIG} from "@cardapio-online/config"
import { AuthService } from "@cardapio-online/auth"

@Component({
  selector: 'lib-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent {
  constructor(
    @Inject(APP_CONFIG) public readonly cfg: AppConfig,
    private readonly auth: AuthService
  ) {}

  loginFake() {
    this.auth.setToken(`${this.cfg.environmentName}-token`);
  }

  logout() {
    this.auth.logout();
  }
}
