import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Meld } from '../models';

@Injectable({
  providedIn: 'root'
})
export class MeldStoreService {
  private readonly _melds = new BehaviorSubject<Meld[]>([]);
  readonly melds$ = this._melds.asObservable();

  get melds(): Meld[] {
    return this._melds.getValue();
  }

  set melds(val: Meld[]) {
    this._melds.next(val);
  }

  addMeld(meld: Meld) {
    this.melds = [
      ...this.melds,
      meld
    ]
  }
}
