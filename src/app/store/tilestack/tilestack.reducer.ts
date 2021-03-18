import { Action } from '@ngrx/store';
import { tiles } from '../../data/data';
import { Tile } from '../../models';

// define state shape
export interface TilestackState {
  tilestack: Tile[];
}

// Define initialState
export const initialState: TilestackState = {
  tilestack: tiles
}

// Build simple reducer
export function tilestackReducer(state = initialState, action: Action): TilestackState {
  switch(action.type) {
    default:
      return state;
  }
}
