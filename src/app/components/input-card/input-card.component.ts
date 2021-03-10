import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TileTypes,INPUT_MODES, INPUT_CARD_STEPS, Tiles, Tile, Melds, Meld } from '../../data/types';
import { MeldStoreService } from '../../services/meld-store.service';

@Component({
  selector: 'app-input-card',
  templateUrl: './input-card.component.html',
  styleUrls: ['./input-card.component.scss']
})
export class InputCardComponent implements OnInit {
  @Input() mode: string;
  tileTypes = TileTypes;
  tiles = Tiles;
  tilesPerType;
  pickedTile = {} as Tile;
  inputModes = INPUT_MODES;
  inputCardSteps = INPUT_CARD_STEPS;
  inputCardStep;
  pickMeld = false;
  melds = Melds;
  meld = {} as Meld;
  meldType = new FormControl();
  fullMeldImg = [];

  constructor(private meldStoreService: MeldStoreService) { }

  ngOnInit() {
    this.inputCardStep = this.inputCardSteps.PICKTILETYPE;

    if (this.mode === this.inputModes.BONUS ) {
      this.tileTypes = TileTypes.filter(tileType => {
        return tileType.set === this.inputModes.BONUS;
      })
    } else {
      this.tileTypes = TileTypes.filter(tileType => {
        return tileType.set !== this.inputModes.BONUS;
      })
    }
  }

  pickTileType(tileType: string) {
    this.inputCardStep = this.inputCardSteps.PICKTILE;

    this.tilesPerType = this.tiles.filter(tile => {
      return tile.type === tileType
    })

    this.meld = {
      ...this.meld,
      mode: this.mode,
      tileType: tileType
    }
  }

  pickTile(tile) {
    this.pickedTile = tile;
    this.meld = {
      ...this.meld,
      tileNumber: tile.number,
      img: tile.img
    }
  }

  addFullMeldImgArray() {
    switch(this.meldType.value) {
      case "Chow": {
        const tileIndex = this.tiles.findIndex(x => this.pickedTile.id === x.id)
        this.fullMeldImg = [this.meld.img, this.tiles[tileIndex + 1 ].img, this.tiles[tileIndex + 2 ].img]
        break;
      }
      case "Pung": {
        this.fullMeldImg = [this.meld.img, this.meld.img, this.meld.img]
        break;
      }
      case "Kong": {
        this.fullMeldImg = [this.meld.img, this.meld.img, this.meld.img, this.meld.img]
        break;
      }
      default: {
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

    this.meldStoreService.addMeld(this.meld);
    this.resetInputCard();
  }

  resetInputCard() {
    this.meld = {} as Meld;
    this.pickMeld = false;
    this.meldType.reset();
    this.inputCardStep = this.inputCardSteps.PICKTILETYPE;
  }
}
