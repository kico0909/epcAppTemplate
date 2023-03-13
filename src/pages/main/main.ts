import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import elementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
// import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/src/index.scss';
import '@/assets/css/iconfont.css'
import '@/assets/css/reset.css'
import ckui from 'chunk-ui'
import epc from 'cctc-epc'

createApp(App).use(elementPlus, { locale: zhCn }).use(ckui).use(epc, {
  service: 'http://api.chunkding.com/mock/180',
  token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHBpcmVfdGltZSI6MTcwOTg2MDMzNzMxNH0.QlitfW6yTqbLwsX4bkZSBzv6AkG_lhet8eRTSp-NDUM'
}).use(router).mount('#app')
