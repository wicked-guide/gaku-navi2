<template>
  <section class="wapper">
    <!-- <router-link to="/" class="logo">がくなび</router-link> -->
    <HeaderNav />
    <section class="materials">
      <b>お借りした素材</b>
      <div v-for="(item, index) in credit" :key="index">
        <b>{{ item.type }}</b>
        <ul>
          <li v-for="(name, index) in item.names" :key="index">{{ name }}</li>
        </ul>
      </div>
    </section>
  </section>
</template>

<script>
import HeaderNav from "@/components/HeaderNav.vue";

export default {
  name: "CreditinfoView",
  components: {
    HeaderNav,
  },
  data() {
    return {
      credit: [
        { type: "キャラボイス", names: ["voicevox"] },
        {
          type: "画像",
          names: [
            "icon-rainbow",
            "illust8",
            "イラストAC",
            "huggingface",
            "Topecon Heroes",
            "イラストパーク",
            "いらすとや",
            "パブリックドメインQ",
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
.wapper {
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.materials {
  min-width: 800px;
  margin: 1rem auto;
  padding: 2rem;
  font-size: x-large;
  color: white;
  background-color: var(--dark);
  border-radius: 1rem;
}

.materials ul {
  margin: 0 0 1rem;
}
</style>
