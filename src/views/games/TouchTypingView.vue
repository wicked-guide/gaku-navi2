<template>
  <HeaderNav />
  <section class="wapper">
    <!-- 戻る -->
    <router-link to="/game">
      <button class="material-icons md-18">skip_previous</button>
    </router-link>

    <main>
      <h3>タッチタイピング</h3>
      <!-- {{ key }} -->
      <ul class="menuselect">
        <li
          v-for="(item, index) in questionList"
          :key="index"
          :class="[questionIndex == index ? 'here' : 'hit']"
          @click="questionSelect(index)"
        >
          {{ item }}
        </li>
      </ul>

      <!-- 問題 -->
      <section class="question-area">
        <div>{{ curentQuestion.ja }}</div>
        <div>{{ curentQuestion.en }}</div>
        <hr />
        <div class="answer">
          {{ answer.join("") }}
          <img :src="imgCheck" alt="check" class="check" v-show="isCorrect" />
        </div>
        <!-- 全問正解 -->
        <img :src="imgGood" alt="Good" class="good" v-show="isClear" />
      </section>
      <!-- キーボード -->
      <section class="keylayout">
        <section class="keylayout1">
          <button
            v-for="item in keyRow1"
            :key="item.name"
            :class="[
              `key`,
              `key${item.class}`,
              item.code == key ? `hit` : ``,
              item.code == justOne ? `here` : ``,
            ]"
          >
            {{ item.name }}
          </button>
        </section>
        <section class="keylayout2">
          <button
            v-for="item in keyRow2"
            :key="item.name"
            :class="[
              `key`,
              `key${item.class}`,
              item.code == key ? `hit` : ``,
              item.code == justOne ? `here` : ``,
            ]"
          >
            {{ item.name }}
          </button>
        </section>
        <section class="keylayout3">
          <button
            v-for="item in keyRow3"
            :key="item.name"
            :class="[
              `key`,
              `key${item.class}`,
              item.code == key ? `hit` : ``,
              item.code == justOne ? `here` : ``,
            ]"
          >
            {{ item.name }}
          </button>
        </section>
        <section class="keylayout4">
          <button
            v-for="item in keyRow4"
            :key="item.name"
            :class="[
              `key`,
              `key${item.class}`,
              item.code == key ? `hit` : ``,
              item.code == justOne ? `here` : ``,
            ]"
          >
            {{ item.name }}
          </button>
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
      // キーボード
      key: "",
      code: "",
      jakeys: [
        {
          code: "半角/\n全角",
          name: "半角/\n全角",
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
          code: "0",
          name: "0",
        },
        {
          code: "-",
          name: "-",
        },
        {
          code: "^",
          name: "^",
        },
        {
          code: "¥",
          name: "¥",
        },
        {
          code: "back/space",
          name: "back\nspace",
        },
        {
          code: "tab",
          name: "TAB",
        },
        {
          code: "q",
          name: "Q",
        },
        {
          code: "w",
          name: "W",
        },
        {
          code: "e",
          name: "E",
        },
        {
          code: "r",
          name: "R",
        },
        {
          code: "t",
          name: "T",
        },
        {
          code: "y",
          name: "Y",
        },
        {
          code: "u",
          name: "U",
        },
        {
          code: "i",
          name: "I",
        },
        {
          code: "o",
          name: "O",
        },
        {
          code: "p",
          name: "P",
        },
        {
          code: "`",
          name: "`",
        },
        {
          code: "[",
          name: "[",
        },
        {
          class: "Enter",
          code: "Enter",
          name: "Enter",
        },
        {
          code: "capslock",
          name: "CAPSLOCK",
        },
        {
          code: "a",
          name: "A",
        },
        {
          code: "s",
          name: "S",
        },
        {
          code: "d",
          name: "D",
        },
        {
          code: "f",
          name: "F",
        },
        {
          code: "g",
          name: "G",
        },
        {
          code: "h",
          name: "H",
        },
        {
          code: "j",
          name: "J",
        },
        {
          code: "k",
          name: "K",
        },
        {
          code: "l",
          name: "L",
        },
        {
          code: ";",
          name: ";",
        },
        {
          code: ":",
          name: ":",
        },
        {
          code: "]",
          name: "]",
        },
        {
          class: "Lshift",
          code: "Shift",
          name: "shift",
        },
        {
          code: "z",
          name: "Z",
        },
        {
          code: "x",
          name: "X",
        },
        {
          code: "c",
          name: "C",
        },
        {
          code: "v",
          name: "V",
        },
        {
          code: "b",
          name: "B",
        },
        {
          code: "n",
          name: "N",
        },
        {
          code: "m",
          name: "M",
        },
        {
          code: ",",
          name: ",",
        },
        {
          code: ".",
          name: ".",
        },
        {
          code: "/",
          name: "/",
        },
        {
          code: "\\",
          name: "\\",
        },
        {
          code: "Shift",
          name: "shift",
        },
        {
          code: "control",
          name: "ctrl",
        },
        {
          code: "win",
          name: "WIN",
        },
        {
          code: "alt",
          name: "ALT",
        },
        {
          code: "untitle",
          name: "無変換",
        },
        {
          class: "space",
          code: "space",
          name: "",
        },
        {
          code: "untitle",
          name: "変換",
        },
        {
          code: "untitle",
          name: "カタカナ\nひらがな",
        },
        {
          code: "control",
          name: "ctrl",
        },
      ],
      // 問題
      question: [
        [
          {
            ja: "あいうえお",
            en: "aiueo",
          },
          {
            ja: "かきくけこ",
            en: "kakikukeko",
          },
          {
            ja: "さしすせそ",
            en: "sasisuseso",
          },
          {
            ja: "たちつてと",
            en: "tatituteto",
          },
          {
            ja: "なにぬねの",
            en: "naninuneno",
          },
          {
            ja: "はひふへほ",
            en: "hahihuheho",
          },
          {
            ja: "まみむめも",
            en: "mamimumemo",
          },
          {
            ja: "やゆよ",
            en: "yayuyo",
          },
          {
            ja: "らりるれろ",
            en: "rarirurero",
          },
          {
            ja: "わをん、。",
            en: "wawonn,.",
          },
        ],
        [
          {
            ja: "犬も歩けば棒にあたる",
            en: "inumoarukebabouniataru",
          },
          {
            ja: "論より証拠",
            en: "ronyorisyouko",
          },
          {
            ja: "花より団子",
            en: "hanayoridango",
          },
          {
            ja: "憎まれっ子世にはばかる",
            en: "nikumarekkoyonihabakaru",
          },
          {
            ja: "骨折り損のくたびれ儲け",
            en: "honeorizonnnokutabiremouke",
          },
          {
            ja: "屁をひって尻つぼめ",
            en: "hewohittesiritubome",
          },
          {
            ja: "年寄りの冷や水",
            en: "tosiyorinohiyamizu",
          },
          {
            ja: "ちりも積もれば山となる",
            en: "tirimotumorebayamatonaru",
          },
          {
            ja: "律儀者の子沢山",
            en: "ritigimononokodakusann",
          },
          {
            ja: "盗人の昼寝",
            en: "nusuttonohirune",
          },
          {
            ja: "瑠璃もはりも照らせば光る",
            en: "rurimoharimoterasebahikaru",
          },
          {
            ja: "老いては子に従え",
            en: "oitehakonisitagae",
          },
          {
            ja: "割れ鍋にとじ蓋",
            en: "warenabenitojibuta",
          },
          {
            ja: "かったいのかさ怨み",
            en: "kattainokasaurami",
          },
          {
            ja: "よしのずいから天井のぞく",
            en: "yosinozuikaratenjounozoku",
          },
          {
            ja: "旅は道づれ、世は情け",
            en: "tabihamitizure,yohanasake",
          },
          {
            ja: "良薬、口に苦し",
            en: "ryouyaku,kutininigasi",
          },
          {
            ja: "総領の甚六",
            en: "souryounojinroku",
          },
          {
            ja: "月夜に釜を抜かれる",
            en: "tukiyonikamawonukareru",
          },
          {
            ja: "念には念を入れよ",
            en: "nennnihanenwoireyo",
          },
          {
            ja: "泣きっ面に蜂",
            en: "nakitturanihati",
          },
          {
            ja: "楽あれば苦あり",
            en: "rakuarebakurari",
          },
          {
            ja: "無理が通れば道理が引っこむ",
            en: "murigatoorebadoorigahikkomu",
          },
          {
            ja: "嘘から出た真",
            en: "usokaradetamakoto",
          },
          {
            ja: "芋の煮えたも御存じない",
            en: "imononietamogozonjinai",
          },
          {
            ja: "喉元すぎれば、熱さ忘れる",
            en: "nodomotosugireba,atusawasureru",
          },
          {
            ja: "鬼に金棒",
            en: "oninikanabou",
          },
          {
            ja: "臭いものに蓋",
            en: "kusaimononihuta",
          },
          {
            ja: "安物買いの銭失い",
            en: "yasumonogainozeniusinai",
          },
          {
            ja: "負けるが勝ち",
            en: "makerugakati",
          },
          {
            ja: "芸は身を助ける",
            en: "geihamiwotasukeru",
          },
          {
            ja: "文はやりたし、書く手は持たぬ",
            en: "humihayaritasi,kakutehamotanu",
          },
          {
            ja: "子は三界の首枷",
            en: "kohasangainokubikase",
          },
          {
            ja: "得手に帆を揚げる",
            en: "etenihowoageru",
          },
          {
            ja: "亭主の好きな赤烏帽子",
            en: "teisyunosukinaakaebosi",
          },
          {
            ja: "頭かくして、尻かくさず",
            en: "atamakakusite,sirikakusazu",
          },
          {
            ja: "三べん廻って煙草にしょ",
            en: "sanbenmawattetabakonisyo",
          },
          {
            ja: "聞いて極楽、見て地獄",
            en: "kiitegokuraku,mitejigoku",
          },
          {
            ja: "油断大敵",
            en: "yudantaiteki",
          },
          {
            ja: "目の上のたんこぶ",
            en: "menouenotankobu",
          },
          {
            ja: "身から出た錆",
            en: "mikaradetasabi",
          },
          {
            ja: "知らぬが仏",
            en: "siranugahotoke",
          },
          {
            ja: "縁は異なもの味なもの",
            en: "enhainamonoajinamono",
          },
          {
            ja: "貧乏暇なし",
            en: "binbouhimanasi",
          },
          {
            ja: "門前の小僧、習わぬ経を読む",
            en: "monzennnokozou,narawanukyouwoyomu",
          },
          {
            ja: "背に腹は代えられない",
            en: "seniharahakaerarenai",
          },
          {
            ja: "粋が身を食う",
            en: "suigamiwokuu",
          },
        ],
      ],
      questionList: ["五十音", "カルタ"],
      questionIndex: 0,
      currentIndex: 0,
      answer: [],
      answerIndex: 0,
      isCorrect: false,
      isClear: false,
      // 素材
      imgGood: require("@/assets/common/img/goodjob.png"),
      imgCheck: require("@/assets/common/img/check.png"),
      sePa: new Audio(require("@/assets/common/sound/pa.mp3")),
      sePinpon: new Audio(require("@/assets/common/sound/pinpon.mp3")),
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
          // 正解
          if (this.showEnter) {
            this.isCorrect = true;
            this.sePinpon.play();
            if (
              this.currentIndex + 1 <
              this.question[this.questionIndex].length
            ) {
              setTimeout(() => {
                this.currentIndex++;
                this.answer = [];
                this.answerIndex = 0;
                this.isCorrect = false;
              }, 500);
            } else {
              this.isClear = true;
            }
          }
          // 不正解
          else {
            this.sePa.play();
            this.answer = [];
            this.answerIndex = 0;
          }
          break;
        default: {
          if (this.key == this.justOne) {
            this.answer.push(this.key);
            this.answerIndex++;
          }
        }
      }
    },
    questionSelect(index) {
      this.questionIndex = index;
      this.currentIndex = 0;
      this.isClear = false;
      this.answer = [];
      this.answerIndex = 0;
      this.isCorrect = false;
    },
  },
  computed: {
    // キーレイアウト
    keyRow1() {
      return this.jakeys.slice(0, 15);
    },
    keyRow2() {
      return this.jakeys.slice(15, 42);
    },
    keyRow3() {
      return this.jakeys.slice(42, 55);
    },
    keyRow4() {
      return this.jakeys.slice(55, 63);
    },
    // 問題
    curentQuestion() {
      return this.question[this.questionIndex][this.currentIndex];
    },
    //
    justOne() {
      let correct =
        this.question[this.questionIndex][this.currentIndex].en.split("");
      if (this.curentQuestion.en.length == this.answer.join("").length) {
        return "Enter";
      } else {
        return correct[this.answerIndex];
      }
    },
    showEnter() {
      return this.curentQuestion.en.length == this.answer.join("").length;
    },
  },
};
</script>

