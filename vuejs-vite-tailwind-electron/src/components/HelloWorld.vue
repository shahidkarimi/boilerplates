<template>
  <div :class="['min-h-screen', false ? 'bg-gray-900' : 'bg-gray-100', 'flex', 'flex-col']">
    <!-- Header -->
    <header class="dark:bg-slate-900 dark:text-white bg-blue-500 text-white py-4 px-6 flex justify-between items-center">
      <h1 class="text-xl">Logo</h1>
      <!-- Profile icon with dropdown -->
      <div class="relative">
        <button @click="toggleTheme" class="relative inline-flex items-center justify-center w-10 h-5 rounded-full focus:outline-none">
  <span class="sr-only">Toggle dark mode</span>
  <span :class="['w-4 h-4 bg-white rounded-full shadow-lg transform transition-transform duration-300 ease-in-out', {'translate-x-5': isDarkMode}]"></span>
  <IconLightmode v-if="isDarkMode" />

  <IconDarkmode v-else />
</button>
      </div>
    </header>
    <div class="bg-white dark:bg-slate-800 flex flex-1 overflow-hidden">
      <!-- Sidebar -->
      <aside class="bg-gray dark:bg-slate-700 bg-gray-200 w-64 p-4 flex-shrink-0">
        <button @click="getOsVersion()" class="w-full bg-blue-500 text-white py-2 rounded">
          Button 
        </button>
        <ul class="mt-4 dark:text-black">
          <li  class="relative p-2 cursor-pointer">
            <!-- Chat Item -->
            <div class="p-1 flex justify-between items-center rounded dark:text-white">
              Item 1
            </div>
          </li>
        </ul>
      </aside>

      <!-- Chat Screen -->
      <main class="bg-white dark:bg-slate-800 flex-1 p-6 flex flex-col overflow-hidden" style="margin-bottom: 150px;">
        <div class="flex-1 overflow-y-auto pr-4">
          <h1>Your Operating System is: <b>{{ osName }}</b></h1>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue';
import IconDarkmode from './icons/IconDarkmode.vue';
import IconLightmode from './icons/IconLightmode.vue';


const isDarkMode = ref(false)

const osName = ref('')

onMounted(() => {
  getOsVersion();
});

function toggleTheme(index) {
  const htmlElement = document.getElementsByTagName('html')[0];

  const className = 'dark';

  htmlElement.classList.toggle(className);
}

const getOsVersion = async() => {
   let os = await window.electron.getOsDetails();
   osName.value = os;
}

</script>


<style scoped>

</style>