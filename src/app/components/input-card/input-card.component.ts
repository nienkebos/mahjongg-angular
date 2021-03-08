import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TileTypes, INPUT_CARD_STEPS, Tiles, Tile, Melds } from '../../data/types';
import { Meld, MeldStoreService } from '../../services/meld-store.service';

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
  inputCardSteps = INPUT_CARD_STEPS;
  inputCardStep;
  pickMeld = false;
  melds = Melds;
  meld = {} as Meld;
  meldType = new FormControl();

  constructor(private meldStoreService: MeldStoreService) { }

  ngOnInit() {
    this.inputCardStep = this.inputCardSteps.PICKTILETYPE;
  }

  pickTileType(tileType: string) {
    this.meld = {
      ...this.meld,
      mode: this.mode,
      tileType: tileType
    }
    this.inputCardStep = this.inputCardSteps.PICKTILE;
    this.tilesPerType = this.tiles.filter(tile => {
      return tile.type === tileType
    })
  }

  pickTile(tile) {
    this.pickedTile = tile;
    this.meld = {
      ...this.meld,
      tileNumber: tile.number,
      img: tile.img
    }

    this.pickMeld = true;
  }

  saveMeld() {
    let fullMeldImg = [];

    switch(this.meldType.value) {
      case "Chow": {
        const tileIndex = this.tiles.findIndex(x => this.pickedTile.id === x.id)
        fullMeldImg = [ this.meld.img, this.tiles[tileIndex + 1 ].img, this.tiles[tileIndex + 2 ].img ]

        break;
      }
      case "Pung": {
        fullMeldImg = [this.meld.img, this.meld.img, this.meld.img]
        break;
      }
      case "Kong": {
        fullMeldImg = [this.meld.img, this.meld.img, this.meld.img, this.meld.img]

        break;
      }
    }

    this.meld = {
      ...this.meld,
      meldType: this.meldType.value,
      fullMeldImg: fullMeldImg
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
