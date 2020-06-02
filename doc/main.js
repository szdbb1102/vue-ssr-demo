// 第 1 步：创建一个 Vue 实例
const Vue = require("vue");
const app = new Vue({
  template: `<div>Hello World</div>`,
});

// 第 2 步：创建一个 renderer
const renderer = require("vue-server-renderer").createRenderer();

renderer
  .renderToString(app)
  .then((html) => {
    console.log(html);
  })
  .catch((err) => {
    console.error(err);
  });
