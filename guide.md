## 初始化
1. 安装依赖
   1. vue vue-server-renderer
   2. express
2. 最暴露本质的代码 [demo](./server.js)
   1. 本质 把vue组件编译为html
      1. 后面再激活为vue组件
   2. const renderer = require('vue-server-renderer').createRenderer()
   3. renderer.renderToString(app, (err, html) => {})