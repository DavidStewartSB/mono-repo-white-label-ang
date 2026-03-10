//cardapio-online\libs\core\shell\src\lib\layout\admin\shell-admin-toolbar\shell-admin-toolbar.component.ts
import { ChangeDetectionStrategy, Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { ThemeApplierService } from '../../../theme/theme-applier.service';
import { ActivatedRoute, Router } from '@angular/router';
interface AdminToolbarChip {
  label: string;
  value: string;
}
interface AdminToolbarUser {
  name: string;
  role: string;
  photoUrl: string;
}
@Component({
  selector: 'lib-shell-admin-toolbar',
  templateUrl: './shell-admin-toolbar.component.html',
  styleUrl: './shell-admin-toolbar.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShellAdminToolbarComponent {
 private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  @Input() chips: AdminToolbarChip[] = [
    { label: 'Ambiente', value: 'Produção' },
    { label: 'Tenant', value: 'Demo Company' },
    { label: 'Plano', value: 'Enterprise' },
  ];

  @Input() user: AdminToolbarUser = {
    name: 'David Stewart',
    role: 'Administrador',
    photoUrl: 'assets/brand/empty.jpg',
  };

  @Output() menuToggle = new EventEmitter<void>();
  @Output() profilePanelToggle = new EventEmitter<void>();

  protected searchTerm = '';

  protected toggleMenu(): void {
    this.menuToggle.emit();
  }

  protected openProfilePanel(): void {
    this.profilePanelToggle.emit();
  }

  protected handleSearchBlur(): void {
    const normalizedValue = this.searchTerm.trim();

    void this.router.navigate(['/admin/produtos/lista'], {
      relativeTo: this.route,
      queryParams: {
        paramsSearch: normalizedValue || null,
      },
      queryParamsHandling: 'merge',
    });
  }
}
