import './bootstrap';
import dayjs from 'dayjs';

import router from '@/Router/index';

import App from './App.vue';
import { createApp, h } from 'vue';


const app = createApp({
    render: () => h(App),
});

app.use(router);
app.config.globalProperties.$dayjs = dayjs;


app.mount('#app');
