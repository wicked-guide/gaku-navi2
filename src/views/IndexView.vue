<!-- トップページ -->
<template>
  <section class="home">
    <!-- ヘッダー -->
    <header class="flex-b">
      <!-- ロゴ -->
      <router-link to="/" class="logo">がくなび</router-link>
      <!-- 検索 -->
      <div>
        <input
          type="search"
          v-model="search"
          class="search"
          placeholder="検索"
        />
      </div>

      <div></div>
    </header>

    <!-- メイン -->
    <section class="wapper">
      <section class="flex">
        <main>
          <!-- 一覧 -->
          <section class="grid">
            <div class="card" v-for="item in searchCourse" :key="item.name">
              <router-link
                :to="{ name: 'IndexList', params: { course: item.course } }"
              >
                <img
                  :src="'./thumbnail/' + item.course + '.png'"
                  alt="thumbnail"
                />

                <span
                  class="tag"
                  v-for="(tag, index) in item.tag"
                  :key="index"
                  >{{ tag }}</span
                >
                <div class="title">{{ item.name }}</div>
                <div class="date">{{ item.date }}</div>
              </router-link>
            </div>
          </section>
        </main>

        <aside>
          <section class="minigame">
            <router-link :to="{ name: 'gameIndex' }">
              <div class="title">ミニゲーム</div>
            </router-link>

            <div v-for="item in games" :key="item.id">
              <router-link :to="`/game/${item.href}`">
                {{ item.name }}
              </router-link>
            </div>
          </section>
        </aside>
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
        <small>&copy;2022 witship</small>
      </footer>
    </section>
  </section>
</template>

<script>
// import HeaderNav from "@/components/HeaderNav.vue";
import axios from "axios";

export default {
  name: "IndexView",
  // components: { HeaderNav },
  data() {
    return {
      course: [],
      search: "",
      games: [],
    };
  },
  mounted() {
    // jsonからコースを取得
    const url = "./course.json";
    axios
      .get(url)
      .then((response) => (this.course = response.data))
      .catch((error) => console.log(error));

    // jsonからゲームを取得
    const gameurl = "./games.json";
    axios
      .get(gameurl)
      .then((response) => (this.games = response.data))
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
.home {
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background-image: url("@/assets/common/background/school.jpg");
  background-position: center;
  background-size: cover;
}

/* レイアウト */
header {
  padding: 0.5rem 1rem;
  align-items: baseline;
}
.logo {
  font-size: xx-large;
  font-weight: bold;
  color: white;
}

.wapper {
  overflow: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
}
/* メインエリア */
main {
  margin: 0 1rem 1rem;
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
  border: solid 1px var(--main-color);
  border-radius: 5px;
}

/* コース */
.card {
  background-color: white;
  transition: box-shadow 0.3s;
}

.card:hover {
  box-shadow: 3px 3px 5px;
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
  background-color: var(--main-color);
  color: white;
  border-radius: 5px;
}

.card a {
  color: black;
  text-decoration: auto;
}
/* サブ */
aside {
  height: fit-content;
  margin-right: 1rem;
  padding: 0.5rem;
  color: white;
  white-space: nowrap;

  background-color: var(--dark7);
  border-radius: 0.5rem;
}
/* フッター */
footer {
  margin: auto 0 0.5rem;
  text-align: center;
  color: white;
}
</style>
