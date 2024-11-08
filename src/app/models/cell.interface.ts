export interface ICell {
  row: number;
  col: number;
  value: number;
  candidates: number[];
}

export type ICellPosition = Extract<ICell, { row: number; col: number }>;
