<script setup lang="ts">
import { PlainVueButton, PlainVueDropdown } from 'plain-vue';
import BaseText from 'src/components/base/base-text.vue';
import BaseButton from 'src/components/base/base-button.vue';
import { TrashIcon } from '@heroicons/vue/24/outline';
import { PropType, computed } from 'vue';
import { Todo } from 'src/modules/todo/todo.interface';
import { useTodoStore } from 'src/modules/todo/stores/todo.store';

const props = defineProps({
  modelValue: {
    type: Object as PropType<Todo>,
    required: true,
  },
  visible: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits<{
  'update:modelValue': [value: Todo];
  'update:visible': [value: boolean];
}>();

const todoStore = useTodoStore();

const todo = computed<Todo>({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit('update:modelValue', value);
  },
});
const visible = computed<boolean>({
  get() {
    return props.visible;
  },
  set(value) {
    emit('update:visible', value);
  },
});

function handleHide() {
  visible.value = false;
}
function handleDelete() {
  todoStore.remove(todo.value.id);
}
</script>

<template>
  <plain-vue-dropdown
    wrapper-class="flex flex-col relative"
    programatic
    v-model:visible="visible"
    v-click-outside="handleHide"
  >
    <template #toggle>
      <plain-vue-button v-on:click="visible = !visible">
        <trash-icon class="w-4 h-4 text-gray-400" />
      </plain-vue-button>
    </template>

    <template #content>
      <div class="bg-white p-2 rounded-md border absolute space-y-1 top-5 z-10">
        <base-text>Are you sure?</base-text>
        <div class="flex gap-x-1">
          <base-button size="sm" v-on:click="handleHide">Cancel</base-button>
          <base-button size="sm" v-on:click="handleDelete" color="red"
            >Yes</base-button
          >
        </div>
      </div>
    </template>
  </plain-vue-dropdown>
</template>
