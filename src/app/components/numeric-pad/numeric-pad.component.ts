import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseComponent } from '@components/base.component';
import { KeyComponent } from './key.component';

@Component({
  selector: 'app-numeric-pad',
  standalone: true,
  imports: [KeyComponent],
  templateUrl: './numeric-pad.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NumericPadComponent extends BaseComponent {
  public nums: number[] = [];

  constructor() {
    super();
    for (let n = 1; n <= 9; n++) {
      this.nums.push(n);
    }
  }
}
