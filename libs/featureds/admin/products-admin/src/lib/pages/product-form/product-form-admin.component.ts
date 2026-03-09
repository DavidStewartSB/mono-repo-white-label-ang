//cardapio-online\libs\featureds\admin\products-admin\src\lib\pages\product-form\product-form-admin.component.ts
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'lib-product-form-admin',
  templateUrl: './product-form-admin.component.html',
  styleUrl: './product-form-admin.component.scss',
   changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductFormAdminComponent {
   private readonly route = inject(ActivatedRoute);

  protected readonly productId =
    this.route.snapshot.paramMap.get('id') ?? null;

  protected readonly modo =
    this.route.snapshot.queryParamMap.get('modo') ?? 'cadastro';

  protected get titulo(): string {
    if (this.modo === 'visualizacao') {
      return 'Visualização de produto';
    }

    if (this.productId) {
      return 'Edição de produto';
    }

    return 'Cadastro de produto';
  }
}
