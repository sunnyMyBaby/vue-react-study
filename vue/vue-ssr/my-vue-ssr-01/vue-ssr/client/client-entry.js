// 服务端的渲染里边我们需要client做一些配合，在webpack.config.client.js文件会被作为入口文件
// 客户端入口文件
// client下面的入口是index.js但是并没有依赖于create-app
import createApp from './create-app'
const { app, router } = createApp()
router.onReady(() => {
  // 等所有路由准备好的时候才去做整个应用的渲染
  // 把真个app塞到root下去
  app.$mount('#root')
})
