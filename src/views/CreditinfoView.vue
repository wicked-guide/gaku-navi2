<template>
  <HeaderNav></HeaderNav>
  <section class="wapper">
    <!-- <img alt="ロゴ" src="../assets/logo.png" /> -->
    <b>お借りした素材</b>

    <section class="materials">
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
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

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
            "Canva",
            "illust8",
            "kumono",
            "Topecon Heroes",
            "stable diffusion",
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
  padding: 2rem;
}

b {
  font-size: larger;
}

.materials {
  padding: 1rem;
}

.materials ul {
  margin: 0 0 1rem;
}
</style>
