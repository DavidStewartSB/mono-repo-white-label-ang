import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lib-shell-admin-toolbar',
  templateUrl: './shell-admin-toolbar.component.html',
  styleUrl: './shell-admin-toolbar.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShellAdminToolbarComponent {}
