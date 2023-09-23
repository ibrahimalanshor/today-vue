<script setup lang="ts">
import BaseTitle from 'src/components/base/base-title.vue';
import BaseText from 'src/components/base/base-text.vue';
import AppSidebar from 'src/components/partials/app/app-sidebar.vue';
import AppToast from 'src/components/partials/app/app-toast.vue';
import TodoList from 'src//modules/todo/components/list/todo-list.vue';
</script>

<template>
  <app-toast />
  <div class="max-w-2xl mx-auto py-8 grid grid-cols-12 gap-x-8">
    <div class="col-span-4">
      <app-sidebar />
    </div>
    <div class="col-span-8">
      <div class="space-y-4">
        <div class="">
          <base-title :level="6">Today</base-title>
          <base-text>21 September 2023</base-text>
        </div>
        <todo-list title="Todo" :filter="{ isDone: false }" with-create />
        <todo-list title="Done" :filter="{ isDone: true }" hide-when-empty />
      </div>
    </div>
  </div>
</template>
