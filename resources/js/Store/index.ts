import { createPinia } from 'pinia';
import piniaPluginPersistedState from 'pinia-plugin-persistedstate';

import loading from '@/Store/Plugins/loading';

const store = createPinia();

store.use(piniaPluginPersistedState);
store.use(loading);

export default store;
