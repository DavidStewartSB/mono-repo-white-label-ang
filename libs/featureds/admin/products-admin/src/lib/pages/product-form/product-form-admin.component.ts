import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
  inject,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize } from 'rxjs';
import { MediaUploadService } from '@cardapio-online/media';
import { BreadcrumbItem } from '@cardapio-online/breadcrumb';
import { IInputSelect } from 'libs/components/inputs/src/lib/utils/input-select.interface';
import {
  ProductsAdminService,
  SaveProductPayload,
} from '../../data-access/products-admin.service';

@Component({
  selector: 'lib-product-form-admin',
  templateUrl: './product-form-admin.component.html',
  styleUrl: './product-form-admin.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductFormAdminComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly cdr = inject(ChangeDetectorRef);
  private readonly productsAdminService = inject(ProductsAdminService);
  private readonly mediaUploadService = inject(MediaUploadService);

  protected readonly productId = this.route.snapshot.paramMap.get('id') ?? null;
  protected readonly modo =
    this.route.snapshot.queryParamMap.get('modo') ?? 'cadastro';

  protected imagePreviewUrl: string | null = null;
  protected imageErrorMessage: string | null = null;
  protected isImageUploading = false;

  protected isInitialLoading = true;
  protected initialLoadResolved = false;
  protected initialLoadError: string | null = null;

  protected isSubmitting = false;

  protected readonly skeletonGroups = Array.from({ length: 4 }, (_, index) => index);

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

  ngOnInit(): void {
    if (!this.productId) {
      this.isInitialLoading = false;
      this.initialLoadResolved = true;
      this.initialLoadError = null;
      this.cdr.markForCheck();
      return;
    }

    this.loadProductById();
  }

  get breadcrumbItems(): BreadcrumbItem[] {
    const items: BreadcrumbItem[] = [
      {
        label: 'Produtos',
        route: ['/admin/produtos/lista'],
      },
    ];

    if (this.productId) {
      items.push({
        label: this.modo === 'visualizacao' ? 'Visualização de produto' : 'Editar produto',
        isActive: true,
      });

      return items;
    }

    items.push({
      label: 'Novo produto',
      isActive: true,
    });

    return items;
  }

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

  protected get isReadOnlyMode(): boolean {
    return this.modo === 'visualizacao';
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

  protected onRetryLoad(): void {
    if (!this.productId) {
      return;
    }

    this.loadProductById();
  }

  protected salvar(): void {
    if (this.isReadOnlyMode || this.isSubmitting) {
      return;
    }

    this.form.markAllAsTouched();

    if (this.form.invalid) {
      return;
    }

    const payload: SaveProductPayload = {
      ...this.form.getRawValue(),
      selectedCategories: this.selectedCategories,
      selectedTags: this.selectedTags,
      selectedExtras: this.selectedExtras,
    };

    this.isSubmitting = true;
    this.cdr.markForCheck();

    const request$ = this.productId
      ? this.productsAdminService.updateProduct(this.productId, payload)
      : this.productsAdminService.createProduct(payload);

    request$
      .pipe(
        finalize(() => {
          this.isSubmitting = false;
          this.cdr.markForCheck();
        })
      )
      .subscribe({
        next: (response) => {
          console.log('Produto salvo com sucesso:', response);

          if (!this.productId && response.id) {
            void this.router.navigate(['/admin/produtos/editar', response.id], {
              queryParams: { modo: 'edicao' },
            });
            return;
          }

          void this.router.navigate(['/admin/produtos/lista']);
        },
        error: (error) => {
          console.error('Erro ao salvar produto:', error);
        },
      });
  }

  protected onProductImageSelected(file: File): void {
    if (!this.productId) {
      this.imageErrorMessage =
        'Salve o produto primeiro para enviar a imagem.';
      this.cdr.markForCheck();
      return;
    }

    this.imageErrorMessage = null;
    this.isImageUploading = true;
    this.cdr.markForCheck();

    this.mediaUploadService
      .uploadImage({
        endpoint: `/products/${this.productId}/image`,
        file,
      })
      .pipe(
        finalize(() => {
          this.isImageUploading = false;
          this.cdr.markForCheck();
        })
      )
      .subscribe({
        next: (response) => {
          this.imagePreviewUrl = response.image.url;
          this.imageErrorMessage = null;
        },
        error: () => {
          this.imageErrorMessage = 'Não foi possível enviar a imagem.';
        },
      });
  }

  protected onProductImageRemoved(): void {
    this.imagePreviewUrl = null;
    this.imageErrorMessage = null;
    this.cdr.markForCheck();
  }

  protected onProductImageInvalid(message: string): void {
    this.imageErrorMessage = message;
    this.cdr.markForCheck();
  }

  private loadProductById(): void {
    if (!this.productId) {
      return;
    }

    this.isInitialLoading = true;
    this.initialLoadResolved = false;
    this.initialLoadError = null;
    this.cdr.markForCheck();

    this.productsAdminService.getProductById(this.productId).subscribe({
      next: (product) => {
        this.form.patchValue({
          name: product.name ?? '',
          password: '123456',
          email: 'produto@ju-marmitaria.local',
          phone: '13999999999',
          active: Boolean(product.isActive),
          featured: Array.isArray(product.tags)
            ? product.tags.includes('destaque')
            : false,
          allowNotes: true,
        });

        this.selectedCategories = product.category?.name
          ? [String(product.category.name).toLowerCase()]
          : ['marmita'];

        this.selectedTags = Array.isArray(product.tags)
          ? product.tags
          : [];

        this.selectedExtras = ['talher'];

        this.imagePreviewUrl = String(product.image ?? 'assets/brand/empty.jpg');

        if (this.isReadOnlyMode) {
          this.form.disable({ emitEvent: false });
        }

        this.isInitialLoading = false;
        this.initialLoadResolved = true;
        this.initialLoadError = null;
        this.cdr.markForCheck();
      },
      error: (error) => {
        console.error('Erro ao carregar produto por id:', error);
        this.isInitialLoading = false;
        this.initialLoadResolved = true;
        this.initialLoadError = 'Não foi possível carregar os dados do produto.';
        this.cdr.markForCheck();
      },
    });
  }
}