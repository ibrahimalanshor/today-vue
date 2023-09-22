import { defineStore } from 'pinia';
import { ref } from 'vue';
import { Todo } from 'src/modules/todo/todo.entity';

export const useTodoStore = defineStore('todo', () => {
  const todos = ref<Todo[]>([]);

  return { todos };
});
