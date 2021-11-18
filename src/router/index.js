import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import("../views/landing/index"),
  },
  {
    path: '/sign/up',
    name: 'select-status',
    component: () => import("../components/authorization/SelectStatus")
  },
  {
    path: '/sign/up/neighbors',
    name: 'neighbors-sign-up',
    component: () => import("../components/authorization/NeighborsSignUp")
  },
  {
    path: '/sign/up/volunteers',
    name: 'volunteers-sign-up',
    component: () => import("../components/authorization/VolunteersSignUp")
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
