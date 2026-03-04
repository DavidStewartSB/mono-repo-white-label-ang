import { Component, Inject } from '@angular/core';
import { AppConfig, APP_CONFIG} from "@cardapio-online/config"
import { AuthService, TenantAuthService } from "@cardapio-online/auth"
import { Router } from '@angular/router';

@Component({
  selector: 'lib-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent {
  email = 'david.stewartsb@gmail.com';
  password = 'SenhaForte123!';

  constructor(
    @Inject(APP_CONFIG) public readonly cfg: AppConfig,
    private readonly auth: TenantAuthService,
    private readonly router: Router
  ) {}

  async login() {
    await this.auth.login({ email: this.email, password: this.password });
    await this.router.navigateByUrl('/produtos/admin/table');
  }

  logout() {
    this.auth.logout();
  }
}
