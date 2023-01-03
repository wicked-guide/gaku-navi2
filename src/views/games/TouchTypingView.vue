<template>
  <HeaderNav></HeaderNav>
  <!-- 戻る -->
  <router-link to="/game">
    <button class="xlarge">&laquo;</button>
  </router-link>
  <section class="wapper">
    <!-- 問題選択 -->
    <nav>menu</nav>

    <!-- タイピングエリア -->
    <main class="">
      <!-- デバッグ -->
      <!-- <section>
        <div>key: {{ key }}</div>
        <div>code: {{ code }}</div>
      </section> -->
      <!-- 問題文・回答欄 -->
      <section class="question">
        <div>{{ curentQuestionJa }}</div>
        <div>
          <div>{{ curentQuestionEn }}</div>
          <hr />
          <div class="answer">{{ answer.join("") }}</div>
        </div>
      </section>

      <!-- キーボード -->
      <section>
        <section class="keylayout1">
          <div
            v-for="item in keyRow1"
            :key="item.code"
            :class="[
              `key`,
              item.key == key ? `hit` : ``,
              item.key == just ? `here` : ``,
            ]"
          >
            {{ item.name }}
          </div>
        </section>
        <section class="keylayout2">
          <div
            v-for="item in keyRow2"
            :key="item.code"
            :class="[
              `key`,
              item.key == key ? `hit` : ``,
              item.key == just ? `here` : ``,
            ]"
          >
            {{ item.name }}
          </div>
        </section>
        <section class="keylayout3">
          <div
            v-for="item in keyRow3"
            :key="item.code"
            :class="[
              `key`,
              item.key == key ? `hit` : ``,
              item.key == just ? `here` : ``,
            ]"
          >
            {{ item.name }}
          </div>
        </section>
        <section class="keylayout4">
          <div
            v-for="item in keyRow4"
            :key="item.code"
            :class="[
              `key`,
              item.key == key ? `hit` : ``,
              item.key == just ? `here` : ``,
            ]"
          >
            {{ item.name }}
          </div>
        </section>
        <section class="keylayout5">
          <div
            v-for="item in keyRow5"
            :key="item.code"
            :class="[
              `key`,
              item.key == key ? `hit` : ``,
              item.key == just ? `here` : ``,
            ]"
          >
            {{ item.name }}
          </div>
        </section>
      </section>
    </main>
  </section>
</template>

<script>
import HeaderNav from "@/components/HeaderNav.vue";

