import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from '../../store';
import { selectTilestack } from '../../store/tilestack/tilestack.selectors';
import { loadTiles, takeTiles, resetTilestack } from '../../store/tilestack/tilestack.actions';

import { INPUT_MODES, Meld, Tile } from '../../models';
import { TileStoreService } from 'src/app/services/tile-store.service';


@Component({
  selector: 'app-input-panel',
  templateUrl: './input-panel.component.html',
  styleUrls: ['./input-panel.component.scss']
})
export class InputPanelComponent implements OnInit {
  tilestack$: Observable<Tile[]>;
  step = 0;
  inputModes = INPUT_MODES;

  constructor(private store: Store<AppState>, private tileStoreService: TileStoreService) {
    this.tilestack$ = this.store.pipe(select(selectTilestack))
  }
  ngOnInit() {}

  onSaveMeld(payload: any) {
    //TODO: Update quantity of the tile(s)
    let updatedTile = {} as Tile;
    updatedTile = this.tileStoreService.updateTileQuantity(payload.tile, payload.meld)
    //TODO: Dispatch updated tile(s) to the store
    this.store.dispatch(takeTiles({tile: updatedTile}))
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
