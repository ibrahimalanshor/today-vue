<script setup lang="ts">
import { PlainVueText } from 'plain-vue';
</script>

<template>
  <plain-vue-text
    base-class="text-sm"
    :color-class="{
      gray: 'text-gray-500',
      white: 'text-white',
      black: 'text-gray-900',
    }"
    ><slot
  /></plain-vue-text>
</template>
