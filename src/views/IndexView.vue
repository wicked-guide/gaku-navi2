<!-- トップページ -->
<template>
  <!-- ヘッダー -->
  <HeaderNav></HeaderNav>

  <!-- ボディ -->
  <section class="wapper">
    <!-- メイン -->
    <section class="grid">
      <div class="card" v-for="item in course" :key="item.name">
        <!-- コース名をパスパラメータとして渡す -->
        <router-link
          :to="{ name: 'IndexList', params: { course: item.course } }"
        >
          <!-- <img :src="require('@/assets/thumbnail/' + item.course + '.png')" /> -->
          <img :src="'./thumbnail/' + item.course + '.png'" />
          <div class="title">{{ item.title }}</div>
          <div class="date">{{ item.date }}</div>
        </router-link>
      </div>
    </section>

    <!-- サブ -->
    <section></section>
  </section>

  <!-- フッター -->
  <footer>
    <div></div>
    <small>&copy;2022 wicked wonder world</small>
    <router-link to="/creditinfo">利用素材</router-link>
  </footer>
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
};
</script>

<style scoped>
.wapper {
  margin: 2rem;
}

.extra-wapper {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 1rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
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
  padding: 0 1rem;
}

.card .date {
  padding: 0 1rem 0.5rem;
  text-align: end;
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
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  background-color: gainsboro;
}
</style>
