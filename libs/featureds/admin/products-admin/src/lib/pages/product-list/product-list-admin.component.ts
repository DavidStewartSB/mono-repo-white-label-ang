//cardapio-online\libs\featureds\admin\products-admin\src\lib\pages\product-list\product-list-admin.component.ts
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ProductsAdminService } from '../../data-access/products-admin.service';
import { UiTableAction, UiTableCellTemplateContext, UiTableCellTemplates, UiTableColumn } from '@cardapio-online/tables'
import { Router } from '@angular/router';

@Component({
  selector: 'lib-product-list-admin',
  templateUrl: './product-list-admin.component.html',
  styleUrl: './product-list-admin.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListAdminComponent implements OnInit {
  private readonly productsAdminService = inject(ProductsAdminService);
  private readonly cdr = inject(ChangeDetectorRef);
  private readonly router = inject(Router);

  @ViewChild('nameCellTemplate', { static: true })
  private readonly nameCellTemplate!: TemplateRef<UiTableCellTemplateContext>;

  protected items: Record<string, unknown>[] = [];
  protected allItems: Record<string, unknown>[] = [];

  protected page = 1;
  protected limit = 10;
  protected total = 0;
  protected isLoading = true;

  protected readonly displayedColumns: string[] = [
    'name',
    'category',
    'isActive',
    'price',
    'tags',
    'createdAt',
    'actions',
  ];

  protected readonly columns: UiTableColumn[] = [
    {
      key: 'name',
      label: 'Produto',
      type: 'text',
      width: '280px',
      emptyText: 'Sem nome',
    },
    {
      key: 'category',
      label: 'Categoria',
      type: 'text',
      width: '180px',
      emptyText: 'Sem categoria',
    },
    {
      key: 'isActive',
      label: 'Status',
      type: 'status',
      width: '140px',
    },
    {
      key: 'price',
      label: 'Preço',
      type: 'price',
      width: '140px',
    },
    {
      key: 'tags',
      label: 'Tags',
      type: 'tags',
      width: '220px',
      emptyText: 'Sem tags',
    },
    {
      key: 'createdAt',
      label: 'Criado em',
      type: 'date',
      width: '150px',
    },
    {
      key: 'actions',
      label: 'Ações',
      type: 'actions',
      width: '96px',
    },
  ];

  protected readonly tableActions: UiTableAction[] = [
    {
      key: 'view',
      label: 'Visualizar',
      icon: 'bx bx-show',
    },
    {
      key: 'edit',
      label: 'Editar',
      icon: 'bx bx-edit-alt',
    },
    {
      key: 'delete',
      label: 'Excluir',
      icon: 'bx bx-trash',
      variant: 'danger',
    },
  ];

  protected customCellTemplates: UiTableCellTemplates = {};

  ngOnInit(): void {
    this.customCellTemplates = {
      name: this.nameCellTemplate,
    };

    this.loadProducts();
  }

  protected onPerPageChange(limit: number): void {
    this.limit = limit;
    this.page = 1;
    this.applyPagination();
  }

  protected onPageChange(page: number): void {
    this.page = page;
    this.applyPagination();
  }

  protected onTableAction(event: {
    action: UiTableAction;
    row: Record<string, unknown>;
  }): void {
    const productId = String(event.row['id'] ?? '');

    if (!productId) {
      return;
    }

    if (event.action.key === 'view') {
      void this.router.navigate(['/admin/produtos/editar', productId], {
        queryParams: { modo: 'visualizacao' },
      });
      return;
    }

    if (event.action.key === 'edit') {
      void this.router.navigate(['/admin/produtos/editar', productId], {
        queryParams: { modo: 'edicao' },
      });
      return;
    }

    if (event.action.key === 'delete') {
      const productName = String(event.row['name'] ?? 'este produto');
      const confirmed = window.confirm(
        `Deseja realmente excluir ${productName}?`
      );

      if (!confirmed) {
        return;
      }

      this.allItems = this.allItems.filter((item) => item['id'] !== productId);
      this.total = this.allItems.length;

      const totalPages = Math.max(1, Math.ceil(this.total / this.limit));
      if (this.page > totalPages) {
        this.page = totalPages;
      }

      this.applyPagination();
    }
  }

  private loadProducts(): void {
    this.isLoading = true;
    this.cdr.markForCheck();

    this.productsAdminService.getProducts().subscribe({
      next: (response) => {
        this.allItems = response.items.map((item) => ({
          ...item,
          category: item.category?.name || 'Sem categoria',
        }));

        this.total = this.allItems.length;
        this.limit = response.limit;
        this.page = 1;

        this.applyPagination(false);
      },
      error: (error) => {
        console.error('Erro ao carregar produtos mockados:', error);
        this.allItems = [];
        this.items = [];
        this.total = 0;
        this.isLoading = false;
        this.cdr.markForCheck();
      },
    });
  }

  private applyPagination(emitLoading = true): void {
    if (emitLoading) {
      this.isLoading = true;
      this.cdr.markForCheck();
    }

    const start = (this.page - 1) * this.limit;
    const end = start + this.limit;

    this.items = this.allItems.slice(start, end);
    this.total = this.allItems.length;
    this.isLoading = false;

    this.cdr.markForCheck();
  }
}