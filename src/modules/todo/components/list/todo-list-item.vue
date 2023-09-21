<script setup lang="ts">
import { PlainVueText, PlainVueCheckbox, PlainVueButton } from 'plain-vue';
import { TrashIcon, PencilSquareIcon } from '@heroicons/vue/24/outline';
import { PropType, computed } from 'vue';
import { Todo } from 'src/modules/todo/todo.entity';

const props = defineProps({
  todo: {
    type: Object as PropType<Todo>,
    required: true,
  },
});
const emit = defineEmits<{
  done: [value: boolean];
}>();

const isDone = computed({
  get() {
    return props.todo.isDone;
  },
  set(value) {
    emit('done', value);
  },
});
</script>

<template>
  <div class="py-2 px-3 flex items-center gap-x-2 group hover:bg-gray-50">
    <div class="flex items-center gap-x-2">
      <plain-vue-checkbox
        wrapper-class="flex items-center"
        checkbox-class="w-4 h-4 rounded border-gray-300 focus:ring-gray-900 text-gray-900"
        v-model="isDone"
      />
      <plain-vue-text
        :class="['text-sm text-gray-700', todo.isDone && 'line-through']"
        >{{ todo.name }}</plain-vue-text
      >
    </div>
    <div class="items-center gap-x-2 hidden group-hover:flex">
      <plain-vue-button>
        <pencil-square-icon class="w-4 h-4 text-gray-400" />
      </plain-vue-button>
      <plain-vue-button>
        <trash-icon class="w-4 h-4 text-gray-400" />
      </plain-vue-button>
    </div>
  </div>
</template>
