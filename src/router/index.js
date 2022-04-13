import { createRouter, createWebHistory } from "vue-router";

import Home from "./../views/Home.vue";

function lazyLoad(view) {
  return () => import(`./../views/${view}.vue`);
}

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/sobre",
    name: "Sobre",
    component: lazyLoad("Sobre"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: lazyLoad("NotFound"),
    meta: { layout: "empty" },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
