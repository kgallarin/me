import { PiniaPluginContext } from 'pinia';

export default function loading({ store }: PiniaPluginContext) {
  const hasLoading = Object.prototype.hasOwnProperty.call(store.$state, 'loading');
  const hasGetLoading = Object.prototype.hasOwnProperty.call(store, 'getLoading');
  const hasSetLoading = Object.prototype.hasOwnProperty.call(store, 'setLoading');

  if (hasLoading && !hasGetLoading) {
    store.getLoading = (type: string): boolean => store.loading[type];
  }

  if (hasLoading && !hasSetLoading) {
    store.setLoading = function ({ type, flag }: { type: string; flag: boolean }): void {
      this.loading[type] = flag;
    };
  }
}
