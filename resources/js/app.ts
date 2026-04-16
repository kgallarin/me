import { RendererElement, type RendererNode, VNode, createApp, h, provide } from 'vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { DefaultApolloClient } from '@vue/apollo-composable';
import dayjs from 'dayjs';

import router from '@/Router/index';

import store from '@/Store';

import { apolloClient } from './Apollo';
import App from './App.vue';

library.add(fas, far, fab);

const app = createApp({
  setup(): void {
    provide(DefaultApolloClient, apolloClient);
  },
  render: (): VNode<RendererNode, RendererElement, { [k: string]: string }> => h(App),
});

app.component('FaIcon', FontAwesomeIcon);
app.use(store);
app.use(router);
app.config.globalProperties.$dayjs = dayjs;

app.mount('#app');
