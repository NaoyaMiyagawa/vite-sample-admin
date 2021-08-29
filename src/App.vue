<script setup lang="ts">
import { ref } from '@vue/reactivity';
import NavBar from '@/components/NavBar.vue';
import SideBar from '@/components/SideBar.vue';

let isCollapsed = ref(false);
const toggleSideBar = () => {
  isCollapsed.value = !isCollapsed.value;
};
</script>

<template>
  <NavBar :is-collapsed="isCollapsed" @toggle-side-bar="toggleSideBar" />
  <div class="flex">
    <SideBar :is-collapsed="isCollapsed" />
    <div class="flex-grow">
      <router-view />
    </div>
  </div>
</template>
