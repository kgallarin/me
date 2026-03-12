import './bootstrap';

import App from './App.vue';
import { createApp, h } from 'vue';


const app = createApp({
    render: () => h(App),
});

app.mount('#app');
