import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Tile } from '../models';
import { tiles } from '../data/data';

@Injectable({
  providedIn: 'root'
})
export class TileStoreService {
  tileStack:Tile[] = tiles;
  private readonly _tiles = new BehaviorSubject<Tile[]>(this.tileStack);
  readonly tiles$ = this._tiles.asObservable();

  get getTiles(): Tile[] {
    return this._tiles.getValue();
  }

  set setTiles(val: Tile[]) {
    this._tiles.next(val);
  }

  updateTileQuantity(id: number, meld: string) {
    // take tile with id and update quantity based on meld
    console.log(id, meld)

    let selectedTile = this.getTiles.find(tile => tile.id === id)
    if (selectedTile) {
      this.setTiles = this.calculateNewQuantity(id, meld, selectedTile);
      console.log(this.setTiles)
      // let newQuantity = selectedTile.quantity -1;
      // this.setTiles = [...tiles];
    }
  }

  calculateNewQuantity(id: number, meld: string, selectedTile: Tile) {
    const index = this.getTiles.indexOf(selectedTile);
    const tiles = this.getTiles;
    let newQuantity = selectedTile.quantity;

    switch(meld) {
      case "Chow":
        // Update quantity of selectedTile and 2 following tiles
        // newQuantity = selectedTile.quantity - 1;
        // for(let i = index; i <= index + 2; i++ ) {
        //   tiles[i].quantity - 1;
        // }
        break;
      case "Pung":
        // Update quantity of selectedTile only
        tiles[index].quantity - 3;
        tiles[index] = {
          ...selectedTile,
          quantity: newQuantity
        }
        break;
      case "Kong":
        // Update quantity of selectedTile only
        newQuantity = selectedTile.quantity - 4;
        tiles[index] = {
          ...selectedTile,
          quantity: newQuantity
        }
        break;
      default:
        break;
    }
    // tiles[index] = {
    //   ...selectedTile,
    //   quantity: newQuantity
    // }
    console.log(tiles)
    return tiles;
  }
}
