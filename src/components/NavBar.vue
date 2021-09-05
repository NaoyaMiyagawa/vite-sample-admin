<script setup lang="ts">
import { System } from '@/consts/system';
import { ElMenu, ElSubMenu, ElMenuItem, ElIcon, ElAvatar } from 'element-plus';
import { Notification } from '@element-plus/icons';
import { computed } from '@vue/reactivity';
import { useRoute } from 'vue-router';

defineProps({
  isCollapsed: { type: Boolean, required: true },
});
defineEmits(['toggle-side-bar']);

const route = useRoute();

const { headerTitle } = (() => {
  const pageName = computed(() => route.name);
  const headerTitle = computed(() => `${System.name} - ${String(pageName.value)}`);
  return { headerTitle };
})();

const loginUserName = 'Jedrich';
const circleUrl = 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png';

const activeIndex = '1';
</script>

<template>
  <el-menu :default-active="activeIndex" class="flex" mode="horizontal">
    <div class="flex">
      <el-menu-item index class="px-4" @click="$emit('toggle-side-bar')">
        <i :class="[isCollapsed ? 'el-icon-s-unfold' : 'el-icon-s-fold']" />
      </el-menu-item>

      <div class="m-auto ml-4">{{ headerTitle }}</div>
    </div>

    <div class="flex-grow"></div>

    <div class="flex">
      <el-menu-item index class="px-2">
        <el-icon class="inline-block">
          <notification class="w-6" />
        </el-icon>
      </el-menu-item>

      <el-menu-item index>
        {{ loginUserName }}
      </el-menu-item>

      <el-sub-menu index class="mr-6">
        <template #title>
          <el-avatar :size="40" :src="circleUrl" class="mr-4 align-middle" />
        </template>
        <el-menu-item index="2-1">Profile</el-menu-item>
        <el-menu-item index="2-2">Settings</el-menu-item>
        <el-menu-item index="2-3">Logout</el-menu-item>
      </el-sub-menu>
    </div>
  </el-menu>
</template>
