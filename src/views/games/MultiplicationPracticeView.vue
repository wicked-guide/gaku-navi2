<template>
  <HeaderNav />
  <section class="wapper">
    <!-- 戻る -->
    <router-link to="/game">
      <button class="material-icons md-18">skip_previous</button>
    </router-link>
    <div class="title">かけ算超入門</div>

    <section class="layout">
      <!-- 式エリア -->
      <section class="formula-area">
        <!-- 式 -->
        <section class="formula">
          <span :class="{ here: column == 0 }">{{ numX }}</span>
          <span>×</span>
          <span :class="{ here: column == 1 }">{{ numY }}</span>
          <span>=</span>
          <span :class="{ here: column == 2 }">{{ answer.join("") }}</span>

          <img :src="imgCheck" alt="check" class="check" v-show="isCorrect" />
        </section>

        <!-- ヒント -->
        <section class="hint-area">
          <hr />
          <div class="hintbtn flex">
            <span
              @click="showHint = !showHint"
              :class="showHint ? 'btn-main' : 'btn-off'"
            >
              ヒント
            </span>
            <span
              @click="showcheat = !showcheat"
              :class="showcheat ? 'btn-main' : 'btn-off'"
              v-show="showHint"
            >
              カンニング
            </span>
          </div>

          <section v-show="showHint">
            <div v-for="yItem in numY" :key="yItem" class="display-box">
              <span v-for="xItem in numX" :key="xItem" class="box-item">
                <img :src="imgApple" alt="apple" class="apple" />
                <div v-show="showcheat" class="cheat">
                  {{ numX * (yItem - 1) + xItem }}
                </div>
              </span>
            </div>
          </section>
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
  name: "MultiplicationPracticeView",
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
      // 問題
      column: 0,
      numX: 1,
      numY: 1,
      answer: [],
      showHint: true,
      showcheat: false,
      isCorrect: false,
      // 素材
      imgApple: require("@/assets/common/img/apple.png"),
      imgCheck: require("@/assets/common/img/check.png"),
      sePinpon: new Audio(require("@/assets/common/sound/pinpon2.mp3")),
      sePa: new Audio(require("@/assets/common/sound/pa.mp3")),
    };
  },
  computed: {},
  mounted() {
    document.addEventListener("keydown", this.onKeyDown);
  },
  methods: {
    // キーボード入力の場合
    onKeyDown(event) {
      if (!isNaN(event.key)) {
        this.onKeyClick(event.key);
      } else if (event.key == "Enter") {
        this.onEnter();
      }
    },
    // 画面のボタン入力の場合
    onKeyClick(key) {
      switch (key) {
        case "Enter":
          this.onEnter();
          break;
        default:
          switch (this.column) {
            case 0:
              this.numX = Number(key);
              this.column = 1;
              break;
            case 1:
              this.numY = Number(key);
              this.column = 2;
              break;
            case 2:
              this.answer.push(key);
              break;
          }
      }
    },
    onEnter() {
      if (!this.isCorrect) {
        switch (this.column) {
          // 正解時
          case 2:
            if (this.answer.join("") == this.numX * this.numY) {
              this.isCorrect = true;
              this.sePinpon.play();
              this.sePinpon.addEventListener("ended", () => {
                this.column = 0;
                this.numX = 1;
                this.numY = 1;
                this.answer = [];
                this.isCorrect = false;
              });
            } else {
              this.sePa.play();
              this.answer = [];
            }
            break;
        }
      }
    },
  },
};
</script>

<style scoped>
.wapper {
  padding: 1rem;
  min-height: 100%;
  box-sizing: border-box;
  background-color: var(--back-color);
  user-select: none;
}
.layout {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
}
.hint-area {
  max-width: 500px;
  margin: auto;
}
.hintbtn span {
  margin: 0.2rem;
}
.title {
  margin: 1rem;
  font-size: larger;
  font-weight: bold;
}

.formula {
  max-width: 500px;
  margin: 0 auto;
  padding: 0.5rem;
  text-align: center;
  font-size: 3rem;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  position: sticky;
  top: 2rem;
  z-index: 10;
  background-color: var(--back-color);
}
.display-box {
  max-width: 500px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(9, 1fr);
}
.box-item {
  position: relative;
}
.apple,
.check {
  max-width: 100%;
  max-height: 3rem;
  margin: auto;
}
.keylayout {
  position: sticky;
  top: 2rem;
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
  cursor: pointer;
}
.keyEnter {
  grid-column: 2/4;
}
.here {
  background-color: var(--main-color-ba);
  border-radius: 0.5rem;
}
.hintOn {
  padding: 0.5rem;
  text-align: center;
  background-color: var(--main-color-b);
  border: solid 1px gray;
  border-radius: 0.5rem;
}
.hintOff {
  padding: 0.5rem;
  text-align: center;
  background-color: darkgray;
  border: solid 1px gray;
  border-radius: 0.5rem;
}
.cheat {
  position: absolute;
  top: 30%;
  right: 40%;
  font-size: x-large;
  color: white;
}
@media (max-width: 500px) {
  .title {
    display: none;
  }
  .layout {
    height: calc(100vh - 6rem);
    display: flex;
    flex-direction: column;
    gap: 0;
  }
  .formula-area {
    margin: 0.5rem 0 auto;
  }
}
</style>
