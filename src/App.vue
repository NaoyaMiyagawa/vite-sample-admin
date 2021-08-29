<script setup lang="ts">
import { ref } from '@vue/reactivity';
import NavBar from '@/components/NavBar.vue';
import SideBar from '@/components/SideBar.vue';

const isCollapsed = ref(false);
</script>

<template>
  <NavBar />
  <div class="flex">
    <SideBar :is-collapsed="isCollapsed" />
    <div class="flex-grow">
      <router-view />
    </div>
  </div>
</template>
