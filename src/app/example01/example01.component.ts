import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-example01',
  templateUrl: './example01.component.html',
  styles: []
})
export class Example01Component implements OnInit {
  miForm: FormGroup;

  get owner() {
    return this.miForm.get('owner');
  }

  get car() {
    return this.miForm.get('car');
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.miForm = this.fb.group({
      owner: ['', Validators.required],
      car: ['Ford', Validators.required]
    });
  }

  public disableAll() {
    Object.keys(this.miForm.controls).forEach(
      key => this.miForm.get(key).disable()
    );
  }

  public save() {
    console.log(this.miForm);
    Object.keys(this.miForm.controls).forEach(
      key => this.miForm.get(key).markAsDirty()
    );
  }
}
