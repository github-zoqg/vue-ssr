// vue.config.js
const TARGET_NODE = process.env.WEBPACK_TARGET === "node";
const serverConfig = require("./vue.server.config");
const clientConfig = require("./vue.client.config");

console.log("TARGET_NODE", TARGET_NODE);
if (TARGET_NODE) {
  module.exports = serverConfig;
} else {
  module.exports = clientConfig;
}
