import { computed, Injectable, Signal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StoreService<T> {
  private _state = signal({} as T);
  public state = this._state.asReadonly();

  public set<K extends keyof T>(key: K, data: T[K]) {
    this._state.update((currentValue) => ({ ...currentValue, [key]: data }));
  }

  public setState(partialState: Partial<T>): void {
    this._state.update((currentValue) => ({ ...currentValue, ...partialState }));
  }

  public select<K extends keyof T>(key: K): Signal<T[K]> {
    return computed(() => this.state()[key]);
  }
}
