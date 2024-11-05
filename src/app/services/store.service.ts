import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  #selectedNumberBs = new BehaviorSubject<number>(0);
  #selectedNumber = signal(0);

  selectedNumberBs$ = this.#selectedNumberBs.asObservable();
  selectedNumber = this.#selectedNumber.asReadonly();

  selectNumber(n: number) {
    this.#selectedNumberBs.next(n);
    this.#selectedNumber.update((currentValue) => n);
  }
}
