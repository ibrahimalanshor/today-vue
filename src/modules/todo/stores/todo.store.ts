import { defineStore } from 'pinia';
import { ref } from 'vue';
import { Todo, TodoFilter } from 'src/modules/todo/todo.interface';

export const useTodoStore = defineStore('todo', () => {
  const todos = ref<Todo[]>([]);

  function getCurrentId(): Todo['id'] {
    return todos.value.length ? todos.value[todos.value.length - 1].id : 0;
  }

  function getAll(filter: TodoFilter): Todo[] {
    return todos.value.filter((todo) => todo.isDone === filter.isDone);
  }
  function create(name: Todo['name']): Todo {
    const length = todos.value.push({
      id: getCurrentId() + 1,
      name,
      isDone: false,
    });

    return todos.value[length - 1];
  }
  function remove(id: Todo['id']): void {
    const index = todos.value.findIndex((todo) => todo.id === id);

    todos.value.splice(index, 1);
  }

  return { todos, create, getAll, remove };
});
