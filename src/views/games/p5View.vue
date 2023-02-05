<template>
  <!-- ヘッダー -->
  <HeaderNav></HeaderNav>

  <main>
    <div class="canvas" id="p5Canvas"></div>
    <!-- <div>{{ key }}</div> -->
  </main>
</template>

<script>
import HeaderNav from "@/components/HeaderNav.vue";

export default {
  name: "p5View",
  components: { HeaderNav },
  data() {
    return {
      // key: "1",
    };
  },
  mounted() {
    let x = 300;
    let y = 200;
    let dy = 0;
    let dx = 0;
    let isUp = false;
    const script = function (p5) {
      p5.setup = () => {
        const canvas = p5.createCanvas(p5.windowWidth * 0.9, 500);
        canvas.parent("p5Canvas");
        p5.ellipse(p5.width / 2, p5.height / 2, 500, 500);
      };

      p5.draw = () => {
        p5.background(40);
        p5.circle(p5.mouseX, p5.mouseY, 20);
        if (isUp) {
          dy = dy - 0.3;
        }

        dy = dy + 0.1;
        y = y + dy; // 下に落ちる
        dx = dx * 0.99;
        x = x + dx;
        if (y > 450) {
          y = 450;
          dy = 0;
        }
        if (y < 0) {
          dy = 0;
        }
        if (x > p5.windowWidth * 0.9 - 30) {
          x = p5.windowWidth * 0.9 - 30;
        }
        if (x < 0) {
          x = 0;
        }

        p5.fill(255);
        p5.rect(x, y, 30, 30);
      };

      // キー操作
      p5.keyPressed = () => {
        // this.key = p5.key;
        console.log("p5.key", p5.key);
        if (p5.key == "ArrowUp") {
          isUp = true;
        }
        if (p5.key == "ArrowRight") {
          dx = dx + 1;
        }
        if (p5.key == "ArrowLeft") {
          dx = dx - 1;
        }
      };
      p5.keyReleased = () => {
        if (p5.key == "ArrowUp") {
          isUp = false;
        }
      };
    };

    const P5 = require("p5");
    new P5(script);
  },
  computed: {},
};
</script>

<style scoped>
.canvas {
  padding-top: 2rem;
  display: flex;
  justify-content: center;
}
</style>
