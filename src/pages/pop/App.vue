<!--
 * @Author: ChunkDing
 * @Date: ...
 * @Description: ...
 * Copyright (c) 2022 by ChunkDing, All Rights Reserved.
-->
<template>
  <router-view />
</template>

<script lang="ts" setup>

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
