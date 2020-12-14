import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home'

Vue.use(VueRouter)

const routes = [
  {
    /* 根路径下指定跳转到home */
    path: '/',
    name: 'home',
    components: {
      default: Home
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
