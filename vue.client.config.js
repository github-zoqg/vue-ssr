const VueSSRClientPlugin = require("vue-server-renderer/client-plugin");

let command = process.argv.slice(2);
console.log("command", command);
if (command[0] === "build") {
  module.exports = {
    configureWebpack: () => ({
      entry: `./src/client-entry.js`,
      devtool: "source-map",
      target: "web",
      plugins: [new VueSSRClientPlugin()],
    }),
    chainWebpack: (config) => {
      // 去除所有关于客户端生成的html配置，因为已经交给后端生成
      config.plugins.delete("html");
      config.plugins.delete("preload");
      config.plugins.delete("prefetch");
    },
  };
} else {
  module.exports = {
    // pages: {
    //   main: { entry: `src/client-entry.js` },
    //   template: "public/index.html",
    // },
    configureWebpack: () => ({
      entry: `./src/client-entry.js`,
    }),
  };
}
