import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AppState } from '../../store';
import { selectTilestack } from '../../store/tilestack/tilestack.selectors';
import { TilestackState } from '../../store/tilestack/tilestack.reducer';
import { loadTiles, takeTiles, resetTilestack } from '../../store/tilestack/tilestack.actions';

import { INPUT_MODES, Meld, Tile } from '../../models';


@Component({
  selector: 'app-input-panel',
  templateUrl: './input-panel.component.html',
  styleUrls: ['./input-panel.component.scss']
})
export class InputPanelComponent implements OnInit {
  tilestack$: Observable<Tile[]>;
  step = 0;
  inputModes = INPUT_MODES;

  constructor(private store: Store<AppState>) {
    this.tilestack$ = store.pipe(select(selectTilestack))
  }
  ngOnInit() {}

  onSaveMeld(meld: Meld) {
    console.log(meld)
  //TODO: Something with the meld, save it to the store
  }

  setStep(index:number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
}
