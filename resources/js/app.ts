import router from '@/Router/index';
import dayjs from 'dayjs';

import { createApp, h } from 'vue';

import store from '@/Store';

import App from './App.vue';
import './bootstrap';

const app = createApp({
  render: () => h(App),
});

app.use(store);
app.use(router);
app.config.globalProperties.$dayjs = dayjs;

app.mount('#app');
