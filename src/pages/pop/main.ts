import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import elementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'element-plus/dist/index.css'
import '@/assets/css/reset.css'
import ckui from 'chunk-ui'

createApp(App).use(elementPlus, { locale: zhCn }).use(ckui).use(router).mount('#app')
