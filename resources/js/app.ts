import { RendererElement, type RendererNode, VNode, createApp, h, provide } from 'vue';

// import selected icons fab, far, fas
import '@/SelectedFaIcons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { DefaultApolloClient } from '@vue/apollo-composable';
import dayjs from 'dayjs';

import router from '@/Router/index';

import store from '@/Store';

import { apolloClient } from './Apollo';
import App from './App.vue';

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
