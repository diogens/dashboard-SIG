import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../pages/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home
  },
  {
    path: "/home2",
    name: "Home2",
    component: Home
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
