import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';

import * as selectors from './app-store.selectors';
import * as actions from './app-store.actions';
import { AppStoreModule } from './app-store.module';
import { State } from './app-store.reducer';

@Injectable({
  providedIn: AppStoreModule
})
export class AppStoreFacade {
  state$ = this.store.pipe(select(selectors.selectState));
  data$ = this.store.pipe(select(selectors.selectData));

  constructor(private store: Store) {}

  setState(state: State): void {
    this.store.dispatch(actions.setState({state}));
  }

  setData(data: string): void{
    this.store.dispatch(actions.setData({ data }));
  }
}
