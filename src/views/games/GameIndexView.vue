<!-- ミニゲーム一覧 -->
<template>
  <HeaderNav></HeaderNav>
  <section class="wapper">
    <!-- 一覧 -->
    <section class="grid">
      <div class="card" v-for="item in games" :key="item.id">
        <router-link :to="{ name: 'game', params: { id: item.id } }">
          <div class="title">{{ item.name }}</div>
        </router-link>
      </div>
    </section>
  </section>
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
    const gameurl = "./games.json";
    axios
      .get(gameurl)
      .then((response) => (this.games = response.data))
      .catch((error) => console.log(error));
  },
};
</script>

<style scoped>
.wapper {
  margin: 2rem auto;
  padding: 0 2rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  gap: 1rem;
}

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
  background-color: steelblue;
  color: white;
  border-radius: 5px;
}

.card a {
  color: black;
  text-decoration: auto;
}
</style>
