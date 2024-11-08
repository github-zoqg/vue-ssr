const path = require("path");
const fs = require("fs");

const serverBundlePath = path.resolve(
  process.cwd(),
  "dist-server",
  "vue-ssr-server-bundle.json"
);
const serverBundle = require(serverBundlePath);

const template = fs.readFileSync(
  path.resolve(__dirname, "public/index.html"),
  "utf-8"
);

const clientManifestPath = path.resolve(
  process.cwd(),
  "dist",
  "vue-ssr-client-manifest.json"
);
const clientManifest = require(clientManifestPath);

const { createBundleRenderer } = require("vue-server-renderer");
const renderer = createBundleRenderer(serverBundle, {
  template, // 使用HTML模板
  clientManifest, // 将客户端的构建结果清单传入
});

// 实例化渲染器renderer
const express = require("express");
const app = express();

app.use(express.static(path.resolve(process.cwd(), "dist")));
/* code todo 实例化渲染器renderer */
app.get("*", function (req, res) {
  const context = {
    url: req.url,
  };
  renderer.renderToString(context, (err, html) => {
    if (err) {
      console.log(err);
      res.send("500 server error");
      return;
    }
    res.send(html);
  });
});

app.listen(3000, function () {
  console.log("server is running at http://localhost:3000");
});
