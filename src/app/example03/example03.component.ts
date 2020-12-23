import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-example03',
  templateUrl: './example03.component.html',
  styles: []
})
export class Example03Component implements OnInit {
  miForm: FormGroup;

  get password() {
    return this.miForm.get('password');
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.miForm = this.fb.group({
      name: ['Julio', [Validators.required]],
      email: ['juliolpj@hotmail.com', [Validators.required, Validators.email]],
      password: ['123456', [Validators.required]]
    });
  }

  save() {
    console.log('Form', this.miForm);
    console.log('Value', this.miForm.value);
  }

}
