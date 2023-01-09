<template>
  <router-view />
</template>

<style>
:root {
  --main-color: rgb(96, 186, 192);
  --main-color-rgb: 96, 186, 192;
  --sub-color: rgb(96, 186, 192);
  --back-color: rgb(255, 252, 240);
}
body {
  margin: 0;
  background-color: var(--back-color);
  caret-color: transparent;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.none {
  display: none;
}

input {
  caret-color: var(--main-color);
}
</style>
