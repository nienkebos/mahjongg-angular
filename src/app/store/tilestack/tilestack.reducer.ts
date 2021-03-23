import { Action, createReducer, on } from '@ngrx/store';
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

// 3. Build simple reducer
export const tilestackReducer = createReducer(
  initialState,
  on(TilestackActions.loadTiles, (state: any) => ({ ...state })),
  on(TilestackActions.takeTiles, (state: any, tileId: any ) => (state.filter((id: any) => {
    id !== tileId
    // do something else than this
    }))),
  on(TilestackActions.resetTilestack, (state: any) => ({ ...state }))
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
