import { createAction, props } from '@ngrx/store';
import { TilePayload } from './tilestack.reducer';

export const loadTiles = createAction('[Tilestack] Load Tilestack');
export const takeTiles = createAction(
  '[Tilestack] Take Tiles',
  props<TilePayload>());
export const resetTilestack = createAction('[Tilestack] Reset Tilestack');

// export class LoadTilestack implements Action {
//   readonly type = TilestackActionTypes.LoadTilestack;
//   constructor(private payload: Tile[]) {}
// }

// export class TakeTiles implements Action {
//   readonly type = TilestackActionTypes.TakeTiles;
//   constructor(private payload: Tile) {}
// }

// export type TilestackActions = TakeTiles | LoadTilestack;
// export type TilestackActions = TakeTiles | OtherAction | OtherAction;
