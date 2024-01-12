import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { Parent } from './parent/parent.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Parent],
  template: `
    <h1>Hello from {{ name }}!</h1>
    <app-parent></app-parent>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
