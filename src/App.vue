<template>
  <el-button> I am ElButton </el-button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ElButton } from 'element-plus';

export default defineComponent({
  name: 'app',
  components: {
    ElButton,
  },
});
</script>
