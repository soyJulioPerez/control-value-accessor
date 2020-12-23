import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-form-input-password',
  templateUrl: './form-input-password.component.html',
  styles: [],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormInputPasswordComponent),
      multi: true
    }
  ]
})
export class FormInputPasswordComponent implements ControlValueAccessor {
  @Input() parentForm: FormGroup;
  @Input() fieldName: string;
  @Input() label: string;

  value: string;
  onChange: (value: string) => {};
  onTouched: () => {};
  isDisabled: boolean;

  get formField(): FormControl {
    const pass = this.parentForm.get(this.fieldName) as FormControl;
    return this.parentForm.get(this.fieldName) as FormControl;
  }

  constructor() { }

  writeValue(value: string): void {
    this.value = value;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched =  fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

}
