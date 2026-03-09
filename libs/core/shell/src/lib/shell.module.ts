// libs/core/shell/src/lib/shell.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellLayoutComponent } from './layout/public/shell-layout/shell-layout.component';
import { RouterModule } from '@angular/router';
import { ShellHeaderComponent } from './layout/public/shell-header/shell-header.component';
import { ShellFooterComponent } from './layout/public/shell-footer/shell-footer.component';
import { DrawerModule } from '@cardapio-online/drawer';
import { ShellLayoutAdminComponent } from './layout/admin/shell-layout-admin/shell-layout-admin.component';
import { ShellAdminSidebarComponent } from './layout/admin/shell-admin-sidebar/shell-admin-sidebar.component';
import { ShellAdminToolbarComponent } from './layout/admin/shell-admin-toolbar/shell-admin-toolbar.component';

@NgModule({
  imports: [CommonModule, RouterModule, DrawerModule],
  declarations: [
    ShellLayoutComponent,
    ShellHeaderComponent,
    ShellFooterComponent,

    ShellLayoutAdminComponent,
    ShellAdminSidebarComponent,
    ShellAdminToolbarComponent,
  ],
  exports: [
    ShellLayoutComponent,
    ShellHeaderComponent,
    ShellFooterComponent,
    ShellLayoutAdminComponent,
    ShellAdminSidebarComponent,
    ShellAdminToolbarComponent,
  ],
})
export class ShellModule {}
