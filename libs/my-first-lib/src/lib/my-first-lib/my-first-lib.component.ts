import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'test-storybook-my-first-lib',
  templateUrl: './my-first-lib.component.html',
  styleUrls: ['./my-first-lib.component.scss'],
})
export class MyFirstLibComponent {
  title;
  subtitle;
  content;

  constructor() {}

  public displayMessage() {
    this.content = '😄';
  }
}
