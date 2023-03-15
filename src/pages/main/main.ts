import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import elementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import '@/assets/css/iconfont.css'
import '@/assets/css/reset.css'
import ckui from 'chunk-ui'
import epc from 'cctc-epc'

createApp(App).use(elementPlus, { locale: zhCn }).use(ckui, {}).use(epc, {
  service: import.meta.env.VITE_APP_service,
  token: import.meta.env.VITE_APP_token
}).use(router).mount('#app')
