<template>
  <epc-main-box 
    :level="1"
    title="中国建科-EPC应用XXX"
    @user-info="FuncPullUserInfo"
    ref="RefObj"
  >
    <template #titleExpand>EPC应用</template>
    <template #titleFold>EPC</template>
    <template #menu="{expand}">
      <epcMenu v-model:data="menuData" :state="expand" @handle-menu-click="$router.push({path: $event.router})"></epcMenu>
    </template>
    <template #default>
      <router-view />
    </template>
  </epc-main-box>
</template>

<script lang="ts" setup>
import {ref} from 'vue'
import menuData from './menu';

const RefObj = ref()

// 主动刷新用户信息
function FuncRefreshUserInfo() {
  RefObj.value.refresh()
}

function FuncPullUserInfo(d: any) {
  console.log('↓↓↓↓↓↓↓↓↓↓ epc-main-box 组件在用户初始化完成后,将主动抛出用户信息供开发者使用 ↓↓↓↓↓↓↓↓↓↓\n', d, '\n↑↑↑↑↑↑↑↑↑↑ END ↑↑↑↑↑↑↑↑↑↑');
}
</script>

<style lang="less">
  html, body {
    width: 100%;
    height: 100%;
    overflow: hidden;
    overflow-y: auto;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /*text-align: center;*/
    color: #2c3e50;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
</style>
