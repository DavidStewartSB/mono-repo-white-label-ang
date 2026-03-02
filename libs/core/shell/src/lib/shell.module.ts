// libs/core/shell/src/lib/shell.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellLayoutComponent } from './layout/shell-layout/shell-layout.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [ShellLayoutComponent],
  exports: [ShellLayoutComponent],
})
export class ShellModule {}
