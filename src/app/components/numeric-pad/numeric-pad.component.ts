import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SudokuStore } from '@stores/sudoku.store';

@Component({
  selector: 'app-numeric-pad',
  standalone: true,
  imports: [],
  templateUrl: './numeric-pad.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [SudokuStore],
})
export class NumericPadComponent {
  readonly store = inject(SudokuStore);

  readonly sudoku = this.store.state.asReadonly();

  public nums:number[] = [];

  constructor() {
    for(let n = 1; n <= 9; n++) {
      this.nums.push(n);
    }
  }

  onClick(n:number) {
    console.log('click num', n);
    this.store.set('selectedNumber', n);
  }
}
