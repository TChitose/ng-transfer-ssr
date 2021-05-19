import { createSelector } from '@ngrx/store';
import { State } from './app-store.reducer';


export interface AppState {
  appStore: State;
}

export const selectState = (state: AppState) => {
  return state.appStore;
};

export const selectData = createSelector(
  selectState,
  (state: State) => state.data
);
