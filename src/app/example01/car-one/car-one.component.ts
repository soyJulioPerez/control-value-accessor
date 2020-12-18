import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-car-one',
  templateUrl: './car-one.component.html',
  styles: [],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CarOneComponent),
      multi: true
    }
  ]
})
export class CarOneComponent implements OnInit, ControlValueAccessor {
  value: string;
  onChange: () => void;
  onTouched: () => void;
  isDisabled: boolean;

  constructor() { }

  ngOnInit() {
  }

  writeValue(value: string): void {
    this.value = value ? value : '';
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }
}
