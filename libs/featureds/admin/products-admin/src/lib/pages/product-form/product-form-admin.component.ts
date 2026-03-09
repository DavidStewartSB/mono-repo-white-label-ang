import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lib-product-form-admin',
  templateUrl: './product-form-admin.component.html',
  styleUrl: './product-form-admin.component.scss',
   changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductFormAdminComponent {}
