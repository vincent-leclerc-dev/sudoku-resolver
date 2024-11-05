import { Component } from '@angular/core';

import { randomColor } from '../utils/random-color';

@Component({
  selector: 'app-base',
  standalone: true,
  template: ``,
})
export class BaseComponent {
  get color() {
    return randomColor();
  }
}
