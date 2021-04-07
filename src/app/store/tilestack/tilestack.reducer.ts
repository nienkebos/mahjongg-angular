import { createReducer, on } from '@ngrx/store';
import * as TilestackActions from './tilestack.actions';
import { tiles } from '../../data/data';
import { Tile } from '../../models';

// 1. Define state shape
export interface TilestackState {
  tilestack: Tile[];
}

// 2. Set initialState
export const initialState: TilestackState = {
  tilestack: tiles
}

export interface TilePayload {
  tiles: Tile[];
}

// 3. Build simple reducer
export const tilestackReducer = createReducer(
  initialState,
  on(TilestackActions.loadTiles, (state: TilestackState) => ({ ...state })),
  on(TilestackActions.resetTilestack, () => ({ ...initialState })),
  on(TilestackActions.takeTiles, (state: TilestackState, action: TilePayload) => {
    let updatedTilestack: Tile[] = state.tilestack;
    for (let index = 0; index < action.tiles.length; index++) {
      let updatedTile = action.tiles[index];
      updatedTilestack = updatedTilestack.map(tile => {
        return tile.id === updatedTile.id ? Object.assign({}, updatedTile) : tile
      })
    }
    return ({
      ...state,
      tilestack: updatedTilestack
    })
  })
)






// function takeTiles(tilestack: any, payload: any) {
//   console.log(tilestack, payload)
//   return tilestack;
// }

// export function tilestackReducer(state = initialState, action: any): TilestackState {
//   // Don't put nested logic in the reducer
//   // Delegate to a standalone function: testable
//   switch(action.type) {
//     case TilestackActions.takeTiles:
//       return {
//         tilestack: takeTiles(state.tilestack, action.payload)
//       }
//     case TilestackActions.loadTiles:
//       return {
//         tilestack: loadTiles(state)
//       }
//     default:
//       return state;
//   }
// }
