import { Action, createAction, props } from '@ngrx/store';
import { Tile } from 'src/app/models';

// Actiontypes that can be performed on the tilestack
export enum TilestackActionTypes {
  LoadTilestack = '[Tilestack] Load Tilestack',
  TakeTiles = '[Tilestack] Take Tiles',
  ResetTilestack = '[Tilestack] Reset Tilestack'
}

export const loadTiles = createAction(TilestackActionTypes.LoadTilestack, props<{tile: Tile}>());
export const takeTiles = createAction(TilestackActionTypes.TakeTiles);
export const resetTilestack = createAction(TilestackActionTypes.ResetTilestack);

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
