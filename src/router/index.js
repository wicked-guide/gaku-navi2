import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import IndexView from "../views/IndexView.vue";
import IndexListView from "../views/IndexListView.vue";
import LectureView from "../views/LectureView.vue";
import CreditinfoView from "../views/CreditinfoView.vue";
import GameIndexView from "../views/GameIndexView.vue";
import GameView from "../views/GameView.vue";

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
    path: "/home",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
