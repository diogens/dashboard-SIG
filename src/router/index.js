import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../pages/Home.vue";
import Dashboard from "../pages/Dashboad.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/dashboad",
    name: "Dashboard",
    component: Dashboard,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
