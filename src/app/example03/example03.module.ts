import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { Example03Component } from './example03.component';
import { FormInputComponent } from './form-input/form-input.component';

const routes: Routes = [
  { path: '', component: Example03Component }
];

@NgModule({
  declarations: [Example03Component, FormInputComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class Example03Module { }
