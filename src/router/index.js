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
    path: "/sign/in",
    name: "sign-in",
    component: () => import("../components/SignIn"),
  },
  {
    path: "/sign/up",
    name: "select-status",
    component: () => import("../components/registration/SelectStatus"),
  },
  {
    path: "/sign/up/:userType",
    name: "neighbors-sign-up",
    component: () => import("../components/SignUpWrapper"),
  },
  {
    path: "/sign/up/:userType",
    name: "volunteers-sign-up",
    component: () => import("../components/SignUpWrapper"),
  },
  {
    path: "/volunteers/:id",
    name: "volunteers",
    component: () => import("../components/layouts/VolunteersLayout.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
