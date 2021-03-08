import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Meld {
  mode: string,
  tileType: string,
  tileNumber: number,
  meldType: string,
  img: string,
  fullMeldImg: any[]
}

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
    console.log(this.melds)
    this.melds = [
      ...this.melds,
      meld
    ]
  }
}
