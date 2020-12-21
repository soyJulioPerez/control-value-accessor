import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-example02',
  templateUrl: './example02.component.html',
  styles: []
})
export class Example02Component implements OnInit {
  miForm: FormGroup;

  get name() {
    return this.miForm.get('name');
  }

  get category() {
    return this.miForm.get('category');
  }

  get quantity() {
    return this.miForm.get('quantity');
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.miForm = this.fb.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
      quantity: [3, [Validators.min(1), Validators.max(10)]]
    });
  }

  initForm() {
    this.miForm.setValue({ name: '', category: '', quantity: 0});
    this.miForm.markAsPristine();
    this.miForm.markAsUntouched();
  }

  public disableAll() {
    Object.keys(this.miForm.controls).forEach(
      key => this.miForm.get(key).disable()
    );
  }

  public enableAll() {
    Object.keys(this.miForm.controls).forEach(
      key => this.miForm.get(key).enable()
    );
  }

  public save() {
    console.log(this.miForm);
    Object.keys(this.miForm.controls).forEach(
      key => this.miForm.get(key).markAsDirty()
    );
  }
}
