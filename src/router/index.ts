import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import loginView from "../views/loginView.vue";
import signUpView from "../views/signUpView.vue";
import ProfileView from "../views/ProfileView.vue";
import ReadArticleView from "../views/ReadArticleView.vue";
import AddArticleView from "../views/AddArticleView.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component: loginView,
  },
  {
    path: "/sign-up",
    name: "sign-up",
    component: signUpView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/profile",
    name: "profile",
    component: ProfileView,
  },
  {
    path: "/article",
    name: "article",
    component: ReadArticleView,
  },
  {
    path: "/add-article",
    name: "AddArticleView",
    component: AddArticleView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;