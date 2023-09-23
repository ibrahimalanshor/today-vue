<script setup lang="ts">
import { PlusIcon } from '@heroicons/vue/24/outline';
import { PlainVueInput } from 'plain-vue';
import { reactive } from 'vue';
import { useTodoStore } from 'src/modules/todo/stores/todo.store';
import { useToastStore } from 'src/modules/toast/stores/toast.store';
import { Todo } from 'src/modules/todo/todo.interface';
import joi, { ValidationError } from 'joi';

const emit = defineEmits<{
  created: [todo: Todo];
}>();

const todoStore = useTodoStore();
const toastStore = useToastStore();

const form = reactive<{
  name: Todo['name'];
}>({
  name: '',
});

function resetForm() {
  form.name = '';
}
async function validateForm() {
  const schema = joi.object({
    name: joi.string().required().messages({
      'string.empty': 'Todo name cannot be empty',
    }),
  });

  try {
    await schema.validateAsync(form);
  } catch (err) {
    const message = (err as ValidationError).details.find(
      (e) => e.path[0] === 'name',
    )?.message;

    toastStore.add({ message: message as string });

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
    class="flex items-center px-3 gap-x-2"
    v-on:submit.prevent="handleStore"
  >
    <plus-icon class="w-4 h-4 text-gray-400" />
    <plain-vue-input
      wrapper-class="w-full"
      input-class="py-2 px-0 w-full text-sm border-0 rounded-md focus:ring-0 placeholder:text-gray-400 text-gray-700 w-full"
      placeholder="Do something"
      v-model="form.name"
    />
  </form>
</template>
