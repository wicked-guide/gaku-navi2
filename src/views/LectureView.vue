<template>
  <section class="wapper">
    <!-- 左メニュー -->
    <nav class="leftMenu">
      <router-link
        :to="{
          name: 'IndexList',
          params: { course: course },
        }"
      >
        <button class="xlarge" @click="reset">&laquo;</button>
      </router-link>
    </nav>

    <!-- メイン -->
    <main>
      <!-- スライドエリア -->
      <section class="slideArea">
        <img :src="slideImage" class="slideImg" alt="slide" />
      </section>

      <!-- メッセージエリア -->
      <section class="messageArea">
        <!-- アクター名＆操作ボタン -->
        <section class="messageMenu">
          <!-- アクター名 -->
          <section style="display: flex">
            <button
              :class="isActor ? 'isTrue' : 'isFalse'"
              @click="switchActor"
            >
              &gt;&#969;&lt;
            </button>
            <div class="actorName" :class="{ none: !isActor }">
              {{ actorName }}
            </div>
          </section>

          <!-- 操作ボタン -->
          <section>
            <button
              :class="isVoice ? 'isTrue' : 'isFalse'"
              @click="switchVoice"
            >
              音声&sung;
            </button>
            <button :class="isSkip ? 'isTrue' : 'isFalse'" @click="switchSkip">
              自動&#9654;
            </button>
            <button @click="voicePlay">もう一度&orarr;</button>
          </section>
        </section>

        <!-- メッセージウィンドウ -->
        <section class="messagewindow" @click="next">
          <!-- アクター -->
          <section v-show="isActor">
            <img :src="actorImage" class="actor" alt="actor" />
          </section>

          <!-- メッセージ -->
          <section class="message">
            {{ messageText }}
          </section>
        </section>
      </section>
    </main>

    <!-- 右メニュー -->
    <nav class="rightMenu">
      <button class="xlarge" @click="switchMenu">&equiv;</button>
      <ul v-show="isMenu">
        <li
          v-for="(slide, index) in scenario"
          :key="index"
          :class="{ isTrue: index == pageIndex }"
          @click="pageJump(index)"
        >
          {{ ("00" + (index + 1)).slice(-2) }}：{{ slide.title }}
        </li>
      </ul>
    </nav>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "LectureView",
  data() {
    return {
      // シナリオデータ
      course: this.$route.params.course, // パスパラメータ: コース
      id: this.$route.params.id, // パスパラメータ：ID
      scenario: [], // シナリオ
      // 表示制御
      isActor: true, // キャラ表示
      isMenu: true, // もくじ表示
      isVoice: true, // 音声再生
      isSkip: true, // オートスキップ
      // 再生コントロール
      pageIndex: 0, // スライドの現在地
      messageIndex: 0, // メッセージの現在地
      messageVoice: new Audio(""), //表示メッセージ音声
    };
  },
  mounted() {
    // jsonからコースを取得
    const url = `./${this.course}/${this.id}/scenario.json`;
    axios
      .get(url)
      .then((response) => (this.scenario = response.data))
      .catch((error) => {
        console.log(error);
        this.scenario = [{ part: "制作中" }];
      });
  },
  methods: {
    // 操作切り替え
    // キャラ表示
    switchActor() {
      this.isActor = !this.isActor;
    },
    // 音声再生
    switchVoice() {
      this.isVoice = !this.isVoice;
      if (!this.isVoice) {
        this.isSkip = false;
      }
    },
    // オートスキップ切り替え
    switchSkip() {
      this.isSkip = !this.isSkip;
      if (this.isSkip) {
        this.isVoice = true;
      }
    },
    // 目次表示
    switchMenu() {
      this.isMenu = !this.isMenu;
    },
    // もくじ：スライドジャンプ
    pageJump(index) {
      this.pageIndex = index;
      this.messageIndex = 0;
      this.messageVoice.pause();
      if (this.isVoice) {
        this.voicePlay();
      }
    },

    // 再生コントロール
    // 進む
    next() {
      this.messageVoice.pause();
      switch (this.messageText) {
        // 最終スライドの最後のメッセージ⇒終了
        case "END":
          break;

        // 通常時⇒次のメッセージ
        default:
          this.messageIndex++;
          // 各スライドの最終メッセージ⇒次のスライド
          if (this.messageText == "LAST") {
            this.pageIndex++;
            this.messageIndex = 0;
          }
      }
      // 音声ありの時のみ再生
      if (this.isVoice) {
        this.voicePlay();
      }
    },

    // ボイスセット⇒再生
    voicePlay() {
      // 再生中なら一旦停止
      this.messageVoice.pause();
      // ボイスの有無を判断してセット
      let voice =
        this.scenario[this.pageIndex].message[this.messageIndex].voice;
      if (voice) {
        this.messageVoice = new Audio(
          `/${this.course}/${this.id}/voice/${voice}`
        );
        this.messageVoice.play(); // 再生
        // オートスキップ
        this.messageVoice.addEventListener("ended", () => {
          if (this.isSkip) {
            this.next();
          }
        });
      }
    },

    // 前のページに戻る際にリセット
    reset() {
      this.messageVoice.pause();
      this.pageIndex = 0;
      this.messageIndex = 0;
    },
  },

  computed: {
    // スライドイメージ
    slideImage() {
      try {
        if (this.scenario[this.pageIndex].message[this.messageIndex].slide) {
          return `./${this.course}/${this.id}/img/${
            this.scenario[this.pageIndex].message[this.messageIndex].slide
          }`;
        } else {
          return "./common/background/sky_blue.png";
        }
      } catch {
        return { mes: "制作中です" };
      }
    },

    // アクター
    actorName() {
      try {
        if (!this.scenario[this.pageIndex].message[this.messageIndex].actor) {
          return "No Name";
        } else {
          return this.scenario[this.pageIndex].message[this.messageIndex].actor;
        }
      } catch {
        return "No Name";
      }
    },
    actorImage() {
      try {
        if (
          !this.scenario[this.pageIndex].message[this.messageIndex].actorImg
        ) {
          return "./common/actor/Tsumugi-01.png";
        } else {
          return `./common/actor/${
            this.scenario[this.pageIndex].message[this.messageIndex].actorImg
          }`;
        }
      } catch {
        return "./common/actor/Tsumugi-01.png";
      }
    },

    // メッセージテキスト
    messageText() {
      try {
        return this.scenario[this.pageIndex].message[this.messageIndex].text;
      } catch {
        return "LAST";
      }
    },
  },
};
</script>

