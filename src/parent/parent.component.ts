import { Component } from '@angular/core';
import { Child } from '../child/child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [Child],
  template: `
    <h1>Hello from {{ name }}!</h1>
    <app-child [parentSays]="'complete your chores!'" (childSays)="childSays = $event"></app-child>
    <p> Child Says: {{childSays}} </p>
  `,
})
export class Parent {
  name = 'Parent';
  childSays: string = 'nothing';
}
