import { createSelector } from '@ngrx/store';
import { AppState } from '..';
import { Tile } from '../../models';
import { TilestackState } from './tilestack.reducer';

export const selectTilestackState = (state: AppState) => state.tilestack;

export const selectTilestack = createSelector(
  selectTilestackState,
  (tilestack: TilestackState) => tilestack.tilestack
)
