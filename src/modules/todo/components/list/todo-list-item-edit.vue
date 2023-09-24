<script setup lang="ts">
import { PlainVueButton } from 'plain-vue';
import { CheckIcon, XMarkIcon } from '@heroicons/vue/24/outline';
import TodoNameInput from './todo-name-input.vue';
import {
  ComponentPublicInstance,
  PropType,
  computed,
  onMounted,
  reactive,
  ref,
} from 'vue';
import { Todo } from 'src/modules/todo/todo.interface';
import { TodoSchema } from 'src/modules/todo/schemas/todo.schema';
import { useValidation } from 'src/composes/validation';
import { useToastStore } from 'src/modules/toast/stores/toast.store';

const props = defineProps({
  modelValue: {
    type: Object as PropType<Todo>,
    required: true,
  },
});
const emit = defineEmits<{
  'update:modelValue': [value: Todo];
  close: [];
}>();

const validation = useValidation(TodoSchema);
const toastStore = useToastStore();

const todo = computed<Todo>({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit('update:modelValue', value);
  },
});

const input = ref<{ input: ComponentPublicInstance }>();
const form = reactive<{ name: string }>({
  name: '',
});

async function validateForm() {
  try {
    await validation.validate(form);
  } catch (err) {
    toastStore.add({ message: validation.getFirstErrorMessage('name') });

    throw err;
  }
}

function handleCancel() {
  emit('close');
}
async function handleConfirm() {
  try {
    await validateForm();

    todo.value.name = form.name;

    emit('close');
  } catch (err) {
    //
  }
}

onMounted(() => {
  form.name = todo.value.name;

  const inputElement = input.value?.input.$refs.input as HTMLInputElement;

  inputElement.focus();
});
</script>

<template>
  <form
    class="w-full flex justify-between"
    v-click-outside="handleCancel"
    v-on:submit.prevent="handleConfirm"
  >
    <todo-name-input ref="input" v-model="form.name" />
    <div class="flex items-center gap-x-2">
      <plain-vue-button v-on:click="handleConfirm">
        <check-icon class="w-4 h-4 text-gray-400" />
      </plain-vue-button>
      <plain-vue-button v-on:click="handleCancel">
        <x-mark-icon class="w-4 h-4 text-gray-400" />
      </plain-vue-button>
    </div>
  </form>
</template>
