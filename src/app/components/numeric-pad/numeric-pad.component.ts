import { ChangeDetectionStrategy, Component } from '@angular/core';
import { KeyComponent } from './key.component';

@Component({
  selector: 'app-numeric-pad',
  standalone: true,
  imports: [KeyComponent],
  templateUrl: './numeric-pad.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NumericPadComponent {
  public nums: number[] = [];

  constructor() {
    for (let n = 1; n <= 9; n++) {
      this.nums.push(n);
    }
  }
}
