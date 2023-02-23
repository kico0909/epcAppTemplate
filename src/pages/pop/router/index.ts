/*
 * @Author: ChunkDing
 * @Date: 2022-06-15 12:21:08
 * @Description:
 * Copyright (c) 2022 by ChunkDing, All Rights Reserved.
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Demo from '../views/Demo.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/demo',
    name: 'Demo',
    component: Demo
  },
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
})

export default router
