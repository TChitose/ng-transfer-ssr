import { Action, createReducer, on } from '@ngrx/store';
import * as action from './app-store.actions';

export const appStoreFeatureKey = 'appStore';

export interface State {
  data: string;
}

export const initialState: State = {
  data: null
};


export const reducer = createReducer(
  initialState,
  on(action.setState, (_, {state}) => ({ ...state })),
  on(action.setData, (state, {data}) => ({ ...state, data })),
);

