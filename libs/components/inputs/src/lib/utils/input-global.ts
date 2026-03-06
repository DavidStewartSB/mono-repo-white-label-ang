import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import { MENSAGENS_VALIDACAO } from './mensagens.errors';
import { TipoInput } from './input.types';
import { IInputSelect } from './input-select.interface';


@Directive()
export abstract class InputGLobal implements OnChanges {
  @Input() type: TipoInput = 'text';
  @Input() placeholder!: string;
  @Input() id!: string;
  @Input() legend!: string;
  @Input({ required: false }) mask!: string;
  @Input() control?: AbstractControl;
  @Input() errorMessagers: string[] = [];
  @Input() size: number | string = 100;
  @Input() useFormControl = false;   
  @Input() valueOptions: IInputSelect[] = [];

  
     onChange: (value: any) => void = () => { 
      console.log('onChange')
     };
    setValue(value: any) {
    this.onChange(value);
    this.onTouched();
  }

  onTouched: () => void = () => { 
    console.log('touched')
  };

  private disabledValue = false;
  @Input()
  set disabled(value: boolean) {
    this.disabledValue = value;
    this.syncDisabled();
  }

get formControl() {
  return this.control as FormControl | undefined;
}
  // eslint-disable-next-line @typescript-eslint/adjacent-overload-signatures
  get disabled() { return this.disabledValue; }
  get isRequired(): boolean {
    if (!this.formControl?.validator) return false;
    const validator = this.formControl.validator({} as any);
    return !!validator?.['required'];
  }
  ngOnChanges(_: SimpleChanges) {
    this.syncDisabled();
      if (this.type === 'dropdown' && !this.valueOptions) {
      throw new Error(
        `O input do tipo 'dropdown' exige o atributo 'valueOptions'.`
      );
    }
  }
  getErrorMessage(errorKey: string): string {
    return MENSAGENS_VALIDACAO[errorKey] || '';
  }
  getFirstErrorMessage(): string {
  if (!this.formControl?.errors) return '';
  const errorKey = Object.keys(this.formControl.errors)[0];
  return this.getErrorMessage(errorKey);
}

    checkValidation() {
    if (!this.control) {
      return;
    }

    const errors = this.control.errors;

    if (!errors) {
      this.errorMessagers = [];
      return;
    }

    const errorKeys = Object.keys(errors);
    this.errorMessagers = errorKeys.map(key => this.getErrorMessage(key));
  }

    private syncDisabled() {
    if (!this.control) return;
    if (this.disabledValue && !this.control.disabled) {
      this.control.disable({ emitEvent: false });
    } else if (!this.disabledValue && this.control.disabled) {
      this.control.enable({ emitEvent: false });
    }
  }

    onBlur(): void {
    this.onTouched();
  }
}
