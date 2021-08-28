<script setup lang="ts">
import { System } from '@/consts/system';
import { Notification } from '@element-plus/icons';
import { ref } from '@vue/reactivity';

const loginUserName = 'Jedrich';
const pageName = 'Articles CMS';
const isCollapse = ref(true);
const circleUrl =
  'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png';
const activeIndex = '1';
</script>

<template>
  <el-menu :default-active="activeIndex" class="flex" mode="horizontal">
    <div class="flex">
      <div class="m-auto px-4">
        <el-radio-group v-model="isCollapse">
          <el-radio-button :label="false">expand</el-radio-button>
          <el-radio-button :label="true">collapse</el-radio-button>
        </el-radio-group>
      </div>
      <div class="m-auto ml-4">{{ System.name }} - {{ pageName }}</div>
    </div>

    <div class="flex-grow"></div>

    <div class="flex">
      <el-menu-item index class="px-2">
        <el-svg-icon class="inline-block">
          <notification class="w-6" />
        </el-svg-icon>
      </el-menu-item>

      <el-menu-item index>
        {{ loginUserName }}
      </el-menu-item>

      <el-sub-menu index class="mr-6">
        <template #title>
          <el-avatar :size="40" :src="circleUrl" class="align-middle mr-4" />
        </template>
        <el-menu-item index="2-1">Profile</el-menu-item>
        <el-menu-item index="2-2">Settings</el-menu-item>
        <el-menu-item index="2-3">Logout</el-menu-item>
      </el-sub-menu>
    </div>
  </el-menu>
</template>
