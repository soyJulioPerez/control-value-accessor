import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { Example01Component } from './example01.component';
import { CarOneComponent } from './car-one/car-one.component';
const routes: Routes = [
  { path: '', component: Example01Component }
];

@NgModule({
  declarations: [Example01Component, CarOneComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class Example01Module { }
