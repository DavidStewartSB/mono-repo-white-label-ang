//cardapio-online\libs\core\shell\src\lib\layout\admin\shell-admin-toolbar\shell-admin-toolbar.component.ts
import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { ThemeApplierService } from '../../../theme/theme-applier.service';
interface AdminToolbarChip {
  label: string;
  value: string;
}
@Component({
  selector: 'lib-shell-admin-toolbar',
  templateUrl: './shell-admin-toolbar.component.html',
  styleUrl: './shell-admin-toolbar.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShellAdminToolbarComponent {
 private readonly themeApplierService = inject(ThemeApplierService);

  @Input() chips: AdminToolbarChip[] = [
    { label: 'Ambiente', value: 'Produção' },
    { label: 'Tenant', value: 'Demo Company' },
    { label: 'Plano', value: 'Enterprise' },
  ];

  protected toggleTheme(): void {
    this.themeApplierService.toggle();
  }
}
