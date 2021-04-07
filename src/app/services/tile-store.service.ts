import { Injectable } from '@angular/core';
import { Meld, Tile } from '../models';

@Injectable({
  providedIn: 'root'
})
export class TileStoreService {
  updateTileQuantity(tile: Tile, meld: Meld) {
    // take tile with id and update quantity based on meld
    let updatedTile = tile;
    if (tile) {
      updatedTile = this.calculateNewQuantity(tile, meld);
    }
    return updatedTile;
  }

  calculateNewQuantity(tile: Tile, meld: Meld) {
    let tileWithNewQuantity = tile;
    let newQuantity: number;

    switch(meld.meldType) {
      case "Chow":
        // TODO: Calculate new quantity for following two tiles
        console.log(tileWithNewQuantity)
        newQuantity = tile.quantity - 1;
        tileWithNewQuantity = {
          ...tileWithNewQuantity,
          quantity: newQuantity
        };
        break;
      case "Pung":
        // Update quantity of selectedTile only
        newQuantity = tile.quantity - 3;
        tileWithNewQuantity = {
          ...tileWithNewQuantity,
          quantity: newQuantity
        };
        break;
      case "Kong":
        // Update quantity of selectedTile only
        newQuantity = tile.quantity - 4;
        tileWithNewQuantity = {
          ...tileWithNewQuantity,
          quantity: newQuantity
        };
        break;
      default:
        break;
    }
    return tileWithNewQuantity;
  }
}
