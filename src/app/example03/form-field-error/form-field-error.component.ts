import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-field-error',
  templateUrl: './form-field-error.component.html',
  styles: []
})
export class FormFieldErrorComponent {
  @Input() formField: FormControl;
  @Input() label: string;

  constructor() { }


}
