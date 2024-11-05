import { Routes } from '@angular/router';
import { AdminComponent } from '@pages/admin/admin.component';
import { SudokuComponent } from '@pages/sudoku/sudoku.component';

export const routes: Routes = [
  { path: '', component: SudokuComponent },
  { path: 'admin', component: AdminComponent },
];
