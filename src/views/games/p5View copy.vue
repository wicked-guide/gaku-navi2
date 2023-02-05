<template>
  <!-- ヘッダー -->
  <HeaderNav></HeaderNav>

  <main>
    <div class="canvas" id="p5Canvas"></div>
  </main>
</template>

<script>
import HeaderNav from "@/components/HeaderNav.vue";

export default {
  name: "p5View",
  components: { HeaderNav },
  data() {
    return {};
  },
  mounted() {
    const script = function (p5) {
      p5.setup = () => {
        const canvas = p5.createCanvas(p5.windowWidth * 0.9, 500);
        canvas.parent("p5Canvas");
        p5.ellipse(p5.width / 2, p5.height / 2, 500, 500);
      };

      p5.draw = () => {
        p5.background(40);
        p5.circle(p5.mouseX, p5.mouseY, 20);
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
