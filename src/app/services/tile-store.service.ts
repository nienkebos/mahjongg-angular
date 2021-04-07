import { Injectable } from '@angular/core';
import { Meld, Tile } from '../models';
import { tiles } from '../data/data';

@Injectable({
  providedIn: 'root'
})
export class TileStoreService {
  updateTileQuantity(tile: Tile, meld: Meld) {
    // take tile with id and update quantity based on meld
    let updatedTiles: Tile[] = [];
    if (tile) {
      updatedTiles = this.calculateNewQuantity(tile, meld);
    }
    return updatedTiles;
  }

  calculateNewQuantity(tile: Tile, meld: Meld) {
    const index = tiles.indexOf(tile);
    let tileWithNewQuantity = tile;
    let updatedTiles: Tile[] = [];
    // let newQuantity: number;

    switch(meld.meldType) {
      case "Chow":
        // TODO: Calculate new quantity for following two tiles
        for(let i = index; i <= index + 2; i++) {
          tileWithNewQuantity = {
            ...tiles[i],
            quantity: tiles[i].quantity - 1
          }
          updatedTiles = updatedTiles.concat(tileWithNewQuantity)
        }
        break;
      case "Pung":
        // Update quantity of selectedTile only
        // newQuantity = tile.quantity - 3;
        tileWithNewQuantity = {
          ...tileWithNewQuantity,
          quantity: tile.quantity - 3
        };
        updatedTiles = updatedTiles.concat(tileWithNewQuantity)
        break;
      case "Kong":
        // Update quantity of selectedTile only
        // newQuantity = tile.quantity - 4;
        tileWithNewQuantity = {
          ...tileWithNewQuantity,
          quantity: tile.quantity - 4
        };
        updatedTiles = updatedTiles.concat(tileWithNewQuantity)
        break;
      default:
        break;
    }
    return updatedTiles;
  }
}
