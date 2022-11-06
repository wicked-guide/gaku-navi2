<template>
  <nav class="navheader">
    <router-link to="/">がくなび</router-link>
    <!-- <router-link to="/creditinfo">利用素材</router-link> -->
  </nav>
  <router-view />
</template>

<script>
export default {
  name: "HeaderNav",
};
</script>

<style>
.navheader {
  padding: 0.5rem;
  background-color: steelblue;
  display: flex;
  justify-content: space-between;
}

.navheader a {
  font-weight: bold;
  /* color: #2c3e50; */
  color: white;
  text-decoration: none;
}

/* nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
