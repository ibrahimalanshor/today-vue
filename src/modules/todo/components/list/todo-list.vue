<script setup lang="ts">
import {
  PlainVueList,
  PlainVueText,
  PlainVueButton,
  PlainVueInput,
} from 'plain-vue';
import { PlusIcon } from '@heroicons/vue/24/outline';
import TodoListItem from 'src//modules/todo/components/list/todo-list-item.vue';
import { PropType, ref } from 'vue';
import { TodoFilter } from 'src/modules/todo/todo.entity';
import { useTodoStore } from 'src/modules/todo/stores/store/todo.store';

defineProps({
  title: {
    type: String,
    required: true,
  },
  withCreate: {
    type: Boolean,
    default: false,
  },
  filter: {
    type: Object as PropType<TodoFilter>,
    default: () => ({
      isDone: false,
    }),
  },
});

const todoStore = useTodoStore();

const visibleCreateInput = ref(false);

function handleCreate() {
  visibleCreateInput.value = true;
}
</script>

<template>
  <div class="space-y-1">
    <div class="flex items-center justify-between">
      <plain-vue-text base-class="text-sm font-semibold text-gray-900">{{
        title
      }}</plain-vue-text>
      <plain-vue-button v-if="withCreate" v-on:click="handleCreate">
        <plus-icon class="w-4 h-4 text-gray-500" />
      </plain-vue-button>
    </div>
    <plain-vue-list wrapper-class="border divide-y rounded-md">
      <template #list>
        <template v-for="(todo, index) in todoStore.todos" :key="todo.id">
          <todo-list-item v-model="todoStore.todos[index]" />
        </template>
      </template>
      <template v-if="withCreate && visibleCreateInput" #append-item>
        <div>
          <plain-vue-input
            input-class="py-2 px-3 w-full text-sm border-0 rounded-md focus:ring-0 placeholder:text-gray-400 text-gray-700"
            placeholder="Do something"
          />
        </div>
      </template>
    </plain-vue-list>
  </div>
</template>
