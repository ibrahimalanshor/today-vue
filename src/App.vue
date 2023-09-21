<script setup lang="ts">
import {
  PlainVueTitle,
  PlainVueList,
  PlainVueText,
  PlainVueCheckbox,
  PlainVueButton,
} from 'plain-vue';
import {
  TrashIcon,
  PencilSquareIcon,
  PlusIcon,
} from '@heroicons/vue/24/outline';
import AppSidebar from 'src/components/partials/app/app-sidebar.vue';

const todos = [
  {
    id: 1,
    name: 'Tuku HP',
    done: false,
  },
  {
    id: 2,
    name: 'Tuku Kartu Perdana',
    done: false,
  },
  {
    id: 3,
    name: 'Ganti Oli',
    done: false,
  },
  {
    id: 4,
    name: 'Tuku Bakso',
    done: false,
  },
  {
    id: 5,
    name: 'Bales WA',
    done: true,
  },
];
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
        <div class="space-y-1">
          <div class="flex items-center justify-between">
            <plain-vue-text base-class="text-sm font-semibold text-gray-900"
              >Todo</plain-vue-text
            >
            <plain-vue-button>
              <plus-icon class="w-4 h-4 text-gray-500" />
            </plain-vue-button>
          </div>
          <plain-vue-list
            wrapper-class="border divide-y rounded-md"
            :items="todos.filter((todo) => !todo.done)"
          >
            <template #item="{ item }">
              <div
                class="py-2 px-3 flex items-center gap-x-2 group hover:bg-gray-50"
              >
                <div class="flex items-center gap-x-2">
                  <plain-vue-checkbox
                    checkbox-class="w-4 h-4 rounded border-gray-300 focus:ring-gray-900 text-gray-900"
                  />
                  <plain-vue-text class="text-sm text-gray-700">{{
                    item.name
                  }}</plain-vue-text>
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
          </plain-vue-list>
        </div>
        <div class="space-y-1">
          <plain-vue-text base-class="text-sm font-semibold text-gray-900"
            >Done</plain-vue-text
          >
          <plain-vue-list
            wrapper-class="border divide-y rounded-md"
            :items="todos.filter((todo) => todo.done)"
          >
            <template #item="{ item }">
              <div class="py-2 px-3 flex items-center gap-x-2">
                <plain-vue-checkbox
                  checkbox-class="w-4 h-4 rounded border-gray-300 focus:ring-gray-900 text-gray-900"
                  v-model="item.done"
                />
                <span class="text-sm text-gray-700 line-through">{{
                  item.name
                }}</span>
              </div>
            </template>
          </plain-vue-list>
        </div>
      </div>
    </div>
  </div>
</template>
