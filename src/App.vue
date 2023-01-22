<template>
  <router-view />
</template>

<style>
:root {
  --main-color: rgb(96, 186, 192);
  --main-color-rgb: 96, 186, 192;
  --sub-color: rgb(253, 117, 76);
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
.flex {
  display: flex;
}
.mauto {
  margin: auto;
}
.mxauto {
  margin: 0 auto;
}
.myauto {
  margin: auto 0;
}
input {
  caret-color: var(--main-color);
}
/* コンポーネント */
.btn-main {
  width: fit-content;
  padding: 0.3rem;
  display: flex;
  align-items: center;
  color: white;
  background-color: var(--main-color);
  border-radius: 0.2rem;
  user-select: none;
}
</style>
