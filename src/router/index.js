import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";

const routes = [
  {
    path: "/",
    redirect: "login",
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/home",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
    meta: {
      title: "測試",
      keepAlive: true,
      reseType: "1",
    },
  },
  {
    path: "/bb",
    name: "bb",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/bbView.vue"),
  },
  {
    path: "/pinia",
    name: "pinia",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/piniaView.vue"),
  },
  {
    path: "/pinia",
    name: "pinia",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/piniaView.vue"),
  },
  {
    path: "/excel",
    name: "excel",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ExcelView.vue"),
  },
  {
    path: "/lodash",
    name: "lodash",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/lodash.vue"),
  },
  {
    path: "/pagination",
    name: "pagination",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/paginationView.vue"),
  },
  {
    path: "/allPluginView",
    name: "allPluginView",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/allPluginView.vue"),
  },
  {
    path: "/transfer",
    name: "transfer",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/transfer.vue"),
  },
  {
    path: "/vueUseView",
    name: "vueUseView",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/vueUseView.vue"),
  },
  {
    path: "/imgView",
    name: "imgView",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/imgView.vue"),
  },
];

const router = createRouter({
  // history: createWebHistory(), // 目前用這個會出現 Cannot GET 的錯
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const toPath = to.path;
  const fromPath = from.path;
  console.log(fromPath);
  console.log(toPath);
  next();
});

router.onError((err) => {
  console.log(err);
});

export default router;
