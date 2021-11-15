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
    path: '/signup',
    name: 'select-status',
    component: () => import("../components/authorization/SelectStatus")
  },
  {
    path: '/neighbors-signup',
    name: 'neighbors-sign-up',
    component: () => import("../components/authorization/NeighborsSignUp")
  },
  {
    path: '/volunteers-signup/',
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
