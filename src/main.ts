import { createApp } from 'vue';
import App from './App.vue';
// Vue Router
import router from '@/router/index';
// ElementPlus
import ElementPlus from 'element-plus';
// css
import 'element-plus/dist/index.css';
import './assets/index.css';

const app = createApp(App);

app.use(router);
app.use(ElementPlus);

app.mount('#app');
