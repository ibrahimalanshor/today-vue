<script setup lang="ts">
import { PlusIcon } from '@heroicons/vue/24/outline';
import { PlainVueInput } from 'plain-vue';
import { reactive } from 'vue';
import { useTodoStore } from 'src/modules/todo/stores/store/todo.store';
import { Todo } from 'src/modules/todo/todo.entity';

const emit = defineEmits<{
  created: [todo: Todo];
}>();

const todoStore = useTodoStore();

const form = reactive<{
  name: Todo['name'];
}>({
  name: '',
});

function resetForm() {
  form.name = '';
}
function handleStore() {
  const todo = todoStore.create(form.name);

  resetForm();

  emit('created', todo);
}
</script>

<template>
  <form
    class="flex items-center px-3 gap-x-2"
    v-on:submit.prevent="handleStore"
  >
    <plus-icon class="w-4 h-4 text-gray-400" />
    <plain-vue-input
      input-class="py-2 px-0 w-full text-sm border-0 rounded-md focus:ring-0 placeholder:text-gray-400 text-gray-700"
      placeholder="Do something"
      v-model="form.name"
    />
  </form>
</template>
