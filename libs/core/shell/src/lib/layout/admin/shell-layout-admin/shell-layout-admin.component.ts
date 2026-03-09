import { Component, Input } from '@angular/core';
import { AdminNavItem } from '../../../models/admin-nav-item.model';

@Component({
  selector: 'lib-shell-layout-admin',
  templateUrl: './shell-layout-admin.component.html',
  styleUrl: './shell-layout-admin.component.scss',
})
export class ShellLayoutAdminComponent {
  @Input({ required: true }) navItems: AdminNavItem[] = [];
  @Input() brandTitle = 'Produto Hub';
  @Input() brandSubtitle = 'Painel administrativo';
}
