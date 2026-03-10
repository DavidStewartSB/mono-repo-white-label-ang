//cardapio-online\libs\core\shell\src\lib\layout\admin\shell-admin-sidebar\shell-admin-sidebar.component.ts
import { ChangeDetectionStrategy, Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { AdminNavItem } from '../../../models/admin-nav-item.model';
import { ONBOARDING_RESTART_EVENT } from '@cardapio-online/onboarding'
import { APP_CONFIG, AppConfig } from '@cardapio-online/config';
@Component({
  selector: 'lib-shell-admin-sidebar',
  templateUrl: './shell-admin-sidebar.component.html',
  styleUrl: './shell-admin-sidebar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShellAdminSidebarComponent {
 @Input({ required: true }) navItems: AdminNavItem[] = [];
  @Input() brandTitle = 'Produto Hub';
  @Input() brandSubtitle = 'Painel administrativo';
  @Input() brandLogo = 'Painel administrativo';
  @Input() isMobileOpen = false;

  @Output() sidebarNavigate = new EventEmitter<void>();

  protected restartTutorial(): void {
    window.dispatchEvent(new CustomEvent(ONBOARDING_RESTART_EVENT));
  }

  protected handleNavigate(): void {
    this.sidebarNavigate.emit();
  }

  constructor(
    @Inject(APP_CONFIG) public readonly cfg: AppConfig,
  ) {}
}
