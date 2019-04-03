// 这里是服务端的入口文件
import createApp from './create-app'
// const appString = await renderer.renderToString(context)
// 这个context就等于server-render.js里边传入的context-这个context可以赋很多的值
// 我们在进行vue的渲染过程当中vue也会给他赋很多的值
export default context => {
  return Promise((reolve, reject) => {
    const { app, router } = createApp()
    // 给路由推一条记录，这是在服务端浏览器会有默认的路由，但是在服务端app, router, store还只是个对象
    // 他们根本没有走渲染这一步，所以只有主动调用 router.push他才回主动的执行这一部分的代码，然后给我们匹配到调用的这些组件
    router.push(context.url)
    // router.onReady 基本上只有在服务端渲染才会用到
    // 实际上就是一个路由被推进去之后所有的异步的操作比如说异步路由里边有异步组件加载的操作左右的异步操作完成才做这个回调,在后在里边做一些事情比如获取一些数据的操作
    router.onReady(() => {
      // getMatchedComponent 这个方法也只有在服务端渲染的时候才会用到
      // 在服务算渲染的时候我们要做服务端的异步操作的请求，我们会在我们每个组件里边去写内容，
      // 我们会在路由准备好之后根据url匹配这些组件，因为每个url显示的组件是不一样的，匹配到组件后再去做一些操作
      const matchedCompoents = router.getMatchedComponent()
      if (!matchedCompoents.length) {
        return reject(new Error('没有组件匹配'))
      }
      reolve(app)
    })
  })
}
