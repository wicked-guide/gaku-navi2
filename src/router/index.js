import { createRouter, createWebHashHistory } from "vue-router";
import IndexView from "../views/IndexView.vue";
import IndexListView from "../views/IndexListView.vue";
import LectureView from "../views/LectureView.vue";
import CreditinfoView from "../views/CreditinfoView.vue";

const routes = [
  // トップページ
  {
    path: "/",
    name: "index",
    component: IndexView,
  },

  // 目次
  {
    path: "/:course",
    name: "IndexList",
    component: IndexListView,
  },

  // レクチャー
  {
    path: "/:course/:id",
    name: "lecture",
    component: LectureView,
  },

  // 利用素材
  {
    path: "/creditinfo",
    name: "creditinfo",
    component: CreditinfoView,
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
