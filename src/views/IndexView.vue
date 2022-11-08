<!-- トップページ -->
<template>
  <section class="app">
    <!-- ヘッダー -->
    <HeaderNav></HeaderNav>

    <!-- ボディ -->
    <section class="wapper">
      <!-- メイン -->
      <!-- 検索 -->
      <input type="search" class="search" v-model="search" placeholder="検索" />

      <!-- 一覧 -->
      <section class="grid">
        <div class="card" v-for="item in searchCourse" :key="item.name">
          <!-- コース名：パスパラメータ -->
          <router-link
            :to="{ name: 'IndexList', params: { course: item.course } }"
          >
            <img :src="'./thumbnail/' + item.course + '.png'" />
            <span class="tag" v-for="(tag, index) in item.tag" :key="index">{{
              tag
            }}</span>
            <div class="title">{{ item.name }}</div>
            <div class="date">{{ item.date }}</div>
          </router-link>
        </div>
      </section>

      <!-- サブ -->
      <section></section>
    </section>

    <!-- フッター -->
    <footer>
      <!-- 説明・紹介 -->
      <section class="around">
        <!-- 左 -->
        <section></section>

        <!-- 右 -->
        <section>
          <router-link to="/creditinfo">お借りした素材</router-link>
          <!-- <div>問い合わせ(制作中)</div> -->
        </section>
      </section>

      <!-- コピーライト -->
      <small>&copy;2022 wicked wonder world</small>
    </footer>
  </section>
</template>

<script>
import HeaderNav from "@/components/HeaderNav.vue";
import axios from "axios";

export default {
  name: "IndexView",
  components: { HeaderNav },
  data() {
    return {
      course: [],
      search: "",
      extra: true,
    };
  },
  mounted() {
    // jsonからコースを取得
    const url = "./course.json";
    axios
      .get(url)
      .then((response) => (this.course = response.data))
      .catch((error) => console.log(error));
  },
  computed: {
    searchCourse() {
      // return this.course;
      return this.course.filter((e) => {
        return e.name.includes(this.search) || e.tag.includes(this.search);
      });
    },
  },
};
</script>

<style scoped>
.app {
  height: -webkit-fill-available;
  box-sizing: border-box;
  min-height: 100vh;
  padding-bottom: 5rem;
  position: relative;
}
.wapper {
  margin: 1rem 2rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  gap: 1rem;
}

/*  検索 */
.search {
  margin-bottom: 0.5rem;
  padding: 0.2rem;
  font-size: larger;
  border: solid 1px steelblue;
  border-radius: 5px;
}

/* コース */
.card {
  background-color: white;
}

.card:hover {
  box-shadow: 1px 1px 3px;
}

.card img {
  width: 100%;
}

.card .title {
  padding: 0.2rem 1rem;
}

.card .date {
  padding: 0 1rem 0.5rem;
  text-align: end;
}

.card .tag {
  margin-left: 0.3rem;
  padding: 0.2rem;
  font-size: small;
  background-color: steelblue;
  color: white;
  border-radius: 5px;
}

.card a {
  color: black;
  text-decoration: auto;
}

/* おまけ */
.extra {
  background: floralwhite;
  padding: 1rem;
  border-radius: 10px;
}

.extra a {
  display: block;
  text-decoration: none;
  color: steelblue;
  padding: 0.5rem;
  border-radius: 10px;
}

.extra a:hover {
  background-color: steelblue;
  color: white;
}

/* フッター */
footer {
  position: absolute;
  bottom: 0;
  padding: 0.5rem;
  box-sizing: border-box;
  width: 100%;
  text-align: center;
  align-items: baseline;
  background-color: gainsboro;
}

footer .around {
  display: flex;
  justify-content: space-around;
}

footer a {
  color: #222;
  text-decoration: auto;
}
</style>
