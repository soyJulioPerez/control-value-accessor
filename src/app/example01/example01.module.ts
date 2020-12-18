import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Example01Component } from './example01.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: Example01Component }
];

@NgModule({
  declarations: [Example01Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Example01Module { }
