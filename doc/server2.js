const Vue = require("vue");
const fs = require("fs");
const path = require("path");
const server = require("express")();

const template = fs.readFileSync(
  path.join(__dirname, "./index.template.html"),
  "utf-8"
);
const renderer = require("vue-server-renderer").createRenderer({
  template,
});

server.get("*", (req, res) => {
  const app = new Vue({
    data: {
      url: req.url,
    },
    template: `<div>访问的 URL 是： {{ url }}</div>`,
  });

  renderer.renderToString(app, (err, html) => {
    if (err) {
      res.status(500).end("Internal Server Error");
      return;
    }
    res.end(html);
  });
});

server.listen(8081);
