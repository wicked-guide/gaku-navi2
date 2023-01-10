<template>
  <section class="wapper">
    <HeaderNav />
    <h1>This is an about page</h1>
  </section>
</template>

<script>
import HeaderNav from "@/components/HeaderNav.vue";
export default {
  name: "AboutView",
  components: {
    HeaderNav,
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
  computed: {},
};
</script>

<style scoped>
.wapper {
  height: 100vh;
}
</style>
