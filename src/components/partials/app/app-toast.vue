<script setup lang="ts">
import BaseText from 'src/components/base/base-text.vue';
import { useToastStore } from 'src/modules/toast/stores/toast.store';

const toastStore = useToastStore();
</script>

<template>
  <div class="fixed bottom-4 left-1/2 -translate-x-1/2 space-y-4">
    <div
      v-for="toast in toastStore.toasts"
      :key="toast.message"
      class="bg-gray-900 py-2 px-3 rounded-md font-semibold leading-6 min-w-[300px] w-fit"
    >
      <base-text color="white">{{ toast.message }}</base-text>
    </div>
  </div>
</template>
