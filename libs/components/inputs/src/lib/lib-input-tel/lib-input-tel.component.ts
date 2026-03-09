import { Component, DoCheck } from '@angular/core';
import { InputGLobal } from '../utils/input-global';

@Component({
  selector: 'lib-input-tel',
  templateUrl: './lib-input-tel.component.html',
  styleUrl: './lib-input-tel.component.scss',
})
export class InputTelComponent extends InputGLobal implements DoCheck {
  protected displayValue = '';

  ngDoCheck(): void {
    const rawValue = this.extractDigits(this.control?.value);

    if (rawValue !== this.displayDigits) {
      this.displayValue = this.applyPhoneMask(rawValue);
    }
  }

protected onInput(event: Event): void {
  const input = event.target as HTMLInputElement;
  const digits = this.extractDigits(input.value).slice(0, 11);
  const maskedValue = this.applyPhoneMask(digits);

  this.displayValue = maskedValue;
  input.value = maskedValue;

  if (this.control) {
    this.control.setValue(digits, { emitEvent: false });
    this.control.markAsDirty();
    this.control.updateValueAndValidity({ emitEvent: false });
    this.checkValidation();
  }

  this.setValue(digits);
}

  protected onBlurField(): void {
    if (this.control) {
      this.control.markAsTouched();
      this.checkValidation();
    }

    this.onBlur();
  }

  private get displayDigits(): string {
    return this.extractDigits(this.displayValue);
  }

  private extractDigits(value: unknown): string {
    return String(value ?? '').replace(/\D/g, '');
  }

private applyPhoneMask(value: string): string {
  const digits = this.extractDigits(value).slice(0, 11);

  if (!digits.length) {
    return '';
  }

  if (digits.length <= 2) {
    return `(${digits}`;
  }

  if (digits.length <= 6) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  }

  if (digits.length <= 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6, 10)}`;
  }

  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7, 11)}`;
}
}
