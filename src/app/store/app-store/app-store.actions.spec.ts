import * as fromAppStore from './app-store.actions';

describe('loadAppStores', () => {
  it('should return an action', () => {
    expect(fromAppStore.loadAppStores().type).toBe('[AppStore] Load AppStores');
  });
});
