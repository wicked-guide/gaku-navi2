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
      <section class="formula-area">
        <div class="menu">
          <!-- 時間 -->
          <div class="time-area flex">
            <span
              class="material-icons btn-main myauto"
              :class="{ offbtn: !showTime }"
              @click="showTime = !showTime"
            >
              update
            </span>
            <span class="score" v-show="showTime">{{ score }}</span>
          </div>
          <div class="btn-main">
            <span class="material-icons" @click="shuffleXY"> shuffle </span
            >(Esc)
          </div>
          <div
            class="btn-main"
            @click="
              isPlus = !isPlus;
              shuffleXY();
            "
          >
            <span class="material-icons"> add </span>
            <span class="material-icons"> loop </span>
            <span class="material-icons"> close </span>(Del)
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
        <div class="good" v-show="showClear">
          <img :src="imgGood" alt="Good" />
          <div v-show="showTime">
            <span class="material-icons"> sports_score </span>
            {{ clearTime }}
          </div>
        </div>
      </section>
      <!-- テンキー -->
      <section>
        <!-- テンキー -->
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
import * as dayjs from "dayjs";

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
      // 素材
      imgGood: require("@/assets/common/img/goodjob.png"),
      sePinpon: new Audio(require("@/assets/common/sound/pinpon2.mp3")),
      sePa: new Audio(require("@/assets/common/sound/pa.mp3")),
      // 時間管理
      showTime: false,
      isMeasure: false,
      showClear: false,
      startTime: "",
      clearTime: "",
      score: "00:00",
    };
  },
  computed: {},
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
      this.showClear = false;
      this.startTime = dayjs();
      this.clearTime = "";
      this.score = "00:00";
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
      if (this.showTime && !this.isMeasure) {
        this.isMeasure = true;
        this.setStart();
        this.timeloop();
      }
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
      if (this.showTime && !this.isMeasure) {
        this.isMeasure = true;
        this.setStart();
        this.timeloop();
      }
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
      // 正解
      if (this.answer.join("") == this.correct[this.count].ans) {
        this.sePinpon.pause();
        this.sePinpon.currentTime = 0;
        this.sePinpon.play();
        this.correct[this.count].jage = true;
        this.answer = [];
        if (this.count < this.correct.length - 1) {
          this.count++;
        }
        // 全問正解
        else {
          this.showClear = true;
          this.clearTime = this.score;
          this.isMeasure = false;
        }
      }
      // 不正解
      else {
        this.sePa.play();
        this.answer = [];
      }
    },

    // 時間計測
    setStart() {
      this.startTime = dayjs();
    },

    timeloop() {
      setTimeout(() => {
        if (this.isMeasure) {
          let now = dayjs();
          this.score = dayjs(now - this.startTime).format("mm:ss");
          this.timeloop();
        }
      }, 1000);
    },
  },
};
</script>

<style scoped>
.wapper {
  padding: 1rem;
}
.title {
  margin: 0.5rem;
  font-size: larger;
  font-weight: bold;
}
.layout {
  max-width: 1000px;
  margin: auto;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
}
.formula-area {
  position: relative;
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
.offbtn {
  background-color: darkgray;
}
.score {
  margin: 0 0.3rem;
  font-size: xx-large;
}
.good {
  position: absolute;
  max-width: 100%;
  max-height: 90%;
  padding: 1rem;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -43%);
  font-size: 3rem;
  white-space: nowrap;
  background-color: white;
  text-align: center;
  border-radius: 1rem;
  border: red solid;
}
.good img {
  max-width: 100%;
  max-height: 90%;
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
/* レスポンシブ */
@media (max-width: 500px) {
  .wapper {
    padding: 0.5rem;
  }
  .title {
    display: none;
  }
  .layout {
    height: calc(100vh - 6rem);
    display: flex;
    flex-direction: column;
  }
  .formula-area {
    max-height: calc(100vh - 10rem);
    overflow: auto;
    margin-bottom: auto;
    padding-right: 0.3rem;
  }
  .display-box .th,
  .type {
    position: sticky;
    top: 0;
  }
  .type {
    z-index: 10;
  }
  .key {
    padding: 0.2rem;
  }
}
</style>
