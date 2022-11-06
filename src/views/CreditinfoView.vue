<template>
  <HeaderNav></HeaderNav>
  <section class="wapper">
    <img alt="ロゴ" src="../assets/logo.png" />
    <div>利用素材</div>
    <table>
      <tr v-for="(item, index) in credit" :key="index">
        <th>{{ item.type }}</th>
        <td>{{ item.name }}</td>
      </tr>
    </table>
  </section>
</template>

<script>
import HeaderNav from "@/components/HeaderNav.vue";
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "HomeView",
  components: {
    HeaderNav,
  },
  data() {
    return {
      credit: [
        // { type: "キャラ画像", name: "stable diffusion" },
        { type: "キャラボイス", name: "vocebox" },
        { type: "画像", name: "kumono" },
        { type: "", name: "Canva" },
        { type: "", name: "いらすとや" },
        { type: "", name: "stable diffusion" },
      ],
    };
  },
};
</script>

<style scoped>
.wapper {
  padding: 2rem;
}
table {
  text-align: left;
}
</style>
