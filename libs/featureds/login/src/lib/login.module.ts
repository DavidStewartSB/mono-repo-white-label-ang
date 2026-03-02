import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { loginRoutes } from './lib.routes';
import { LoginPageComponent } from './pages/login-page/login-page.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(loginRoutes)],
  declarations: [LoginPageComponent],
})
export class LoginModule {}
