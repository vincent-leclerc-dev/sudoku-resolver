import { ChangeDetectionStrategy, Component, inject, OnInit, Signal } from '@angular/core';
import { ICell } from '@models/cell.interface';
import { SudokuStore } from '@stores/sudoku.store';

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [],
  templateUrl: './grid.component.html',
  providers: [SudokuStore],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GridComponent implements OnInit{
  readonly store = inject(SudokuStore);

  readonly sudoku = this.store.state.asReadonly();

  selectedNumber: Signal<number> | undefined;
  public GRID_SIZE = 9;
  public CELL_SIZE = 8;

  public rows: ICell[][] = [];

  constructor() {
    /*
    let i = 0;
    for(let l = 0; l < this.GRID_SIZE; l++) {
      const cols: ICell[] = [];
      for(let c = 0; c < this.GRID_SIZE; c++) {
        cols[c] = {id: c, value: i, candidates: []};
        i++;
      }
      this.rows[l] = cols;
    }
      */
  }

  ngOnInit(): void {
    console.log('grid', this.store.select('selectedNumber'));
  }

}
