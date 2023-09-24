import { App } from 'vue';
import vClickOutside from 'click-outside-vue3';

export function useClickOutside(app: App) {
  app.use(vClickOutside);
}
