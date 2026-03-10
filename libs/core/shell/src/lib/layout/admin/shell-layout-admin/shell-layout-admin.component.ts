//cardapio-online\libs\core\shell\src\lib\layout\admin\shell-layout-admin\shell-layout-admin.component.ts
import { ChangeDetectionStrategy, Component, HostListener, inject, Input, OnInit, signal } from '@angular/core';
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
    protected readonly isProfilePanelOpen = signal(false);
  protected readonly isDarkTheme = signal(false);

  protected readonly currentUser = {
    name: 'David Stewart',
    role: 'Administrador',
    photoUrl: 'assets/brand/empty.jpg',
  };

  @Input() navItems: AdminNavItem[] | null = null;
  @Input() brandTitle = 'Ju Marmitaria';
  @Input() brandSubtitle = 'Painel administrativo';

  protected readonly isSidebarOpen = signal(false);

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
    {
      label: 'Produtos',
      route: '/admin/produtos',
      badge: '03',
    },
  ];

  protected get resolvedNavItems(): AdminNavItem[] {
    return this.navItems?.length ? this.navItems : this.defaultNavItems;
  }

 ngOnInit(): void {
    this.themeApplierService.apply();
    this.isDarkTheme.set(document.documentElement.getAttribute('data-theme') === 'dark');
  }

 protected toggleSidebar(): void {
    this.isSidebarOpen.update((value) => !value);
  }

  protected closeSidebar(): void {
    this.isSidebarOpen.set(false);
  }

  protected toggleProfilePanel(): void {
    this.isProfilePanelOpen.update((value) => !value);
  }

  protected closeProfilePanel(): void {
    this.isProfilePanelOpen.set(false);
  }

  protected goToProfile(): void {
    this.closeProfilePanel();
    window.location.href = '/admin/profile';
  }

 protected toggleTheme(): void {
    this.themeApplierService.toggle();
    this.isDarkTheme.update((value) => !value);
  }

  protected logout(): void {
    this.closeProfilePanel();
    window.location.href = '/login';
  }
  @HostListener('window:resize')
  protected onWindowResize(): void {
    if (window.innerWidth > 1100 && this.isSidebarOpen()) {
      this.closeSidebar();
    }
  }
}