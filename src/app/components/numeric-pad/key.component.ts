import { ChangeDetectionStrategy, Component, ElementRef, inject, Input } from '@angular/core';
import { BaseComponent } from '@components/base.component';
import { SudokuState } from '@models/state.interface';
import { StoreService } from '@services/store.service';
import { fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-key',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    [{{ selectedNumber }}]
    <button
      class="w-8 h-8 m-1  border {{
        selectedNumber === key ? 'bg-lime-300 border-lime-400' : 'bg-neutral-200'
      }} border-neutral-400 hover:bg-lime-300 hover:border-lime-400 rounded font-bold">
      {{ key }}
    </button>
  `,
})
export class KeyComponent extends BaseComponent {
  @Input({ required: true }) key: number = 0;

  public store = inject(StoreService<SudokuState>);
  public host = inject(ElementRef);

  public selectedNumber = this.store.select('selectedNumber')();

  constructor() {
    super();

    fromEvent(this.host.nativeElement, 'click')
      .pipe(
        map((v) => v as PointerEvent),
        map((v) => v.target as HTMLButtonElement),
        map((v) => v.textContent),
      )
      .subscribe((v) => {
        if (v) {
          const target = this.store.select('target')();
          const grid = this.store.select('grid')();
          console.log('-- target', target);
          console.log('-- grid', grid[0][0]);
          console.log('-- grid', grid[0][1]);
          this.store.set('-- selectedNumber', +v);
          const newGrid = grid;
          newGrid[target.row][target.col].value = +v;
          this.store.setState(newGrid);
        }
      });
  }
}