export default {
  name: "TouchTyping",
  components: {
    HeaderNav,
  },
  data() {
    return {
      id: this.$route.params.id, // パスパラメータ：ID
      key: "**",
      code: "",
      enkeys: [
        {
          name: "`",
          key: "`",
          code: "Backquote",
        },
        {
          name: 1,
          key: 1,
          code: "Digit1",
        },
        {
          name: 2,
          key: 2,
          code: "Digit2",
        },
        {
          name: 3,
          key: 3,
          code: "Digit3",
        },
        {
          name: 4,
          key: 4,
          code: "Digit4",
        },
        {
          name: 5,
          key: 5,
          code: "Digit5",
        },
        {
          name: 6,
          key: 6,
          code: "Digit6",
        },
        {
          name: 7,
          key: 7,
          code: "Digit7",
        },
        {
          name: 8,
          key: 8,
          code: "Digit8",
        },
        {
          name: 9,
          key: 9,
          code: "Digit9",
        },
        {
          name: 0,
          key: 0,
          code: "Digit0",
        },
        {
          name: "-",
          key: "-",
          code: "Minus",
        },
        {
          name: "=",
          key: "=",
          code: "Equal",
        },
        {
          name: "←",
          key: "Backspace",
          code: "Backspace",
        },
        {
          name: "Tab",
          key: "Tab",
          code: "Tab",
        },
        {
          name: "Q",
          key: "q",
          code: "KeyQ",
        },
        {
          name: "W",
          key: "w",
          code: "KeyW",
        },
        {
          name: "E",
          key: "e",
          code: "KeyE",
        },
        {
          name: "R",
          key: "r",
          code: "KeyR",
        },
        {
          name: "T",
          key: "t",
          code: "KeyT",
        },
        {
          name: "Y",
          key: "y",
          code: "KeyY",
        },
        {
          name: "U",
          key: "u",
          code: "KeyU",
        },
        {
          name: "I",
          key: "i",
          code: "KeyI",
        },
        {
          name: "O",
          key: "o",
          code: "KeyO",
        },
        {
          name: "P",
          key: "p",
          code: "KeyP",
        },
        {
          name: "[",
          key: "[",
          code: "BracketLeft",
        },
        {
          name: "]",
          key: "]",
          code: "BracketRight",
        },
        {
          name: "\\",
          key: "\\",
          code: "Backslash",
        },
        {
          name: "CapsLock",
          key: "CapsLock",
          code: "CapsLock",
        },
        {
          name: "A",
          key: "a",
          code: "KeyA",
        },
        {
          name: "S",
          key: "s",
          code: "KeyS",
        },
        {
          name: "D",
          key: "d",
          code: "KeyD",
        },
        {
          name: "F",
          key: "f",
          code: "KeyF",
        },
        {
          name: "G",
          key: "g",
          code: "KeyG",
        },
        {
          name: "H",
          key: "h",
          code: "KeyH",
        },
        {
          name: "J",
          key: "j",
          code: "KeyJ",
        },
        {
          name: "K",
          key: "k",
          code: "KeyK",
        },
        {
          name: "L",
          key: "l",
          code: "KeyL",
        },
        {
          name: ";",
          key: ";",
          code: "Semicolon",
        },
        {
          name: "'",
          key: "'",
          code: "Quote",
        },
        {
          name: "Enter",
          key: "Enter",
          code: "Enter",
        },
        {
          name: "Shift",
          key: "Shift",
          code: "ShiftLeft",
        },
        {
          name: "Z",
          key: "z",
          code: "KeyZ",
        },
        {
          name: "X",
          key: "x",
          code: "KeyX",
        },
        {
          name: "C",
          key: "c",
          code: "KeyC",
        },
        {
          name: "V",
          key: "v",
          code: "KeyV",
        },
        {
          name: "B",
          key: "b",
          code: "KeyB",
        },
        {
          name: "N",
          key: "n",
          code: "KeyN",
        },
        {
          name: "M",
          key: "m",
          code: "KeyM",
        },
        {
          name: ",",
          key: ",",
          code: "Comma",
        },
        {
          name: ".",
          key: ".",
          code: "Period",
        },
        {
          name: "/",
          key: "/",
          code: "Slash",
        },
        {
          name: "Shift",
          key: "Shift",
          code: "ShiftRight",
        },
        {
          name: "Ctrl",
          key: "Control",
          code: "ControlLeft",
        },
        {
          name: "win",
          key: "Meta",
          code: "MetaLeft",
        },
        {
          name: "Alt",
          key: "Unidentified",
          code: "",
        },
        {
          name: "",
          key: "",
          code: "Space",
        },
        {
          name: "Alt",
          key: "Unidentified",
          code: "",
        },
        {
          name: "win",
          key: "Meta",
          code: "MetaRight",
        },
        {
          name: "",
          key: "ContextMenu",
          code: "ContextMenu",
        },
        {
          name: "Ctrl",
          key: "Control",
          code: "ControlRight",
        },
      ],
      questions: [
        { ja: "むかしむかし、あるところに", en: "mukasimukasi,arutokoroni" },
        {
          ja: "お爺さんとお婆さんが住んでいました。",
          en: "ojiisantoobaasangasundeimasita.",
        },
        {
          ja: "お爺さんは山狩りに、",
          en: "ojiisanhayamagarini,",
        },
        {
          ja: "お婆さんは川へ釣りに出かけました。",
          en: "obaasanhakawaheturinidekakemasita.",
        },
        {
          ja: "今夜はごちそうですね!",
          en: "konyahagotisoudesune!",
        },
      ],
      questionIndex: 0,
      answerIndex: 0,
      answer: [],
      sePa: new Audio(require("@/assets/games/sound/pa.mp3")),
    };
  },
  mounted() {
    document.addEventListener("keydown", this.onKeyDown);
  },
  methods: {
    onKeyDown(event) {
      this.key = event.key;
      this.code = event.code;
      switch (this.key) {
        case "Enter":
          this.answer = [];
          this.sePa.play();
          break;
        default: {
          // キーが正しければ進む
          if (
            this.questions[this.questionIndex].en.split("")[this.answerIndex] ==
            this.key
          ) {
            this.answer.push(this.key);
            this.answerIndex++;
          }

          // 文章が完成すれば進む
          if (this.answer.join("") == this.questions[this.questionIndex].en) {
            console.log("true");
            let sePinpon = new Audio(
              require("@/assets/games/sound/pinpon.mp3")
            );
            sePinpon.play();
            sePinpon.addEventListener("ended", () => {
              this.answer = [];
              this.answerIndex = 0;
              this.questionIndex++;
            });
          }
        }
      }
    },
  },
  computed: {
    // キーレイアウト
    keyRow1() {
      return this.enkeys.slice(0, 14);
    },
    keyRow2() {
      return this.enkeys.slice(14, 28);
    },
    keyRow3() {
      return this.enkeys.slice(28, 41);
    },
    keyRow4() {
      return this.enkeys.slice(41, 53);
    },
    keyRow5() {
      return this.enkeys.slice(53);
    },
    // 問題
    curentQuestionJa() {
      return this.questions[this.questionIndex].ja;
    },
    curentQuestionEn() {
      return this.questions[this.questionIndex].en;
    },
    // array() {
    //   return this.questions[this.questionIndex].en.split("");
    // },
    just() {
      let correct = this.questions[this.questionIndex].en.split("");
      return correct[this.answerIndex];
    },
  },
};
</script>

<style scoped>
.wapper {
  height: calc(100vh - 200px);
  padding: 2rem;
  display: grid;
  grid-template-columns: auto 1fr;
}
main {
  min-width: 800px;
  margin: auto;
  font-size: larger;
}
.question {
  width: fit-content;
  margin: auto;
  font-size: x-large;
  font-weight: bold;
}
.answer {
  height: 2rem;
}
.key {
  margin: 0.1rem;
  padding: 0.5rem;
  text-align: center;
  font-weight: bold;
  background-color: white;
  border: solid 1px gray;
  border-radius: 0.5rem;
}
.keylayout1 {
  margin-top: 5rem;
  display: grid;
  grid-template-columns: repeat(13, 2fr) 3fr;
}
.keylayout2 {
  display: grid;
  grid-template-columns: 3fr repeat(13, 2fr);
}
.keylayout3 {
  display: grid;
  grid-template-columns: 3fr repeat(11, 2fr) 3fr;
}
.keylayout4 {
  display: grid;
  grid-template-columns: 4fr repeat(10, 2fr) 4fr;
}
.keylayout5 {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 4fr 1fr 1fr 1fr 1fr;
}
.hit {
  background-color: gainsboro;
}
.here {
  background-color: aquamarine;
}
</style>
