import { ChangeDetectionStrategy, Component, ElementRef, inject, Input } from '@angular/core';
import { BaseComponent } from '@components/base.component';
import { fromEvent, map } from 'rxjs';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-key',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <button class="w-16 h-16 m-2 bg-stone-300 hover:bg-lime-400 rounded-lg">
      {{ key }}
    </button>
  `,
})
export class KeyComponent extends BaseComponent {
  @Input({ required: true }) key: number = 0;

  public storeService = inject(StoreService);
  public host = inject(ElementRef);

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
          this.storeService.selectNumber(+v);
        }
      });
  }
}
