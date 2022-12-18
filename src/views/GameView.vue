<template>
  <HeaderNav></HeaderNav>
  <section class="wapper">
    {{ id }}

    <!-- 問題 -->
    <section>
      <div>問題</div>
    </section>

    <!-- モグラ -->
    <section>
      <table>
        <tr>
          <td>
            <img src="@/assets/games/img/mole.png" />
            <div class="ans">50</div>
          </td>
          <td>
            <img src="@/assets/games/img/mole.png" />
            <div class="ans">50</div>
          </td>
          <td>
            <img src="@/assets/games/img/mole.png" />
            <div class="ans">50</div>
          </td>
        </tr>
      </table>
    </section>
  </section>
</template>

<script>
import HeaderNav from "@/components/HeaderNav.vue";

export default {
  name: "GameView",
  components: {
    HeaderNav,
  },
  data() {
    return {
      id: this.$route.params.id, // パスパラメータ：ID
    };
  },
};
</script>

<style scoped>
.wapper {
  margin: 2rem auto;
  padding: 0 2rem;
  cursor: url("@/assets/games/img/hummer.png") 40 40, auto;
}
.wapper:active {
  cursor: url("@/assets/games/img/hummer_hit.png") 40 40, auto;
}

.wapper table {
  margin: auto;
  text-align: center;
}

td img {
  max-width: 100%;
  max-height: 20vh;
}

.ans {
  margin-top: -3rem;
  font-size: xxx-large;
  background-color: white;
}
</style>
