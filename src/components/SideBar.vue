<script setup lang="ts">
defineProps({
  isCollapsed: { type: Boolean, reqired: true },
});
</script>

<template>
  <el-menu
    id="app-side-bar"
    :collapse="isCollapsed"
    default-active="2"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <!-- Dashboard -->
    <el-menu-item index="1">
      <i class="el-icon-data-analysis"></i>
      <span>Dashboard</span>
    </el-menu-item>

    <!-- Articles -->
    <el-menu-item index="2">
      <i class="el-icon-notebook-2"></i>
      <span>Articles</span>
    </el-menu-item>

    <!-- Users -->
    <el-menu-item index="3">
      <i class="el-icon-user"></i>
      <span>Users</span>
    </el-menu-item>
  </el-menu>
</template>

<style lang="scss" scoped>
$nav-bar-height: 56px;
#app-side-bar {
  height: calc(100vh - #{$nav-bar-height});

  &:not(.el-menu--collapse) {
    width: 200px;
  }
}
</style>
