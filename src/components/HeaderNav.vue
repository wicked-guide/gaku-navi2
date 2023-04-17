<template>
  <!-- <nav class="navheader">
    <router-link to="/">がくなび</router-link>
  </nav> -->
  <header class="flex-b">
    <router-link to="/" class="logo">がくなび</router-link>
  </header>
</template>

<script>
export default {
  name: "HeaderNav",
};
</script>

<style>
/* .navheader {
  padding: 0.5rem;
  position: sticky;
  top: 0;
  background-color: var(--main-color);
  background-color: var(--dark7);
  display: flex;
  justify-content: space-between;
}

.navheader a {
  font-weight: bold;
  color: white;
  text-decoration: none;
} */
header {
  padding: 0.5rem 1rem;
  align-items: baseline;
}
.logo {
  font-size: xx-large;
  font-weight: bold;
  color: white;
}
</style>
