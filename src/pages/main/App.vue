<template>
  <epc-main-box 
    :level="1"
    jwt="1630826193724661760"
    title="中国建科-EPC应用XXX"
    @user-info="FuncPullUserInfo"
    ref="mf"
  >
    <template #titleExpand>EPC应用</template>
    <template #titleFold>EPC</template>
    <template #menu="{expand}">
      <epcMenu v-model:data="MenuData" :state="expand" @handleMenuClick="$router.push({path: $event.router})"></epcMenu>
    </template>
    <template #default>
      <router-view />
    </template>
  </epc-main-box>
</template>

<script lang="ts" setup>
import {ref} from 'vue'

const MenuData = ref([
{
    id: '1',
    parentId: '-1',
    icon: 'iconauthorization',
    title: '菜单1',
    key: 'menu1',
    router: '/menu1',
    children: [],
  }
])

const mf = ref()
function FuncPullUserInfo(d: any) {
  console.log('↓↓↓↓↓↓↓↓↓↓ user-info ↓↓↓↓↓↓↓↓↓↓\n', d, '\n↑↑↑↑↑↑↑↑↑↑ END ↑↑↑↑↑↑↑↑↑↑');
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
