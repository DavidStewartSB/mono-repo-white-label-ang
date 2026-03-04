// libs/core/shell/src/lib/shell.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellLayoutComponent } from './layout/public/shell-layout/shell-layout.component';
import { RouterModule } from '@angular/router';
import { ShellHeaderComponent } from './layout/public/shell-header/shell-header.component';
import { ShellFooterComponent } from './layout/public/shell-footer/shell-footer.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [
    ShellLayoutComponent,
    ShellHeaderComponent,
    ShellFooterComponent,
  ],
  exports: [ShellLayoutComponent, ShellHeaderComponent, ShellFooterComponent],
})
export class ShellModule {}
