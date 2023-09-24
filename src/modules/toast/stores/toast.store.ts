import { defineStore } from 'pinia';
import { ref } from 'vue';
import { Toast } from '../toast.interface';

export const useToastStore = defineStore('toast', () => {
  const MAX_LENGTH = 5;
  const toasts = ref<Toast[]>([]);

  function add(values: Toast) {
    if (toasts.value.length >= MAX_LENGTH) {
      toasts.value.shift();
    }

    toasts.value.push({
      message: values.message,
    });

    setTimeout(() => {
      toasts.value.splice(toasts.value.length - 1, 1);
    }, 2000);
  }

  return { toasts, add };
});
