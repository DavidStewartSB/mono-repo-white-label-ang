import { Component, Input } from '@angular/core';
import { AdminNavItem } from '../../../models/admin-nav-item.model';

@Component({
  selector: 'lib-shell-admin-sidebar',
  templateUrl: './shell-admin-sidebar.component.html',
  styleUrl: './shell-admin-sidebar.component.scss',
})
export class ShellAdminSidebarComponent {
   @Input({ required: true }) navItems: AdminNavItem[] = [];
  @Input() brandTitle = 'Produto Hub';
  @Input() brandSubtitle = 'Painel administrativo';
}
