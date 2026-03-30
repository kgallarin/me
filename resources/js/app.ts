import router from '@/Router/index';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import dayjs from 'dayjs';

import { createApp, h } from 'vue';

import store from '@/Store';

import App from './App.vue';
import './bootstrap';

library.add(fas, far, fab);

const app = createApp({
  render: () => h(App),
});

app.component('FontAwesomeIcon', FontAwesomeIcon);
app.use(store);
app.use(router);
app.config.globalProperties.$dayjs = dayjs;

app.mount('#app');
