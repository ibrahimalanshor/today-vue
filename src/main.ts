import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { setupStore } from './store/setup';
import { useClickOutside } from './plugins/click-outside.plugin';

const app = createApp(App);

setupStore(app);

useClickOutside(app);

app.mount('#app');
