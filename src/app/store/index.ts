import { ActionReducerMap } from '@ngrx/store';

import * as fromTilestack from './tilestack/tilestack.reducer';

export interface AppState {
  // Add feature state to app state
  tilestack: fromTilestack.TilestackState
}

export const rootReducers: ActionReducerMap<AppState> = {
  // Add feature reducer to rootReducer
  tilestack: fromTilestack.tilestackReducer
}
