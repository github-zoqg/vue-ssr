import Vue from "vue";
import App from "./App.vue";
import createRouter from "./router";
import store from "./store";

Vue.config.productionTip = false;

export default function createApp(context) {
  const router = createRouter(); // 创建 router 实例
  const app = new Vue({
    router, // 注入 router 到根 Vue 实例
    store, // 注入 store 到根 Vue 实例
    render: (h) => h(App),
  });
  return { store, router, app };
}
