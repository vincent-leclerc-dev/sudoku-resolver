import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GridComponent } from "@components/grid/grid.component";
import { AdminComponent } from "@pages/admin/admin.component";
import { NumericPadComponent } from "../../components/numeric-pad/numeric-pad.component";

@Component({
  selector: 'app-sudoku',
  standalone: true,
  imports: [AdminComponent, GridComponent, NumericPadComponent],
  templateUrl: './sudoku.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SudokuComponent {

}
