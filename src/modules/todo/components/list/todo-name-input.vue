<script setup lang="ts">
import { PlainVueInput } from 'plain-vue';
import { computed, onMounted, ref, ComponentPublicInstance } from 'vue';

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
});
const emit = defineEmits<{
  'update:modelValue': [value: string];
}>();

const input = ref<ComponentPublicInstance>();

const value = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit('update:modelValue', value);
  },
});

defineExpose({ input });
</script>

<template>
  <plain-vue-input
    ref="input"
    wrapper-class="w-full flex"
    input-class="p-0 w-full text-sm border-0 leading-0 bg-transparent focus:ring-0 placeholder:text-gray-400 text-gray-700 w-full"
    placeholder="Do something"
    v-model="value"
  />
</template>
