import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/home/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/direct",
    name: "Direct",
    component: () =>
      import(/* webpackChunkName: "direct" */ "../views/direct/"),
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "direct" */ "../views/login/"),
  },
  {
    path: "/register",
    name: "Register",
    component: () =>
      import(/* webpackChunkName: "direct" */ "../views/register/"),
  },
  {
    path: "/explore",
    name: "Explore",
    component: () =>
      import(/* webpackChunkName: "explore" */ "../views/explore/"),
  },
  {
    path: "/profileEdit",
    name: "profileEdit",
    component: () =>
      import(/* webpackChunkName: "explore" */ "../views/profileEdit/"),
  },
  {
    path: "/profile",
    name: "profile",
    component: () =>
      import(/* webpackChunkName: "profile" */ "../views/profile"),
    children: [
      {
        path: "",
        name: "ProfilePost",
        component: () =>
          import(/* webpackChunkName: "post" */ "../views/profile/post"),
      },
      {
        path: "igtv",
        name: "ProfileIGTV",
        component: () =>
          import(/* webpackChunkName: "igtv" */ "../views/profile/igtv"),
      },
      {
        path: "save",
        name: "ProfileSave",
        component: () =>
          import(/* webpackChunkName: "save" */ "../views/profile/save"),
      },
      {
        path: "tag",
        name: "ProfileTag",
        component: () =>
          import(/* webpackChunkName: "tag" */ "../views/profile/tag"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});



router.beforeEach((to, from, next) => {
  const token = sessionStorage.getItem('vue-session-key')
  // If logged in, or going to the Login page.
  if (token || to.name === 'Login') {
    // Continue to page.
    next()
  } else {
    // Not logged in, redirect to login.
    next({name: 'Login'})
  }
})



export default router;
