import { Component, Input } from '@angular/core';

@Component({
  selector: 'test-storybook-my-second-lib',
  templateUrl: './my-second-lib.component.html',
  styleUrls: ['./my-second-lib.component.scss'],
})
export class MySecondLibComponent {
  @Input() public readonly todos: Array<string>;
}
