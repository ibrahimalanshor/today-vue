<script setup lang="ts">
import { PlainVueList } from 'plain-vue';
import { ref } from 'vue';

const active = ref<string>('Today');
</script>

<template>
  <aside>
    <plain-vue-list
      wrapper-class="space-y-1"
      item-class="py-2 px-3 rounded-md text-sm  cursor-pointer leading-6 font-semibold"
      inactive-class="text-gray-700 hover:bg-gray-50"
      active-class="bg-gray-900 text-white hover:bg-gray-900 cursor-default"
      :items="['Today', 'Late', 'Calendar']"
      v-model="active"
    />
  </aside>
</template>
