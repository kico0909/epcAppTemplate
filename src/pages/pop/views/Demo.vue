<template>
  <Pop :submit="FuncMakeReData" :close="FuncClose">
    <template #default>
      <div class="m-b-body">
        <el-input v-model="ValReData"></el-input>
      </div>
    </template>
  </Pop>
    
  </template>
  
  <script lang="ts" setup>
  import { watch, ref, onMounted, defineProps, PropType } from 'vue';
  import Pop from '@c/FullScreenPopContent/FullScreenPopContent.vue'
  
  const ValReData = ref('')
  function FuncMakeReData() {
    return {
      a: ValReData.value,
      b: Math.random(),
    }
  }
  
  function FuncClose() {
    console.log('↓↓↓↓↓↓↓↓↓↓ dddd ↓↓↓↓↓↓↓↓↓↓\n', 123123, '\n↑↑↑↑↑↑↑↑↑↑ END ↑↑↑↑↑↑↑↑↑↑');
    return 0
  }
  </script>
  
  <style lang="less" scoped>
  .m-b-body{
    position: relative; z-index: 100; width: 100%; height: 100%; overflow: hidden; box-sizing: border-box;
    p{ width: 100%; line-height: 30px; display: flex; justify-content: flex-start; align-items: center;}
  }
  
  </style>
  