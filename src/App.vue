<script setup lang="ts">
import { PlainVueTitle, PlainVueText } from 'plain-vue';
import AppSidebar from 'src/components/partials/app/app-sidebar.vue';
import TodoList from 'src//modules/todo/components/list/todo-list.vue';
</script>

<template>
  <div class="max-w-2xl mx-auto py-8 grid grid-cols-12 gap-x-8">
    <div class="col-span-4">
      <app-sidebar />
    </div>
    <div class="col-span-8">
      <div class="space-y-4">
        <div class="">
          <plain-vue-title
            base-class="font-bold leading-6 truncate-tight text-lg text-gray-900"
            >Today</plain-vue-title
          >
          <plain-vue-text base-class="text-gray-500 text-sm"
            >21 September 2023</plain-vue-text
          >
        </div>
        <todo-list title="Todo" :filter="{ isDone: false }" with-create />
        <todo-list title="Done" :filter="{ isDone: true }" hide-when-empty />
      </div>
    </div>
  </div>
</template>
