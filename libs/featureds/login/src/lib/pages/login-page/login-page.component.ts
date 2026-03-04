import { Component, Inject } from '@angular/core';
import { AppConfig, APP_CONFIG} from "@cardapio-online/config"
import { AuthService, TenantAuthService } from "@cardapio-online/auth"
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'lib-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent {
  showPassword = false;
  email = 'david.stewartsb@gmail.com';
  password = 'SenhaForte123!';

  constructor(
    @Inject(APP_CONFIG) public readonly cfg: AppConfig,
    private readonly auth: TenantAuthService,
    private readonly router: Router,
    private readonly fb: FormBuilder
  ) {}

    form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  async login() {
    await this.auth.login({ email: this.email, password: this.password });
    await this.router.navigateByUrl('/produtos/admin/table');
  }

  logout() {
    this.auth.logout();
  }
    togglePassword() {
    this.showPassword = !this.showPassword;
  }
    submit() {
    if (this.form.invalid) return;
    const { email, password } = this.form.value;
    // TODO: chamar AuthService
    alert('oi')
    console.log('LOGIN', { email, password });
  }

}
