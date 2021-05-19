import { ComponentStore } from '@ngrx/component-store';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { TransferService } from '../services/transfer.service';

export interface TopState {
  destroyed?: boolean;
  message: string;
}

@Injectable()
export class TopStore extends ComponentStore<TopState> {
  constructor(
    private readonly transfer: TransferService
  ) {
    super({message: null});

    const state = this.transfer.storeTransfer('componentStoreTop', this.state$);
    if (state) {
      this.stateUpdate(state);
    }
  }

  readonly state$: Observable<TopState> = this.select(state => state);
  readonly destroyed$: Observable<boolean>  = this.select(state => state.destroyed).pipe(filter(x => !!x));
  readonly message$: Observable<string> = this.select(state => state.message);

  readonly stateUpdate = this.updater((_, state: TopState) => ({
    ...state
  }));

  readonly setMessage = this.updater((state, message: string) => ({
    ...state,
    message
  }));

  readonly destroy = () => this.setState((state) => ({ ...state, destroyed: true }));
}
