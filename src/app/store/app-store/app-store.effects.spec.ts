import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { AppStoreEffects } from './app-store.effects';

describe('AppStoreEffects', () => {
  let actions$: Observable<any>;
  let effects: AppStoreEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AppStoreEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(AppStoreEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
