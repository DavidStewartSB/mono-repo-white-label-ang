//cardapio-online\libs\featureds\admin\products-admin\src\lib\pages\product-form\product-form-admin.component.ts
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IInputSelect } from 'libs/components/inputs/src/lib/utils/input-select.interface';

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

  protected readonly form = new FormGroup({
    name: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(3)],
    }),
    password: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(6)],
    }),
    email: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
    phone: new FormControl<string>('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.minLength(11),
        Validators.maxLength(11),
      ],
    }),
    active: new FormControl<boolean>(true, {
      nonNullable: true,
    }),
    featured: new FormControl<boolean>(false, {
      nonNullable: true,
    }),
    allowNotes: new FormControl<boolean>(false, {
      nonNullable: true,
    }),
  });

  protected selectedCategories: Array<string | number> = ['marmita', 'bebida'];
  protected selectedTags: Array<string | number> = ['promo'];
  protected selectedExtras: Array<string | number> = ['talher'];

  protected readonly categoryOptions: IInputSelect[] = [
    {
      value: 'marmita',
      label: 'Marmitas',
      description: 'Produtos principais do cardápio.',
    },
    {
      value: 'bebida',
      label: 'Bebidas',
      description: 'Sucos, refrigerantes e águas.',
    },
    {
      value: 'sobremesa',
      label: 'Sobremesas',
      description: 'Doces e adicionais açucarados.',
    },
    {
      value: 'fit',
      label: 'Linha fit',
      description: 'Itens com foco em alimentação leve.',
      disabled: true,
    },
  ];

  protected readonly tagOptions: IInputSelect[] = [
    { value: 'novo', label: 'Novo' },
    { value: 'promo', label: 'Promoção' },
    { value: 'destaque', label: 'Destaque' },
    { value: 'esgotando', label: 'Esgotando' },
  ];

  protected readonly extraOptions: IInputSelect[] = [
    {
      value: 'talher',
      label: 'Enviar talher',
      description: 'Inclui talher descartável no pedido.',
    },
    {
      value: 'guardanapo',
      label: 'Enviar guardanapo',
      description: 'Inclui guardanapo extra.',
    },
    {
      value: 'molho',
      label: 'Adicionar molho',
      description: 'Molho especial separado.',
    },
  ];

  protected get titulo(): string {
    if (this.modo === 'visualizacao') {
      return 'Visualização de produto';
    }

    if (this.productId) {
      return 'Edição de produto';
    }

    return 'Cadastro de produto';
  }

  protected get nameControl(): FormControl<string> {
    return this.form.controls.name;
  }

  protected get passwordControl(): FormControl<string> {
    return this.form.controls.password;
  }

  protected get emailControl(): FormControl<string> {
    return this.form.controls.email;
  }

  protected get phoneControl(): FormControl<string> {
    return this.form.controls.phone;
  }

  protected get activeControl(): FormControl<boolean> {
    return this.form.controls.active;
  }

  protected get featuredControl(): FormControl<boolean> {
    return this.form.controls.featured;
  }

  protected get allowNotesControl(): FormControl<boolean> {
    return this.form.controls.allowNotes;
  }

  protected salvar(): void {
    this.form.markAllAsTouched();

    if (this.form.invalid) {
      return;
    }

    console.log('Payload mock do produto:', {
      ...this.form.getRawValue(),
      selectedCategories: this.selectedCategories,
      selectedTags: this.selectedTags,
      selectedExtras: this.selectedExtras,
    });
  }
}
