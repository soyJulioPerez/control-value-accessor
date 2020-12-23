import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { Example03Component } from './example03.component';
import { FormInputComponent } from './form-input/form-input.component';
import { FormFieldErrorComponent } from './form-field-error/form-field-error.component';
import { FormInputPasswordComponent } from './form-input-password/form-input-password.component';

const routes: Routes = [
  { path: '', component: Example03Component }
];

@NgModule({
  declarations: [Example03Component, FormInputComponent, FormFieldErrorComponent, FormInputPasswordComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class Example03Module { }
