import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import { routers } from './router'
const routes: Array<RouteRecordRaw> = [...routers]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
})

export default router