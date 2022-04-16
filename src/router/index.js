import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: { layout: 'main' },
    component: () => import('../views/Home.vue')
  },
  {
    path: '/trade',
    name: 'Trade',
    meta: { layout: 'main' },
    component: () => import('../views/Trade.vue')
  },
  {
    path: '/news',
    name: 'News',
    meta: { layout: 'main' },
    component: () => import('../views/News.vue')
  },
  {
    path: '/account',
    name: 'Account',
    meta: { layout: 'main' },
    component: () => import('../views/Account.vue')
  },
  {
    path: '/order',
    name: 'Order',
    meta: {
      layout: 'main',
      title: 'Buy Put / Call Order'
    },
    component: () => import('../views/Order.vue')
  },
  {
    path: '/support',
    name: 'Support',
    meta: { layout: 'main' },
    component: () => import('../views/Support.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
