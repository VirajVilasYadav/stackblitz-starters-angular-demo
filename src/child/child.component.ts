import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  template: `
    <h1>Hello from {{ name }}!</h1>
    <p> Parent says: {{parentSays}} </p>
    <button (click)="sendMessageToParent()"> Okay </button>
  `,
})
export class Child {
  name = 'Child';
  @Input() parentSays: string = 'nothing';
  @Output() childSays: EventEmitter<string> = new EventEmitter();

  sendMessageToParent() {
    this.childSays.emit('Okay, will do.');
  }
}
