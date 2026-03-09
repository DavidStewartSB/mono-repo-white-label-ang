//cardapio-online\libs\core\shell\src\lib\layout\admin\shell-layout-admin\shell-layout-admin.component.ts
import { Component, Input } from '@angular/core';
import { AdminNavItem } from '../../../models/admin-nav-item.model';

@Component({
  selector: 'lib-shell-layout-admin',
  templateUrl: './shell-layout-admin.component.html',
  styleUrl: './shell-layout-admin.component.scss',
})
export class ShellLayoutAdminComponent {
@Input() navItems: AdminNavItem[] | null = null;
  @Input() brandTitle = 'Ju Marmitaria';
  @Input() brandSubtitle = 'Painel administrativo';

  protected readonly defaultNavItems: AdminNavItem[] = [
    {
      label: 'Dashboard',
      route: '/admin/dashboard',
      badge: '01',
    },
    {
      label: 'Agendamento',
      route: '/admin/agendamento',
      badge: '02',
    },
  ];

  protected get resolvedNavItems(): AdminNavItem[] {
    return this.navItems?.length ? this.navItems : this.defaultNavItems;
  }
}