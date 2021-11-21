import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "index",
    component: () => import("../views/landing/index"),
  },
  {
    path: "/sign/up",
    name: "select-status",
    component: () => import("../components/authorization/SelectStatus"),
  },
  {
    path: "/sign/up/neighbors",
    name: "neighbors-sign-up",
    component: () => import("../components/authorization/NeighborsSignUp"),
  },
  {
    path: "/sign/up/volunteers",
    name: "volunteers-sign-up",
    component: () => import("../components/authorization/VolunteersSignUp"),
  },
  {
    path: "/volunteers/:id",
    name: "volunteers",
    component: () => import("../components/layouts/VolunteersLayout.vue"),
    meta: { isInDataBase: false },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
