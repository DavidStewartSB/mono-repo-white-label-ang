//cardapio-online\libs\core\shell\src\lib\layout\admin\shell-layout-admin\shell-layout-admin.component.ts
import { ChangeDetectionStrategy, Component, inject, Input, OnInit } from '@angular/core';
import { AdminNavItem } from '../../../models/admin-nav-item.model';
import { ThemeApplierService } from '../../../theme/theme-applier.service';

@Component({
  selector: 'lib-shell-layout-admin',
  templateUrl: './shell-layout-admin.component.html',
  styleUrl: './shell-layout-admin.component.scss',
   changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShellLayoutAdminComponent implements OnInit {
  private readonly themeApplierService = inject(ThemeApplierService);

  @Input() navItems: AdminNavItem[] | null = null;
  @Input() brandTitle = 'Ju Marmitaria';
  @Input() brandSubtitle = 'Painel administrativo';

    protected readonly toolbarChips = [
    { label: 'Ambiente', value: 'Produção' },
    { label: 'Tenant', value: 'Demo Company' },
    { label: 'Plano', value: 'Enterprise' },
  ];
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

  ngOnInit(): void {
    this.themeApplierService.apply();
  }
}