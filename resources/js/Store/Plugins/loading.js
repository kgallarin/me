export default function loading({ store }) {
  const hasLoading = Object.prototype.hasOwnProperty.call(store.$state, 'loading');
  const hasGetLoading = Object.prototype.hasOwnProperty.call(store, 'getLoading');
  const hasSetLoading = Object.prototype.hasOwnProperty.call(store, 'setLoading');
  if (hasLoading && !hasGetLoading) {
    store.getLoading = (type) => store.loading[type];
  }
  if (hasLoading && !hasSetLoading) {
    store.setLoading = function ({ type, flag }) {
      this.loading[type] = flag;
    };
  }
}
