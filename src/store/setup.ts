import { App } from 'vue';
import { createPinia } from 'pinia';

export function setupStore(app: App) {
  app.use(createPinia());
}
