import { NgModule } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppStoreModule } from './store/app-store/app-store.module';
import { TopComponent } from './top/top.component';
import { ReactiveComponentModule } from '@ngrx/component';

@NgModule({
  declarations: [
    AppComponent,
    TopComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    AppStoreModule,
    ReactiveComponentModule,
    BrowserTransferStateModule,
    TransferHttpCacheModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
