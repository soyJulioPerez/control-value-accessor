import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-example03',
  templateUrl: './example03.component.html',
  styles: []
})
export class Example03Component implements OnInit {
  miForm: FormGroup;

  get name() {
    return this.miForm.get('name');
  }

  get email() {
    return this.miForm.get('email');
  }

  get password() {
    return this.miForm.get('password');
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.miForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  save() {
    console.log('Form', this.miForm);
    console.log('Value', this.miForm.value);
  }

}
