<script setup lang="ts">
import { PlainVueButton } from 'plain-vue';
import {
  CheckIcon,
  XMarkIcon,
  TrashIcon,
  PencilSquareIcon,
} from '@heroicons/vue/24/outline';
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

function handleCancel() {
  emit('close');
}
function handleConfirm() {
  todo.value.name = form.name;

  emit('close');
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
