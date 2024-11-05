import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { GridComponent } from "@components/grid/grid.component";
import { NumericPadComponent } from "@components/numeric-pad/numeric-pad.component";
import { SudokuStore } from '@stores/sudoku.store';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, GridComponent, NumericPadComponent],
  templateUrl: './app.component.html',
  providers: [SudokuStore],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'sudoku';
}
