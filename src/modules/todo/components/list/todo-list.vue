<script setup lang="ts">
import { PlainVueList, PlainVueText } from 'plain-vue';
import BaseText from 'src/components/base/base-text.vue';
import TodoListItem from 'src//modules/todo/components/list/todo-list-item.vue';
import TodoItemCreate from './todo-item-create.vue';
import { PropType, computed } from 'vue';
import { TodoFilter } from 'src/modules/todo/todo.interface';
import { useTodoStore } from 'src/modules/todo/stores/todo.store';

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  withCreate: {
    type: Boolean,
    default: false,
  },
  hideWhenEmpty: {
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

const todos = computed(() => {
  return todoStore.getAll(props.filter);
});
</script>

<template>
  <div v-if="todos.length || !hideWhenEmpty" class="space-y-1">
    <base-text class="font-semibold" color="black">{{ title }}</base-text>
    <plain-vue-list wrapper-class="border divide-y rounded-md">
      <template #list>
        <template v-for="(todo, index) in todos" :key="todo.id">
          <todo-list-item v-model="todos[index]" />
        </template>
      </template>
      <template #append-item>
        <todo-item-create v-if="withCreate" />
      </template>
    </plain-vue-list>
  </div>
</template>
