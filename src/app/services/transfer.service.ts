import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { TransferState , makeStateKey} from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class TransferService {

  transferStateKeys = [];

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private transferState: TransferState
  ) { }

  /**
   * ストア用転送関数
   * @param key Key名
   * @param store 保存するstoreデータ
   */
  public storeTransfer<T>(key: string, store: Observable<T>): T | void{
    this.transferStateKeys[key] = this.transferStateKeys[key] || makeStateKey(key);
    if (isPlatformBrowser(this.platformId)){
      const data = this.transferState.get<T>(this.transferStateKeys[key], null);
      this.transferState.remove(this.transferStateKeys[key]);
      this.transferStateKeys[key] = null;
      return data;
    } else {
      this.transferState.onSerialize(this.transferStateKeys[key], () => {
        let state;
        store.subscribe((saveState: T) => {
          state = saveState;
        }).unsubscribe();
        return state;
      });
      return null;
    }
  }
}
