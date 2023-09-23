<script setup lang="ts">
import { PlainVueTitle } from 'plain-vue';

defineProps({
  level: Number,
});
</script>

<template>
  <plain-vue-title
    base-class="font-bold leading-6 truncate-tight text-gray-900"
    :level="level"
    :level-class="{
      6: 'text-lg',
    }"
    ><slot
  /></plain-vue-title>
</template>
