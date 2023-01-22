<template>
  <nav class="navheader">
    <router-link to="/">がくなび</router-link>
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
  position: sticky;
  top: 0;
  background-color: var(--main-color);
  display: flex;
  justify-content: space-between;
}

.navheader a {
  font-weight: bold;
  color: white;
  text-decoration: none;
}
</style>
