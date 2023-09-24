<script setup lang="ts">
import { PlusIcon } from '@heroicons/vue/24/outline';
import TodoNameInput from './todo-name-input.vue';
import { reactive } from 'vue';
import { useTodoStore } from 'src/modules/todo/stores/todo.store';
import { useToastStore } from 'src/modules/toast/stores/toast.store';
import { Todo } from 'src/modules/todo/todo.interface';
import { TodoSchema } from 'src/modules/todo/schemas/todo.schema';
import { useValidation } from 'src/composes/validation';

const emit = defineEmits<{
  created: [todo: Todo];
}>();

const todoStore = useTodoStore();
const toastStore = useToastStore();
const validation = useValidation(TodoSchema);

const form = reactive<{
  name: Todo['name'];
}>({
  name: '',
});

function resetForm() {
  form.name = '';
}
async function validateForm() {
  try {
    await validation.validate(form);
  } catch (err) {
    toastStore.add({ message: validation.getFirstErrorMessage('name') });

    throw err;
  }
}

async function handleStore() {
  try {
    await validateForm();

    const todo = todoStore.create(form.name);

    resetForm();

    emit('created', todo);
  } catch (err) {
    //
  }
}
</script>

<template>
  <form
    class="flex items-center py-2 px-3 gap-x-2"
    v-on:submit.prevent="handleStore"
  >
    <plus-icon class="w-4 h-4 text-gray-400" />
    <todo-name-input v-model="form.name" />
  </form>
</template>
