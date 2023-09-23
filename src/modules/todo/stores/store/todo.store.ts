import { defineStore } from 'pinia';
import { ref } from 'vue';
import { Todo } from 'src/modules/todo/todo.entity';

export const useTodoStore = defineStore('todo', () => {
  const todos = ref<Todo[]>([]);

  function getCreationId(): Todo['id'] {
    return todos.value.length ? todos.value[todos.value.length - 1].id + 1 : 1;
  }
  function create(name: Todo['name']): Todo {
    const length = todos.value.push({
      id: getCreationId(),
      name,
      isDone: false,
    });

    return todos.value[length - 1];
  }

  return { todos, create };
});
