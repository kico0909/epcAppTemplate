<template>
  <epc-main-box 
    :level="1"
    title="中国建科-EPC应用XXX"
    @user-info="FuncPullUserInfo"
    ref="RefObj"
  >
    <template #titleExpand>{{ ValAppTitle }}</template>
    <template #titleFold>{{ ValAppShortTitle }}</template>
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
import menuData from './menu'; // 菜单数据写在同级目录的 menu.ts 文件中, 可根据实际需求进行菜单数据的异步改造

const RefObj = ref()
const ValAppTitle = ref(import.meta.env.VITE_APP_app_title)
const ValAppShortTitle = ref(import.meta.env.VITE_APP_app_short_title)

// 主动刷新用户信息
function FuncRefreshUserInfo() {
  RefObj.value.refresh()
}

function FuncPullUserInfo(d: any) {
  console.log('↓↓↓↓↓↓↓↓↓↓ epc-main-box 组件在用户初始化完成后,将主动抛出用户信息供开发者使用 ↓↓↓↓↓↓↓↓↓↓\n', d, '\n↑↑↑↑↑↑↑↑↑↑ END ↑↑↑↑↑↑↑↑↑↑');
  setTimeout(() => {
    console.log('↓↓↓↓↓↓↓↓↓↓ 演示: 延时5秒后通过主框架刷新用户信息 ↓↓↓↓↓↓↓↓↓↓\n', '刷新用户信息', '\n↑↑↑↑↑↑↑↑↑↑ END ↑↑↑↑↑↑↑↑↑↑');
    FuncRefreshUserInfo()
  }, 5000)
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
