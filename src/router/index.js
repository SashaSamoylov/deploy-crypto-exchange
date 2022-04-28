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
    path: '/details',
    name: 'Details',
    meta: {
      layout: 'main',
      title: 'Order details'
    },
    component: () => import('../views/Details.vue')
  },
  {
    path: '/support',
    name: 'Support',
    meta: { layout: 'main' },
    component: () => import('../views/Support.vue')
  },
  {
    path: '/spot',
    name: 'Spot',
    meta: {
      layout: 'main',
      title: 'Spot',
      admin: true
    },
    component: () => import('../views/Spot.vue')
  },
  {
    path: '/future',
    name: 'Future',
    meta: {
      layout: 'main',
      title: 'Future',
      admin: true
    },
    component: () => import('../views/Future.vue')
  },
  {
    path: '/deposit',
    name: 'Deposit',
    meta: {
      layout: 'main'
    },
    component: () => import('../views/Deposit.vue')
  },
  {
    path: '/deposit-history',
    name: 'DepositHistory',
    meta: {
      layout: 'main',
      title: 'Deposit History',
      admin: true
    },
    component: () => import('../views/DepositHistory.vue')
  },
  {
    path: '/withdrawl',
    name: 'Withdrawl',
    meta: {
      layout: 'main'
    },
    component: () => import('../views/Withdrawl.vue')
  },
  {
    path: '/security',
    name: 'Security',
    meta: {
      layout: 'main',
      title: 'Security',
      admin: true
    },
    component: () => import('../views/Security.vue')
  },
  {
    path: '/overview',
    name: 'Overview',
    meta: {
      layout: 'main',
      title: 'Overview',
      admin: true
    },
    component: () => import('../views/Overview.vue')
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    meta: { layout: 'empty' },
    component: () => import('../views/SignUp.vue')
  },
  {
    path: '/login',
    name: 'Login',
    meta: { layout: 'empty' },
    component: () => import('../views/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
