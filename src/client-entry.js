import createApp from "./main";

const { app, router, store } = createApp();

if (window.__INITIAL_STATE__) {
  // 激活状态数据
  store.replaceState(window.__INITIAL_STATE__);
}

router.onReady(() => {
  console.log("client-entry.js: router.onReady()");
  app.$mount("#app", true);
});

console.log("client-entry.js");