<style scoped>
/* 背景 */
.wapper {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-image: url("@/assets/common/background/sky_blue.png");
  background-size: cover;
  background-position: center;
  position: relative;
  display: grid;
  grid-template-columns: auto 1fr auto;
}

/* メイン */
main {
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}

/* スライドエリア */
.slideArea {
  margin: auto;
}

/* スライド */
.slideArea .slideImg {
  max-width: 100%;
  max-height: calc(100vh - 225px);
  display: block;
  margin: auto;
}

/* メッセージエリア */
.messageArea {
  margin: auto 0 1rem;
  white-space: pre-line;
}

/* メッセージメニュー */
.messageMenu {
  display: flex;
  justify-content: space-between;
}
.messageMenu button {
  padding: 0.5rem;
  border: solid darkcyan;
  border-radius: 10px;
  font-weight: bold;
}

/* アクター */
.actorName {
  padding: 0.5rem;
  background-color: rgb(0, 0, 0, 0.8);
  border: solid 1px;
  border-radius: 10px;
  color: white;
}
.actor {
  max-height: 100%;
  margin: auto;
  border-radius: 10px;
}

/* メッセージウィンドウ */
.messageArea .messagewindow {
  box-sizing: border-box;
  height: 176px;
  background-color: rgb(0, 0, 0, 0.8);
  border-radius: 10px;
  display: flex;
  color: white;
  font-size: x-large;
  cursor: pointer;
}

.messageArea .messagewindow .message {
  padding: 0.5rem 1rem;
  width: 100%;
  overflow-y: auto;
}

.messageArea .messagewindow .message::after {
  content: "▼";
  animation: blink 1s ease-in-out infinite alternate;
}

@keyframes blink {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

/* サイドメニュー */
.leftMenu,
.rightMenu {
  padding: 1rem;
}

.xlarge {
  font-size: x-large;
}

/* 左右メニュー */
nav ul {
  margin-top: 0;
  width: max-content;
  max-height: 90vh;
  overflow: auto;
  background: whitesmoke;
  padding: 0.5rem;
  border-radius: 0 0 10px 10px;
  box-shadow: 2px 2px 4px;
  list-style: none;
  font-size: larger;
}

.rightMenu button {
  display: block;
  margin-left: auto;
}

nav ul li {
  border-radius: 5px;
  padding: 0 0.2rem;
  cursor: pointer;
  border-bottom: solid gainsboro;
}

/* アクティブ背景 */
.isTrue {
  background: aquamarine;
}

.isFalse {
  background-color: gray;
  opacity: 0.8;
}

/* レスポンシブ */
@media (max-width: 800px) {
  .leftMenu,
  .rightMenu {
    padding: 0rem;
  }
  .messageArea .messagewindow .message {
    font-size: unset;
  }

  nav ul {
    font-size: medium;
  }
  .actor {
    display: none;
  }
}

@media (max-height: 500px) {
  .slideArea .slideImg {
    max-height: calc(100vh - 135px);
  }
  .messageArea .messagewindow {
    height: 90px;
    font-size: unset;
  }
  .messageMenu button {
    padding: 0 0.5rem;
    font-weight: normal;
  }
  .actorName {
    padding: 0 0.5rem;
  }
}
</style>
