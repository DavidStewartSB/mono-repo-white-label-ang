//cardapio-online\libs\components\table\src\lib\ui-tables\ui-tables.component.ts
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, HostListener, inject, Input, Output } from '@angular/core';
import { UiTableAction, UiTableCellTemplateContext, UiTableColumn } from '../models/table.interface';
import { UiTableCellTemplates } from '../models/table.type';
import { BreadcrumbItem } from 'libs/components/breadcrumb/src/lib/models/breadcrumb-item.interface';

@Component({
  selector: 'lib-ui-tables',
  templateUrl: './ui-tables.component.html',
  styleUrl: './ui-tables.component.scss',
   changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiTablesComponent {
private readonly elementRef = inject(ElementRef<HTMLElement>);

  @Input() receivedData: Record<string, unknown>[] = [];
  @Input() columns: UiTableColumn[] = [];
  @Input() displayedColumns: string[] = [];
  @Input() tabelaVazia = 'Nenhum registro encontrado.';
  @Input() loading = false;

  @Input() addActionLabel: string | null = null;
  @Input() addActionRoute: string | any[] | null = null;

  @Input() headerTitle = '';
  @Input() headerSubtitle = '';

  @Input() perPageLabel = 'Itens por página';
  @Input() perPageOptions: number[] = [10, 20, 30, 50];
  @Input() perCatOptions: string[] = ['Todos', 'Bebidas', 'Produto', '30', '50'];
  @Input() selectedPerPage: number | null = null;

  @Input() currentPage = 1;
  @Input() totalItems = 0;
  @Input() paginationLabel = 'registros';

  @Input() actions: UiTableAction[] = [];
  @Input() customCellTemplates: UiTableCellTemplates = {};

  @Input() breadcrumbs: BreadcrumbItem[] = [];

  @Output() perPageChange = new EventEmitter<number>();
  @Output() pageChange = new EventEmitter<number>();
  @Output() actionClick = new EventEmitter<{
    action: UiTableAction;
    row: Record<string, unknown>;
  }>();

  protected openedActionRowIndex: number | null = null;

  protected get resolvedColumns(): UiTableColumn[] {
    if (!this.displayedColumns.length) {
      return this.columns;
    }

    return this.displayedColumns
      .map((columnKey) => this.columns.find((column) => column.key === columnKey))
      .filter((column): column is UiTableColumn => !!column);
  }

  protected get totalPages(): number {
    const perPage = this.selectedPerPage || 1;
    return Math.max(1, Math.ceil(this.totalItems / perPage));
  }

  protected get startItem(): number {
    if (!this.totalItems) {
      return 0;
    }

    return (this.currentPage - 1) * (this.selectedPerPage || 0) + 1;
  }

  protected get endItem(): number {
    if (!this.totalItems) {
      return 0;
    }

    return Math.min(
      this.currentPage * (this.selectedPerPage || 0),
      this.totalItems
    );
  }

  protected get visiblePages(): number[] {
    const totalPages = this.totalPages;
    const current = this.currentPage;

    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, index) => index + 1);
    }

    const start = Math.max(1, current - 1);
    const end = Math.min(totalPages, start + 2);
    const normalizedStart = Math.max(1, end - 2);

    return Array.from(
      { length: end - normalizedStart + 1 },
      (_, index) => normalizedStart + index
    );
  }

  @HostListener('document:click', ['$event'])
  protected onDocumentClick(event: MouseEvent): void {
    const target = event.target as Node | null;

    if (!target) {
      return;
    }

    if (!this.elementRef.nativeElement.contains(target)) {
      this.closeActions();
    }
  }

  protected trackByColumn(index: number, column: UiTableColumn): string {
    return column.key;
  }

  protected trackByRow(index: number): number {
    return index;
  }

  protected trackByAction(index: number, action: UiTableAction): string {
    return action.key;
  }

  protected getCellValue(
    row: Record<string, unknown>,
    column: UiTableColumn
  ): unknown {
    return row[column.key];
  }

  protected getTags(
    row: Record<string, unknown>,
    column: UiTableColumn
  ): string[] {
    const value = this.getCellValue(row, column);
    return Array.isArray(value) ? value.map(String) : [];
  }

  protected formatPrice(value: unknown): string {
    const numericValue = Number(value ?? 0);

    return numericValue.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  }

  protected formatDate(value: unknown): string {
    if (!value) {
      return '-';
    }

    return new Date(String(value)).toLocaleDateString('pt-BR');
  }

  protected isActiveStatus(value: unknown): boolean {
    return Boolean(value);
  }

  protected resolveText(
    row: Record<string, unknown>,
    column: UiTableColumn
  ): string {
    const value = this.getCellValue(row, column);

    if (value === null || value === undefined || value === '') {
      return column.emptyText ?? '-';
    }

    return String(value);
  }

  protected getCustomTemplate(columnKey: string) {
    return this.customCellTemplates[columnKey] ?? null;
  }

  protected buildTemplateContext(
    row: Record<string, unknown>,
    column: UiTableColumn,
    rowIndex: number
  ): UiTableCellTemplateContext {
    const value = this.getCellValue(row, column);

    return {
      $implicit: row,
      row,
      column,
      value,
      rowIndex,
    };
  }

  protected onPerPageChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const value = Number(target.value);

    if (!Number.isNaN(value)) {
      this.perPageChange.emit(value);
      this.closeActions();
    }
  }

  protected goToPage(page: number): void {
    if (page < 1 || page > this.totalPages || page === this.currentPage) {
      return;
    }

    this.pageChange.emit(page);
    this.closeActions();
  }

  protected toggleActions(index: number, event?: Event): void {
    event?.stopPropagation();

    this.openedActionRowIndex =
      this.openedActionRowIndex === index ? null : index;
  }

  protected closeActions(): void {
    this.openedActionRowIndex = null;
  }

  protected onActionClick(
    action: UiTableAction,
    row: Record<string, unknown>,
    event?: Event
  ): void {
    event?.stopPropagation();
    this.actionClick.emit({ action, row });
    this.closeActions();
  }
}
