<!-- ミニゲーム一覧 -->
<template>
  <HeaderNav></HeaderNav>
  <main>
    <div class="title">ミニゲーム</div>
    <!-- 一覧 -->
    <ul class="card-layout">
      <li v-for="item in games" :key="item.id" class="card">
        <router-link :to="'game/' + item.href">
          <div>
            <strong> {{ item.name }}</strong>
          </div>
          <section>
            <span class="tag" v-for="(tag, index) in item.tag" :key="index">
              {{ tag }}
            </span>
          </section>
          <div class="description">{{ item.description }}</div>
        </router-link>
      </li>
    </ul>
  </main>
</template>

<script>
import HeaderNav from "@/components/HeaderNav.vue";
import axios from "axios";

export default {
  name: "GameIndexView",
  components: { HeaderNav },
  data() {
    return {
      games: [],
    };
  },
  mounted() {
    // jsonからゲームを取得
    const gameUrl = "./games.json";
    axios
      .get(gameUrl)
      .then((response) => (this.games = response.data))
      .catch((error) => console.log(error));
  },
};
</script>

<style scoped>
main {
  height: 100vh;
  padding: 2rem;
  background-color: var(--back-color);
}
.title {
  font-size: x-large;
  font-weight: bold;
}
.card-layout {
  padding: 0;
  display: grid;
  gap: 0.5rem;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
}

.card {
  list-style: none;
  background-color: white;
  border: solid var(--main-color-b) 1px;
  border-radius: 0.5rem;
}

.card strong {
  font-size: large;
}

.card:hover {
  box-shadow: 2px 2px 5px;
}

.card a {
  height: 100%;
  box-sizing: border-box;
  padding: 0.3rem;
  display: flex;
  flex-direction: column;
  color: var(--text-color);
  text-decoration: none;
}

.card .tag {
  margin-left: 0.3rem;
  padding: 0.2rem;
  font-size: small;
  background-color: var(--main-color-b);
  color: white;
  border-radius: 5px;
}

.card .description {
  white-space: break-spaces;
}
</style>
