<template>
  <el-button> I am ElButton </el-button>
  hoge
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ElButton } from 'element-plus';

export default defineComponent({
  name: 'Articles',
  components: {
    ElButton,
  },
});
</script>
