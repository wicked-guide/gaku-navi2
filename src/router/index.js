import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  // トップページ
  {
    path: "/",
    name: "index",
    component: () => import("../views/IndexView.vue"),
  },

  // 目次
  {
    path: "/:course",
    name: "IndexList",
    component: () => import("../views/IndexListView.vue"),
  },

  // レクチャー
  {
    path: "/:course/:id",
    name: "lecture",
    component: () => import("../views/LectureView.vue"),
  },

  // 利用素材
  {
    path: "/creditinfo",
    name: "creditinfo",
    component: () => import("../views/CreditinfoView.vue"),
  },

  // ゲーム一覧
  {
    path: "/game",
    name: "gameIndex",
    component: () => import("../views/games/GameIndexView.vue"),
  },
  // タイピング
  {
    path: "/game/typing",
    name: "TouchTyping",
    component: () => import("../views/games/TouchTypingView.vue"),
  },
  // ゲーム
  // {
  //   path: "/game/:id",
  //   name: "game",
  // component: () => import("../views/games/GameView.vue"),
  // },
  // 以下不要
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
