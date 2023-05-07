<!-- コース別もくじページ -->
<template>
  <HeaderNav></HeaderNav>
  <section class="wapper">
    <!-- サムネイル -->
    <img
      :src="'./thumbnail/' + course + '.png'"
      class="thumbnail"
      alt="thumbnail"
    />

    <!-- もくじ -->
    <section class="contentIndex">
      <!-- パート -->
      <div v-for="(part, index) in contentIndex" :key="index">
        <div class="part">{{ part.part }}</div>

        <!-- チャプター -->
        <ol>
          <li v-for="(chapter, index) in part.chapter" :key="index">
            <router-link
              v-if="chapter.href != '#'"
              :to="{
                name: 'lecture',
                params: { course: course, id: chapter.href },
              }"
            >
              {{ chapter.title }}
            </router-link>
            <div v-else>
              <span class="making">制作中</span>
              {{ chapter.title }}
            </div>
          </li>
        </ol>
      </div>
    </section>
  </section>
</template>

<script>
import HeaderNav from "@/components/HeaderNav.vue";
import axios from "axios";

export default {
  name: "IndexListView",
  components: { HeaderNav },
  data() {
    return {
      course: this.$route.params.course, // パスパラメータ
      contentIndex: [],
    };
  },
  mounted() {
    // jsonからコースを取得
    const url = "./" + this.course + "/index.json";
    axios
      .get(url)
      .then((response) => (this.contentIndex = response.data))
      .catch((error) => {
        console.log("制作中です", error);
        this.contentIndex = [{ part: "制作中" }];
      });
  },
};
</script>

<style scoped>
.wapper {
  padding: 0 2rem 2rem;

  display: grid;
  grid-template-columns: 2fr 3fr;
  gap: 1rem;
}

@media (max-width: 800px) {
  .wapper {
    max-height: calc(100vh - 7rem);
    overflow: auto;
    display: block;
  }
}

.thumbnail {
  max-width: 100%;
}

/* もくじ */
.contentIndex {
  max-height: calc(100vh - 120px);
  overflow: auto;
  padding: 0.5rem;
  color: white;
  font-size: larger;
  background-color: var(--dark);
  border-radius: 0.5rem;
}

.contentIndex::-webkit-scrollbar {
  display: none;
}

.contentIndex .part {
  padding-left: 0.5rem;
  font-size: large;
  font-weight: bold;
  border-left: var(--main-color-l) solid 5px;
  border-bottom: solid var(--main-color-l) thin;
}

.contentIndex ol {
  margin: 0 0 1rem;
  list-style: decimal;
  font-size: larger;
}

.contentIndex ol li {
  margin: 0.2rem 0;
}

.contentIndex ol li a {
  padding: 0 0.5rem;
  text-decoration: auto;
  display: block;
}

.contentIndex ol li a:hover {
  display: block;
  color: black;
  background-color: white;
}

.making {
  padding: 0 0.5rem;
  color: darkgray;
  background: var(--disable);
  border-radius: 0.5rem;
}
</style>
