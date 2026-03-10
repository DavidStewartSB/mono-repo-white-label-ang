import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BreadcrumbItem } from '../models/breadcrumb-item.interface';

@Component({
  selector: 'lib-ui-breadcrumb',
  templateUrl: './ui-breadcrumb.component.html',
  styleUrl: './ui-breadcrumb.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UiBreadcrumbComponent {
   @Input() items: BreadcrumbItem[] = [];
}
