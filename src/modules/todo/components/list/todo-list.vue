<script setup lang="ts">
import { PlainVueList, PlainVueText, PlainVueButton } from 'plain-vue';
import { PlusIcon } from '@heroicons/vue/24/outline';
import TodoListItem from 'src//modules/todo/components/list/todo-list-item.vue';
import TodoItemCreate from './todo-item-create.vue';
import { PropType, computed, ref } from 'vue';
import { TodoFilter } from 'src/modules/todo/todo.entity';
import { useTodoStore } from 'src/modules/todo/stores/store/todo.store';

const props = defineProps({
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

const todos = computed(() => {
  return todoStore.getAll(props.filter);
});

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
        <template v-for="(todo, index) in todos" :key="todo.id">
          <todo-list-item v-model="todos[index]" />
        </template>
      </template>
      <template v-if="withCreate && visibleCreateInput" #append-item>
        <todo-item-create v-on:created="visibleCreateInput = false" />
      </template>
    </plain-vue-list>
  </div>
</template>
