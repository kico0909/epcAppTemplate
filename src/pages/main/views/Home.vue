<template>
  <epc-frame-box>
    <template #header>
      <epc-sub-title-show>
        <el-breadcrumb-item>epc子应用</el-breadcrumb-item>
      </epc-sub-title-show>
    </template>
    <template #body>
      应用内容区 - 自行脑补
    </template>
  </epc-frame-box>
</template>

<script lang="ts" setup>
import { watch, ref, onMounted, defineProps, PropType } from 'vue';

onMounted(() => {
  
})
</script>

<style lang="less" scoped>
.m-b-body{
  display: flex; justify-content: center; align-items: center;
}

</style>
