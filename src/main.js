import "./Assets/style/css/global.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
// import Parallax from "parallax-js";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
