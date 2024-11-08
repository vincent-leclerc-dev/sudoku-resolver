import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ICell } from '@models/cell.interface';
import { SudokuState } from '@models/state.interface';
import { StoreService } from '@services/store.service';
import { CellComponent } from './cell.component';

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [CommonModule, CellComponent],
  templateUrl: './grid.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GridComponent {
  public store = inject(StoreService<SudokuState>);

  public GRID_SIZE = 9;
  public CELL_SIZE = 8;

  public rows: ICell[][] = [];

  constructor() {
    let i = 0;
    for (let l = 0; l < this.GRID_SIZE; l++) {
      const cols: ICell[] = [];
      for (let c = 0; c < this.GRID_SIZE; c++) {
        cols[c] = { row: l, col: c, value: i, candidates: [] };
        i++;
      }
      this.rows[l] = cols;
    }
    console.log(this.rows);
    this.store.set('grid', this.rows);
  }
}
