import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import { IInputSelect } from '../utils/input-select.interface';
type CheckboxMode = 'single' | 'list';
type CheckboxLayout = 'column' | 'inline';
@Component({
  selector: 'lib-input-checkbox',
  templateUrl: './input-checkbox.component.html',
  styleUrl: './input-checkbox.component.scss',
})
export class InputCheckboxComponent {
   @Input() id = '';
  @Input() legend = '';
  @Input() description = '';
  @Input() disabled = false;

  @Input() mode: CheckboxMode = 'single';
  @Input() layout: CheckboxLayout = 'column';

  @Input() control?: AbstractControl | null;

  @Input() valueOptions: IInputSelect[] = [];
  @Input() selectedValues: Array<string | number> = [];

  @Output() selectedValuesChange = new EventEmitter<Array<string | number>>();

  get formControl(): FormControl<boolean> | null {
    return this.control instanceof FormControl ? (this.control as FormControl<boolean>) : null;
  }

  get isInline(): boolean {
    return this.layout === 'inline';
  }

  get isListMode(): boolean {
    return this.mode === 'list';
  }

  get isSingleMode(): boolean {
    return this.mode === 'single';
  }

  isChecked(value: string | number): boolean {
    return this.selectedValues.includes(value);
  }

  onSingleChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    const checked = target.checked;

    if (this.formControl) {
      this.formControl.setValue(checked);
      this.formControl.markAsDirty();
      this.formControl.markAsTouched();
    }
  }

  onListChange(value: string | number, checked: boolean): void {
    const currentValues = [...this.selectedValues];

    const nextValues = checked
      ? Array.from(new Set([...currentValues, value]))
      : currentValues.filter((item) => item !== value);

    this.selectedValues = nextValues;
    this.selectedValuesChange.emit(nextValues);
  }

  trackByValue(_: number, item: IInputSelect): string | number {
    return item.value;
  }
}
