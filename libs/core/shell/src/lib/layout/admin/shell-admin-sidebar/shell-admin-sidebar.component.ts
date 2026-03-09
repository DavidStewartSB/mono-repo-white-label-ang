import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AdminNavItem } from '../../../models/admin-nav-item.model';
import { ONBOARDING_RESTART_EVENT } from '@cardapio-online/onboarding'
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
    protected restartTutorial(): void {
    window.dispatchEvent(new CustomEvent(ONBOARDING_RESTART_EVENT));
  }
}
