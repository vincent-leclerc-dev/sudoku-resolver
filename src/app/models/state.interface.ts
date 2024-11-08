import { ICell } from './cell.interface';

export type Target = {
  row: number;
  col: number;
};

export type SudokuState = {
  selectedNumber: number;
  target: Target;
  grid: ICell[][];
};
