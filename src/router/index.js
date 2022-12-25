import { createRouter, createWebHashHistory } from "vue-router";
import IndexView from "../views/IndexView.vue";
import IndexListView from "../views/IndexListView.vue";
import LectureView from "../views/LectureView.vue";
import CreditinfoView from "../views/CreditinfoView.vue";
import GameIndexView from "../views/games/GameIndexView.vue";
import GameView from "../views/games/GameView.vue";

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

  // ゲーム一覧
  {
    path: "/game",
    name: "gameIndex",
    component: GameIndexView,
  },

  // ゲーム
  {
    path: "/game/:id",
    name: "game",
    component: GameView,
  },

  // 利用素材
  {
    path: "/creditinfo",
    name: "creditinfo",
    component: CreditinfoView,
  },

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
