<script setup lang="ts">
import { PlainVueText, PlainVueButton } from 'plain-vue';
import { TrashIcon, PencilSquareIcon } from '@heroicons/vue/24/outline';
import BaseCheckbox from 'src/components/base/base-checkbox.vue';
import TodoListItemEdit from './todo-list-item-edit.vue';
import { PropType, computed, ref } from 'vue';
import { Todo } from 'src/modules/todo/todo.interface';

const props = defineProps({
  modelValue: {
    type: Object as PropType<Todo>,
    required: true,
  },
});
const emit = defineEmits<{
  'update:modelValue': [value: Todo];
}>();

const todo = computed<Todo>({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit('update:modelValue', value);
  },
});

const isEditing = ref(false);

async function handleEdit() {
  isEditing.value = true;
}
function handleUpdated() {
  isEditing.value = false;
}
</script>

<template>
  <div
    :class="[
      'py-2 px-3 gap-x-2 group hover:bg-gray-50',
      !isEditing && 'flex items-center',
    ]"
  >
    <div class="flex items-center gap-x-2">
      <base-checkbox ref="check" v-model="todo.isDone" />
      <todo-list-item-edit
        v-if="isEditing"
        v-model="todo"
        v-on:close="isEditing = false"
      ></todo-list-item-edit>
      <plain-vue-text
        v-else
        :class="['text-sm text-gray-700', todo.isDone && 'line-through']"
        >{{ todo.name }}</plain-vue-text
      >
    </div>
    <div v-if="!isEditing" class="items-center gap-x-2 hidden group-hover:flex">
      <plain-vue-button v-on:click="handleEdit">
        <pencil-square-icon class="w-4 h-4 text-gray-400" />
      </plain-vue-button>
      <plain-vue-button>
        <trash-icon class="w-4 h-4 text-gray-400" />
      </plain-vue-button>
    </div>
  </div>
</template>
