import { TemplateRef } from "@angular/core";
import { UiTableCellTemplateContext } from "./table.interface";

export type UiTableColumnType =
  | 'text'
  | 'price'
  | 'date'
  | 'status'
  | 'tags'
  | 'actions';

  export type UiTableCellTemplates = Record<
  string,
  TemplateRef<UiTableCellTemplateContext>
>;