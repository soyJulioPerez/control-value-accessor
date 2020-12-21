import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { Example02Component } from './example02.component';
import { CounterComponent } from './counter/counter.component';

const routes: Routes = [
  { path: '', component: Example02Component }
];

@NgModule({
  declarations: [Example02Component, CounterComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class Example02Module { }
