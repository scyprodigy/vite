import { createRouter, createWebHistory } from "vue-router";
import Loading from "../components/Loading.vue";

import DayLayout from "../views/DayLayout.vue";
import ProjectMenu from "../components/ProjectMenu.vue";
import MemberCenterMenu from "../components/MemberCenterMenu.vue";

//==================因為下方使用懶加載，這段不需要====================

// import Phantasia from "../views/Phantasia.vue";
// import About from "../views/About.vue";

// MyCabin 個人頁面
// import MyCabin from "../views/MyCabin/MyCabin.vue";
// import MyBookcase from "../views/MyCabin/MyBookcase.vue";
// import MyColset from "../views/MyCabin/MyColset.vue";
// import MyRewardCard from "../views/MyCabin/MyRewardCard.vue";

// products 商品頁
// import Products from "@/views/Products/Products.vue";
// import ProductsInfo from "@/views/Products/ProductsInfo.vue";
// import ProductsRead from "@/views/Products/ProductsRead.vue";
// ================================================================

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/Phantasia.vue"), // 懶加載(可以提升效能)
      loading: Loading,
    },
    {
      path: "/About",
      name: "about",
      component: () => import("@/views/About.vue"),
      loading: Loading,
    },

    {
      path: "/MyCabin",
      component: DayLayout, // 使用共用佈局
      children: [
        {
          path: "",
          name: "MyCabin",
          component: () => import("@/views/MyCabin/MyCabin.vue"),
        },
        {
          path: "MyBookcase",
          name: "MyBookcase",
          component: () => import("@/views/MyCabin/MyBookcase.vue"),
        },
        {
          path: "MyColset",
          name: "MyColset",
          component: () => import("@/views/MyCabin/MyColset.vue"),
        },
        {
          path: "MyRewardCard",
          name: "MyRewardCard",
          component: () => import("@/views/MyCabin/MyRewardCard.vue"),
        },
      ],
    },

    {
      path: "/Products",
      component: DayLayout, // 使用共用佈局
      children: [
        {
          path: "",
          name: "productList", // 商品列表頁
          component: () => import("@/views/Products/Products.vue"),
        },
        {
          path: ":id", // 商品詳細頁
          name: "productInfo",
          component: () => import("@/views/Products/ProductsInfo.vue"),
        },
        {
          path: ":id/read", // 進入線上閱讀頁
          name: "productRead",
          component: () => import("@/views/Products/ProductsRead.vue"),
        },
      ],
    },

    {
      path: "/CreateProject",
      component: DayLayout, // 使用共用佈局 DayLayout
      children: [
        {
          path: "",
          component: ProjectMenu, // 風琴選單
          children: [
            {
              path: "",
              name: "CreateProject",
              component: () =>
                import("@/views/CreateProject/CreateProject.vue"),
            },
            {
              path: "Draft",
              name: "Draft",
              component: () => import("@/views/CreateProject/Draft.vue"),
            },
          ],
        },
      ],
    },

    {
      path: "/Create",
      component: DayLayout, // 使用共用佈局 DayLayout
      children: [
        {
          path: "",
          name: "Create",
          component: () => import("@/views/Project/Create/Create.vue"),
        },
        {
          path: "CreateCover",
          name: "CreateCover",
          component: () => import("@/views/Project/Create/CreateCover.vue"),
        },
        {
          path: "CreateInfo",
          name: "CreateInfo",
          component: () => import("@/views/Project/Create/CreateInfo.vue"),
        },
        {
          path: "CreateConfirm",
          name: "CreateConfirm",
          component: () => import("@/views/Project/Create/CreateConfirm.vue"),
        },
      ],
    },

    {
      path: "/MemberCenter",
      component: DayLayout, // 使用共用佈局 DayLayout
      children: [
        {
          path: "",
          component: MemberCenterMenu, // 風琴選單
          children: [
            {
              path: "",
              name: "MemberCenter",
              component: () => import("@/views/MemberCenter/MemberCenter.vue"),
            },
            {
              path: "MyPlanSubscribed",
              name: "MyPlanSubscribed",
              component: () =>
                import("@/views/MemberCenter/MyPlanSubscribed.vue"),
            },
            {
              path: "MyPlanVisitor",
              name: "MyPlanVisitor",
              component: () => import("@/views/MemberCenter/MyPlanVisitor.vue"),
            },
            {
              path: "MyPlanCancel",
              name: "MyPlanCancel",
              component: () => import("@/views/MemberCenter/MyPlanCancel.vue"),
            },
            {
              path: "SubscriptionStatus",
              name: "SubscriptionStatus",
              component: () =>
                import("@/views/MemberCenter/SubscriptionStatus.vue"),
            },
            {
              path: "PurchaseHistory",
              name: "PurchaseHistory",
              component: () =>
                import("@/views/MemberCenter/PurchaseHistory.vue"),
            },

            {
              path: "MyProjects",
              name: "MyProjects",
              component: () => import("@/views/MemberCenter/MyProjects.vue"),
            },
            {
              path: "MyProjectsRemoved",
              name: "MyProjectsRemoved",
              component: () =>
                import("@/views/MemberCenter/MyProjectsRemoved.vue"),
            },
            {
              path: "AccountSetting",
              name: "AccountSetting",
              component: () =>
                import("@/views/MemberCenter/AccountSetting.vue"),
            },
            {
              path: "FAQ",
              name: "FAQ",
              component: () => import("@/views/MemberCenter/FAQ.vue"),
            },
          ],
        },
      ],
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
