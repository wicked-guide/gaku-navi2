<template>
  <HeaderNav />
  <section class="wapper">
    <!-- 戻る -->
    <router-link to="/game">
      <button class="material-icons md-18">skip_previous</button>
    </router-link>
    <div class="title">81マス計算</div>
    <section class="layout">
      <!-- 式エリア -->
      <section>
        <div class="menu">
          <div class="btn-main" @click="shuffleXY">シャッフル(Esc)</div>
          <div
            class="btn-main"
            @click="
              isPlus = !isPlus;
              shuffleXY();
            "
          >
            足し算⇔掛け算(Del)
          </div>
        </div>

        <!-- 百マス -->
        <section class="display-box">
          <div
            class="type"
            v-show="isPlus"
            @click="
              isPlus = !isPlus;
              shuffleXY();
            "
          >
            +
          </div>
          <div
            class="type"
            v-show="!isPlus"
            @click="
              isPlus = !isPlus;
              shuffleXY();
            "
          >
            ×
          </div>
          <div v-for="x in arrayX" :key="x" class="th">{{ x }}</div>
          <template v-for="(c, index) in correct" :key="c">
            <div v-show="index % 9 == 0" class="th">
              {{ arrayY[index / 9] }}
            </div>
            <div :class="[c.order == count + 1 ? 'here' : 'notHere']">
              <span v-show="c.jage">{{ c.ans }}</span>
              <span v-show="c.order == count + 1">{{ answer.join("") }}</span>
            </div>
          </template>
        </section>
      </section>
      <!-- テンキー -->
      <section>
        <section class="keylayout">
          <div
            v-for="item in tenkey"
            :key="item.name"
            :class="[`key`, `key${item.code}`, item.code == key ? `hit` : ``]"
            @click="onKeyClick(item.code)"
          >
            {{ item.name }}
          </div>
        </section>
      </section>
    </section>
  </section>
</template>

<script>
import HeaderNav from "@/components/HeaderNav.vue";

export default {
  name: "BoxCalculation",
  components: {
    HeaderNav,
  },
  data() {
    return {
      // キーボード
      key: "",
      code: "",
      tenkey: [
        {
          code: "7",
          name: "7",
        },
        {
          code: "8",
          name: "8",
        },
        {
          code: "9",
          name: "9",
        },
        {
          code: "4",
          name: "4",
        },
        {
          code: "5",
          name: "5",
        },
        {
          code: "6",
          name: "6",
        },
        {
          code: "1",
          name: "1",
        },
        {
          code: "2",
          name: "2",
        },
        {
          code: "3",
          name: "3",
        },
        {
          code: "0",
          name: "0",
        },
        {
          code: "Enter",
          name: "Enter",
        },
      ],
      isPlus: true,
      // 問題
      arrayX: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      arrayY: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      correct: [],
      count: 0,
      answer: [],
      sePinpon: new Audio(require("@/assets/common/sound/pinpon2.mp3")),
      sePa: new Audio(require("@/assets/common/sound/pa.mp3")),
    };
  },
  computed: {
    test() {
      return this.correct[1];
    },
  },
  async mounted() {
    document.addEventListener("keydown", this.onKeyDown);
    await this.shuffleXY();
  },
  methods: {
    // 数値をランダム化
    shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        let r = Math.floor(Math.random() * (i + 1));
        let tmp = array[i];
        array[i] = array[r];
        array[r] = tmp;
      }
      return array;
    },
    // 初期化
    shuffleXY() {
      this.shuffleArray(this.arrayX);
      this.shuffleArray(this.arrayY);
      this.correct = [];
      this.count = 0;
      this.answer = [];
      this.arrayY.forEach((y, yIndex) => {
        this.arrayX.forEach((x, xIndex) => {
          if (this.isPlus) {
            this.correct.push({
              order: yIndex * 9 + xIndex + 1,
              ans: y + x,
              jage: false,
            });
          } else {
            this.correct.push({
              order: yIndex * 9 + xIndex + 1,
              ans: y * x,
              jage: false,
            });
          }
        });
      });
      this.sePa.play();
    },

    // キーボード入力の場合
    onKeyDown(event) {
      switch (event.key) {
        case isNaN(event.key) || event.key:
          this.onKeyClick(event.key);
          break;
        case "Enter":
          this.onEnter();
          break;
        case "Escape":
          this.shuffleXY();
          break;
        case "Delete":
          this.isPlus = !this.isPlus;
          this.shuffleXY();
          break;
      }
    },
    // 画面のボタン入力の場合
    onKeyClick(key) {
      switch (key) {
        case "Enter":
          this.onEnter();
          break;
        default:
          this.answer.push(key);
          this.key = key;
      }
    },
    onEnter() {
      if (this.answer.join("") == this.correct[this.count].ans) {
        this.sePinpon.pause();
        this.sePinpon.currentTime = 0;
        this.sePinpon.play();
        this.correct[this.count].jage = true;
        this.answer = [];
        this.count++;
      } else {
        this.sePa.play();
        this.answer = [];
      }
    },
  },
};
</script>

<style scoped>
.wapper {
  /* height: 100vh; */
  padding: 1rem;
}
.title {
  margin: 1rem;
  font-size: larger;
  font-weight: bold;
}
.layout {
  padding: 2rem;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
}
.menu {
  display: flex;
  justify-content: space-between;
}
.display-box {
  margin: auto;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  text-align: center;
  font-size: xx-large;
}
.display-box .type {
  color: white;
  background-color: var(--sub-color);
  user-select: none;
}
.display-box .th {
  color: white;
  background-color: var(--main-color);
}
.display-box div {
  margin: 1px;
  border: rgba(var(--main-color-rgb), 0.3) solid 1px;
}
.here {
  background-color: rgba(var(--main-color-rgb), 0.5);
}
.notHere {
  background-color: white;
}
.keylayout {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
.key {
  margin: 0.1rem;
  padding: 0.5rem;
  white-space: pre-wrap;
  text-align: center;
  font-size: xx-large;
  font-weight: bold;
  background-color: white;
  border: solid 1px gray;
  border-radius: 0.5rem;
}
.keyEnter {
  grid-column: 2/4;
}
</style>
