<template>
  <div class="main-box">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { watch, ref, onMounted, onBeforeMount, PropType, nextTick } from 'vue';
import { ckPostMessage } from 'chunk-ui'

const props = defineProps({
  submit: {
    type: Function,
    default: null
  },
  close: {
    type: Function,
    default: null
  }
})

const sck = new ckPostMessage(window.parent)
sck.on('popWillSubmit', (d: any) => {
  if (!props.submit) {
    sck.send('subMessage', {
      message: '弹出窗体内未设置回调, 无法正确执行提交!'
    })
    throw console.error('弹出窗体内未设置回调, 无法正确执行提交!')
  }
  return props.submit()
})

sck.on('popWillClose', (d: any) => {
  if (!props.close) {
    sck.send('subMessage', {
      message: '弹出窗体内未设置回调, 无法正确执行提交!'
    })
    throw console.error('弹出窗体内未设置回调, 无法正确执行提交!')
  }
  return props.close()
})

</script>

<style lang="less" scoped>
.main-box{
  width: 100%; height: 100%; overflow: hidden; box-sizing: border-box;
  display: flex; justify-content: center; align-items: center;
}
</style>
