<script setup lang="ts">
import { useToastStore } from 'src/modules/toast/stores/toast.store';

const toastStore = useToastStore();
</script>

<template>
  <div class="fixed bottom-4 left-1/2 -translate-x-1/2 space-y-4">
    <div
      v-for="toast in toastStore.toasts"
      :key="toast.message"
      class="bg-gray-900 py-2 px-3 text-sm rounded-md text-white font-semibold leading-6 min-w-[300px] w-fit"
    >
      {{ toast.message }}
    </div>
  </div>
</template>
