//cardapio-online\libs\featureds\admin\products-admin\src\lib\pages\product-list\product-list-admin.component.ts
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { ProductsAdminService } from '../../data-access/products-admin.service';
import { ProductAdminItem } from '../../models/product-admin-item.type';
import { UiTableAction, UiTableColumn } from '@cardapio-online/tables'

@Component({
  selector: 'lib-product-list-admin',
  templateUrl: './product-list-admin.component.html',
  styleUrl: './product-list-admin.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListAdminComponent implements OnInit {
private readonly productsAdminService = inject(ProductsAdminService);
private readonly cdr = inject(ChangeDetectorRef);

protected items: Record<string, unknown>[] = [];
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
  'updatedAt',
  'actions',
];

protected readonly columns: UiTableColumn[] = [
  {
    key: 'name',
    label: 'Produto',
    type: 'text',
    width: '240px',
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
    key: 'updatedAt',
    label: 'Atualizado em',
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
  ngOnInit(): void {
    this.loadProducts();
  }

  protected trackById(index: number, item: ProductAdminItem): string {
    return item.id;
  }

  protected formatPrice(price: string): string {
    return Number(price).toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  }

  protected formatDate(date: string): string {
    return new Date(date).toLocaleDateString('pt-BR');
  }

private loadProducts(): void {
  this.isLoading = true;
  this.cdr.markForCheck();

  this.productsAdminService.getProducts().subscribe({
    next: (response) => {
    this.items = response.items.map((item) => ({
  ...item,
  category: item.category?.name || 'Sem categoria',
}));
      this.page = response.page;
      this.limit = response.limit;
      this.total = response.total;
      this.isLoading = false;
      this.cdr.markForCheck();
    },
    error: (error) => {
      console.error('Erro ao carregar produtos mockados:', error);
      this.items = [];
      this.total = 0;
      this.isLoading = false;
      this.cdr.markForCheck();
    },
  });
}

protected onPerPageChange(limit: number): void {
  this.limit = limit;
  this.page = 1;
  this.loadProducts();
}

protected onPageChange(page: number): void {
  this.page = page;
  this.cdr.markForCheck();
}

protected onTableAction(event: {
  action: UiTableAction;
  row: Record<string, unknown>;
}): void {
  console.log('Ação da tabela:', event);
}
}
