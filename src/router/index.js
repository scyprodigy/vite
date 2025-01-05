import { createRouter, createWebHistory } from "vue-router";
import Phantasia from "../views/Phantasia.vue";
import About from "../views/About.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/Phantasia",
      name: "home",
      component: Phantasia,
    },
    {
      path: "/About",
      name: "about",
      component: About,
    },

    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import("../views/AboutView.vue"),
    // },
  ],
});

export default router;
