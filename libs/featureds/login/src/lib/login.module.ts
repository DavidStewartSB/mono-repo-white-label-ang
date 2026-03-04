import { ButtonModule } from './../../../../components/button/src/lib/button.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { loginRoutes } from './lib.routes';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ShellModule } from "@cardapio-online/shell";
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(loginRoutes), ShellModule, ReactiveFormsModule, ButtonModule],
  declarations: [LoginPageComponent],
})
export class LoginModule {}
