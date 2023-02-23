import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import {ckPostMessage} from 'chunk-ui'
const sck = new ckPostMessage(window.parent)

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to, from) => {
  const [url, hash] =  window.location.href.split('#')
  if (url) {
    sck.send<any>('urlChange', {url: `${url}${(to as any).href}`})
  }
  return true
})

export default router
