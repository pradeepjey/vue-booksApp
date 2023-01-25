import { createWebHistory, createRouter } from "vue-router";
import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    alias: "/dashboard",
    name: "dashboard",
    component: () => import("./views/Dashboard.vue"),
  },
  {
    path: "/book/:id",
    name: "book",
    component: () => import("./views/BookDetails.vue"),
    props: true
  },
  {
    path: "/favourite",
    name: "favourite",
    component: () => import("./views/Favourite.vue"),
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;