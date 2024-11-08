import {
  ChangeDetectionStrategy,
  Component,
  effect,
  ElementRef,
  inject,
  Input,
} from '@angular/core';
import { BaseComponent } from '@components/base.component';
import { ICellPosition } from '@models/cell.interface';
import { SudokuState } from '@models/state.interface';
import { StoreService } from '@services/store.service';
import { fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-cell',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <input
      type="text"
      [value]="value"
      [attr.data-col]="col"
      [attr.data-row]="row"
      class="w-{{ CELL_SIZE }} h-{{ CELL_SIZE }} {{
        index % 3 === 2 ? 'border-r-4' : 'border-r'
      }} border-black text-center outline-none" />
  `,
})
export class CellComponent extends BaseComponent {
  @Input({ required: true }) index: number = 0;
  @Input({ required: true }) row: number = 0;
  @Input({ required: true }) col: number = 0;
  @Input({ required: true }) value: number = 0;

  public CELL_SIZE = 8;

  public store = inject(StoreService<SudokuState>);
  public host = inject(ElementRef);

  public target = this.store.select('target')();
  public selectedNumber = this.store.select('selectedNumber')();

  constructor() {
    super();
    effect(() => {
      console.log('effect target', this.target);
      console.log('effect selectedNumber', this.selectedNumber);
    });

    fromEvent(this.host.nativeElement, 'click')
      .pipe(
        map((v) => v as PointerEvent),
        map((v) => v.target as HTMLInputElement),
        map((v) => v.dataset as unknown as ICellPosition),
      )
      .subscribe((v) => {
        if (v) {
          this.store.set('target', { row: v.row, col: v.col });
        }
      });
  }
}
