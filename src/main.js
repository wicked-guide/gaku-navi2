import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

require("./assets/style.scss");

createApp(App).use(router).mount("#app");
