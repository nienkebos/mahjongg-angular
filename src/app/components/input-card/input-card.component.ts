import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { INPUT_MODES, INPUT_CARD_STEPS, TileType, Tile, Meld } from '../../models';
import { tileTypes, meldNames,  } from '../../data/data';

import { MeldStoreService } from '../../services/meld-store.service';
import { TileStoreService } from '../../services/tile-store.service';

@Component({
  selector: 'app-input-card',
  templateUrl: './input-card.component.html',
  styleUrls: ['./input-card.component.scss']
})
export class InputCardComponent implements OnInit {
  @Input() mode: string | undefined;
  @Input() tilestack: Tile[] | undefined;
  @Output() emitMeld = new EventEmitter<any>();

  inputModes = INPUT_MODES;
  inputCardSteps = INPUT_CARD_STEPS;
  inputCardStep: number = 0;
  tileTypes: TileType[] = tileTypes;
  tilesPerType: Tile[] = [];
  pickedTile = {} as Tile;
  pickMeld = false;
  melds = meldNames;
  meld = {} as Meld;
  meldType: FormControl = new FormControl('');
  fullMeldImg: string[] = [];

  constructor(private meldStoreService: MeldStoreService) {}

  ngOnInit() {
    this.inputCardStep = this.inputCardSteps.PICKTILETYPE;
    console.log(this.tilestack)
    if (this.mode === this.inputModes.BONUS ) {
      this.tileTypes = tileTypes.filter(tileType => tileType.set === this.inputModes.BONUS);
    } else {
      this.tileTypes = tileTypes.filter(tileType => tileType.set !== this.inputModes.BONUS);
    }
  }

  pickTileType(tileType: string) {
    this.inputCardStep = this.inputCardSteps.PICKTILE;
    this.tilestack !== undefined ? this.tilesPerType = this.tilestack.filter(tile => tile.type === tileType): console.log('this.tilesPerType = undefined');

    this.meld = {
      ...this.meld,
      mode: this.mode,
      tileType: tileType
    }
  }

  pickTile(tile: Tile) {
    this.pickedTile = tile;
    this.meld = {
      ...this.meld,
      tileNumber: tile.number || undefined,
      img: tile.img
    }
  }

  addFullMeldImgArray() {
    if(this.tilestack !== undefined) {
      switch(this.meldType.value) {
        case "Chow":
          const tileIndex = this.tilestack.findIndex(x => this.pickedTile.id === x.id)
          this.fullMeldImg = [this.meld.img, this.tilestack[tileIndex + 1 ].img, this.tilestack[tileIndex + 2 ].img]
          break;

        case "Pung":
          this.fullMeldImg = [this.meld.img, this.meld.img, this.meld.img]
          break;

        case "Kong":
          this.fullMeldImg = [this.meld.img, this.meld.img, this.meld.img, this.meld.img]
          break;

        default:
          this.fullMeldImg = [this.meld.img]
      }
    }
  }

  saveMeld() {
    this.addFullMeldImgArray();

    this.meld = {
      ...this.meld,
      meldType: this.meldType.value || 'Extra',
      fullMeldImg: this.fullMeldImg
    }
    console.log(this.pickedTile)
    const payload = {tile: this.pickedTile, meld: this.meld}
    this.emitMeld.emit(payload);

  //   this.meldStoreService.addMeld(this.meld);
  //   console.log(this.pickedTile)
  //   this.tileStoreService.updateTileQuantity(this.pickedTile.id, this.meldType.value)

    this.resetInputCard();
  }

  cancelMeld() {
    this.resetInputCard();
  }

  resetInputCard() {
    this.meld = {} as Meld;
    this.pickMeld = false;
    this.meldType.reset();
    this.inputCardStep = this.inputCardSteps.PICKTILETYPE;
  }
}
