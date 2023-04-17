<template>
  <router-view />
</template>

<style>
:root {
  --main-color: rgb(96, 186, 192);
  --main-color-rgb: 96, 186, 192;
  --sub-color: rgb(253, 117, 76);
  --back-color: rgb(255, 252, 240);
  --darka: #000000aa;
  --dark7: #00000077;
  --disable: #7e7e7e77;
}
body {
  height: 100vh;
  overflow: hidden;
  margin: 0;
  /* background-color: var(--back-color); */
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-image: url("@/assets/common/background/school.jpg");
  background-position: center;
  background-size: cover;
  caret-color: transparent;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.logo {
  padding: 0.5rem 1rem;
  font-size: xx-large;
  font-weight: bold;
  color: white;
}

a {
  color: unset;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
.none {
  display: none;
}
.overflow {
  overflow: auto;
}
.flex {
  display: flex;
}
.flex-a {
  display: flex;
  justify-content: space-around;
}
.flex-b {
  display: flex;
  justify-content: space-between;
}
.flex-c {
  display: flex;
  justify-content: center;
}
.flex-col {
  display: flex;
  flex-direction: column;
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
.mtauto {
  margin-top: auto;
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
  cursor: pointer;
  user-select: none;
}
.btn-off {
  width: fit-content;
  padding: 0.3rem;
  display: flex;
  align-items: center;
  color: white;
  background-color: darkgray;
  border-radius: 0.2rem;
  cursor: pointer;
  user-select: none;
}
</style>