<style scoped>
.wapper {
  padding: 1rem;
}
.menuselect {
  display: flex;
}
.menuselect li {
  width: fit-content;
  padding: 0.2rem;
  list-style: none;
  border: solid 1px rgba(var(--main-color-rgb), 0.5);
  border-radius: 0.5rem;
  cursor: pointer;
}

.question-area {
  width: fit-content;
  margin: auto;
  font-size: x-large;
}

.answer {
  height: 3rem;
  position: relative;
}
.check {
  max-width: 100%;
  max-height: 2rem;
  margin: auto;
  position: absolute;
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
.key {
  margin: 0.1rem;
  padding: 0.2rem;
  white-space: pre-wrap;
  text-align: center;
  font-weight: bold;
  background-color: white;
  border: solid 1px gray;
  border-radius: 0.5rem;
}

.keylayout {
  max-width: 1000px;
  margin: 2rem auto;
  display: grid;
  grid-template-rows: 1fr 2fr 1fr 1fr;
}

.keylayout1 {
  display: grid;
  grid-template-columns: repeat(15, 1fr);
}

.keylayout2 {
  display: grid;
  grid-template-columns: repeat(14, 1fr);
  grid-template-rows: 2;
}

.keylayout3 {
  display: grid;
  grid-template-columns: repeat(14, 1fr);
}

.keylayout4 {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
}

.keyEnter {
  grid-area: 1/14/3/14;
}

.keyLshift {
  grid-column: 1/3;
}

.keyspace {
  grid-column: 5/10;
}

.hit {
  background-color: gainsboro;
}

.here {
  background-color: rgba(var(--main-color-rgb), 0.5) !important;
}
</style>
