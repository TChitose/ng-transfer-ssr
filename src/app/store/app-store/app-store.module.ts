import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromStore from './app-store.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AppStoreEffects } from './app-store.effects';
import { AppStoreFacade } from './app-store.facade';
import { TransferService } from '../../services/transfer.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature(fromStore.appStoreFeatureKey, fromStore.reducer),
    EffectsModule.forRoot([AppStoreEffects]),
  ]
})
export class AppStoreModule {
  constructor(
    private readonly store: AppStoreFacade,
    private readonly transfer: TransferService
  ){
    const state = this.transfer.storeTransfer('storeApp', store.state$);
    if (state) {
      this.store.setState(state);
    }
  }
}
