import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import loginView from "../views/loginView.vue";
import signUpView from "../views/signUpView.vue";
import signUpStepperView from "../views/signUpStepperView.vue";
import ProfileView from "../views/ProfileView.vue";
import ReadArticleView from "../views/ReadArticleView.vue";
import AddArticleView from "../views/AddArticleView.vue";
import ContactUs from "../views/ContactUs.vue";
import ResultatSearch from "../views/ResultatSearch.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/contact-us",
    name: "contact-us",
    component: ContactUs,
  },
  {
    path: "/login",
    name: "login",
    component: loginView,
  },
  {
    path: "/Result",
    name: "Result",
    component: ResultatSearch ,
  },
  {
    path: "/sign-up",
    name: "sign-up",
    component: signUpView,
  },
  {
    path: "/sign-up/form",
    name: "sign-up-form",
    component: signUpStepperView,
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
  // {
  //   path: "/add-article",
  //   name: "AddArticleView",
  //   component: AddArticleView,
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
