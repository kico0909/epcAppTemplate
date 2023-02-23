<template>
  <div class="m-b-body">
    <p>
    这是EPC子应用
    </p>
    <p>
      ValUrl: {{ ValTest }} / {{ $router.currentRoute.value.query.t }}
    </p>
    <p>
      <el-button @click="FuncSendMessage">全局消息</el-button>
      <el-button @click="FuncSendConfirm">全局二次确认</el-button>
      <el-button @click="FuncSendNote">全局通知</el-button>
      <el-button @click="FuncOpenPop">全局弹窗</el-button>
    </p>
  </div>
</template>

<script lang="ts" setup>
import { watch, ref, onMounted, defineProps, PropType } from 'vue';
import { useRouter } from 'vue-router'

const router = useRouter()
const ValTest = ref('')


// 子应用呼叫全局弹窗方法
function FuncOpenPop(evt: MouseEvent) {
  window.EPC.pop.open({
    contUrl: '/pop/#/demo'
  }).then(rs => {
    console.log('↓↓↓↓↓↓↓↓↓↓ 子应用弹窗返回数据 ↓↓↓↓↓↓↓↓↓↓\n', rs, '\n↑↑↑↑↑↑↑↑↑↑ END ↑↑↑↑↑↑↑↑↑↑');
  })
}

// 子应用发送全局提醒的方法
function FuncSendMessage() {
  window.EPC.message.send('子应用发送的消息', {type: 'error'})
}

// 子应用发送全局二次确认提示的方法
function FuncSendConfirm() {
  window.EPC.message.confirm('子应用发送的消息?', '测试消息', {type: 'success'})?.then(rs => {
    console.log('↓↓↓↓↓↓↓↓↓↓ 确认窗点击确认按钮后 ↓↓↓↓↓↓↓↓↓↓\n', '执行通过代码', '\n↑↑↑↑↑↑↑↑↑↑ END ↑↑↑↑↑↑↑↑↑↑');
  }).catch(e => {
    console.log('↓↓↓↓↓↓↓↓↓↓ 确认窗点击取消按钮后 ↓↓↓↓↓↓↓↓↓↓\n', '执行取消代码[注意: 此处暂不支持]', '\n↑↑↑↑↑↑↑↑↑↑ END ↑↑↑↑↑↑↑↑↑↑');
  })
}

// 子应用发送全局通知的方法
function FuncSendNote() {
  window.EPC.notification('子应用发送的通知', '测试通知', {type: 'error', duration: 1000})
}

onMounted(() => {
  const {currentRoute} = router
  const {query} = currentRoute.value
  ValTest.value = query.t as string

  setInterval(() => {
    router.push({
      name: 'Home',
      query: {
        t: Math.random()
      }
    })
  }, 3000)
})
</script>

<style lang="less" scoped>
.m-b-body{
  position: relative; z-index: 100; width: 100%; height: 100%; overflow: hidden; box-sizing: border-box;
  p{ width: 100%; line-height: 30px; display: flex; justify-content: flex-start; align-items: center;}
}

</style>
