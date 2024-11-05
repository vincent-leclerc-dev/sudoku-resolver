import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { BaseComponent } from '@components/base.component';
import { ICell } from '@models/cell.interface';
import { SudokuStore } from '@stores/sudoku.store';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [],
  templateUrl: './grid.component.html',
  providers: [SudokuStore],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GridComponent extends BaseComponent {
  public storeService = inject(StoreService);

  public GRID_SIZE = 9;
  public CELL_SIZE = 8;

  public rows: ICell[][] = [];

  constructor() {
    super();

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
}
