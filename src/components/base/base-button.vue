<script setup lang="ts">
import { PlainVueButton } from 'plain-vue';
</script>

<template>
  <plain-vue-button
    base-class="border"
    :color-class="{
      default: 'text-gray-900',
      red: 'bg-red-600 border-red-600 text-white',
    }"
    :size-class="{
      md: 'text-sm rounded-md px-2 py-1',
      sm: 'text-xs px-1.5 py-1 rounded-md',
    }"
  >
    <slot />
  </plain-vue-button>
</template>
