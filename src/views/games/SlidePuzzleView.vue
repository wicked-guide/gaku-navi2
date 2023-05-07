<template>
  <HeaderNav />
  <section class="wapper">
    <!-- 戻る -->
    <router-link to="/game">
      <button class="material-icons md-18">skip_previous</button>
    </router-link>
    <div class="title">スライドパズル</div>

    <!-- ゲーム -->
    <div @click="shuffle" class="btn is-main">shuffle</div>
    <section class="flex-c">
      <section class="grid">
        <div
          v-for="(item, index) in tails"
          :key="index"
          class="tile"
          :class="{ white: item.num == 0 }"
          @click="onClick(index, item.num)"
        >
          {{ item.num }}
        </div>
        <!-- クリア -->
      </section>
      <img :src="imgGood" alt="はなまる" class="hanamaru" v-show="isClear" />
    </section>
    <hr />
    <!-- 完成図 -->
    <section class="goal mauto">
      <b>完成図</b>
      <section class="grid">
        <div
          v-for="item in goal"
          :key="item"
          class="tile"
          :class="{ white: item.num == 0 }"
        >
          {{ item.num }}
        </div>
      </section>
    </section>
  </section>
</template>

<script>
import HeaderNav from "@/components/HeaderNav.vue";

export default {
  name: "SlidePuzzle",
  components: {
    HeaderNav,
  },
  data() {
    return {
      goal: [
        { num: 0 },
        { num: 1 },
        { num: 2 },
        { num: 3 },
        { num: 4 },
        { num: 5 },
        { num: 6 },
        { num: 7 },
        { num: 8 },
        { num: 9 },
        { num: 10 },
        { num: 11 },
        { num: 12 },
        { num: 13 },
        { num: 14 },
        { num: 15 },
      ],
      tails: [
        { num: 0 },
        { num: 1 },
        { num: 2 },
        { num: 3 },
        { num: 4 },
        { num: 5 },
        { num: 6 },
        { num: 7 },
        { num: 8 },
        { num: 9 },
        { num: 10 },
        { num: 11 },
        { num: 12 },
        { num: 13 },
        { num: 14 },
        { num: 15 },
      ],
      // 素材
      imgGood: require("@/assets/common/img/goodjob.png"),
    };
  },
  mounted() {
    this.shuffle();
  },
  methods: {
    // shuffle
    shuffle() {
      for (let i = this.tails.length; 1 < i; i--) {
        let k = Math.floor(Math.random() * i);
        [this.tails[k].num, this.tails[i - 1].num] = [
          this.tails[i - 1].num,
          this.tails[k].num,
        ];
      }
    },
    // クリック処理
    onClick(index, num) {
      // 左隣が0なら
      if (index - 1 >= 0 && this.tails[index - 1].num == 0) {
        this.tails[index - 1].num = num;
        this.tails[index].num = 0;
      }
      // 右隣が0なら
      else if (index + 1 <= 15 && this.tails[index + 1].num == 0) {
        this.tails[index + 1].num = num;
        this.tails[index].num = 0;
      }
      // 上が0なら
      else if (index - 4 >= 0 && this.tails[index - 4].num == 0) {
        this.tails[index - 4].num = num;
        this.tails[index].num = 0;
      }
      // 下が0なら
      else if (index + 4 <= 15 && this.tails[index + 4].num == 0) {
        this.tails[index + 4].num = num;
        this.tails[index].num = 0;
      }
    },
  },
  computed: {
    // クリア判定
    isClear() {
      let cTail = [];
      let cGoal = [];
      this.tails.forEach((element) => {
        cTail.push(element.num);
      });
      this.goal.forEach((element) => {
        cGoal.push(element.num);
      });
      return cTail.join(",") == cGoal.join(",");
    },
  },
};
</script>

<style scoped>
.wapper {
  height: 100vh;
  padding: 2rem;
  background-color: var(--back-color);
}
.title {
  margin: 1rem;
  font-size: larger;
  font-weight: bold;
}
.tile {
  width: 5rem;
  margin: 2px;
  font-size: 3rem;
  text-align: center;
  background: white;
  border: 1px solid var(--main-color-l);
  border-radius: 0.5rem;
  box-shadow: grey 5px 5px 5px;
  cursor: pointer;
}
.tile:hover {
  background-color: var(--main-color-lt);
}
.grid {
  display: grid;
  grid-template-columns: repeat(4, auto);
  width: fit-content;
  position: relative;
}
.white {
  color: white;
}
.goal {
  width: fit-content;
  padding: 0.5rem;
  background: gainsboro;
  cursor: auto;
}
.goal .tile {
  cursor: unset;
  box-shadow: none;
}
.hanamaru {
  max-width: 10rem;
  height: 100%;
  /* position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
  padding: 1rem;
  background-color: white;
  border-radius: 1rem;
}
</style>
