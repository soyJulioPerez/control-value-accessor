import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { Example03Component } from './example03.component';

const routes: Routes = [
  { path: '', component: Example03Component }
];

@NgModule({
  declarations: [Example03Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Example03Module { }
