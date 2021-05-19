import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { AppStoreFacade } from '../store/app-store/app-store.facade';
import { isPlatformBrowser } from '@angular/common';
import { filter, tap } from 'rxjs/operators';
import { TopStore } from './top.store';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss'],
  providers: [TopStore]
})
export class TopComponent implements OnInit {

  constructor(
    @Inject(PLATFORM_ID) private platformId,
    private appStore: AppStoreFacade,
    private store: TopStore
  ) { }

  data$ = this.appStore.data$;
  storeMessage$ = this.store.message$;

  ngOnInit(): void {
    let message = '';
    if (isPlatformBrowser(this.platformId)){
      message = 'client side rendering';
    } else {
      message = 'server side rendering';
    }

    this.data$.pipe(
      tap(x => console.log(x, '1')),
      filter(x => !x),
    ).subscribe(() => {
      // null合体演算子の確認をするならば下をコメントアウト
      this.appStore.setData(message);
    });

    this.storeMessage$.pipe(
      filter(x => !x),
    ).subscribe(() => {
      this.store.setMessage(message);
    });

    this.data$.subscribe(x => console.log(x));
    this.storeMessage$.subscribe(x => console.log(x));
  }
}
