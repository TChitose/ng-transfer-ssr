import { createAction, props } from '@ngrx/store';
import { State} from './app-store.reducer';

export const setState = createAction(
  '[AppStore] setState',
  props<{ state: State }>()
);

export const setData = createAction(
  '[AppStore] setData',
  props<{ data: string; }>()
);
