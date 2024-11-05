import { Injectable } from '@angular/core';
import { IGrid } from '@models/grid.interface';
import { StoreService } from './store.service';

type SudokuState = {
  selectedNumber: number;
  grid: IGrid;
};

@Injectable()
export class SudokuStore extends StoreService<SudokuState> {
  constructor() {
    super();
  }
}
