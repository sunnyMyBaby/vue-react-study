import Router from 'vue-router'
import routes from './routes'
// 通常情况下下面这种情况是可以的，但是在服务端就不行了，因为我们需要在每次import都需要创建一个新的Router就做不到了
// 因为我们项目用到服务端渲染，如果只export出去一个routrer就会导致内存溢出，因为每一次服务端都会重新生成一个app
// 然后我们的router又只有一个对象，所以每次就会缓存我们新建的app，导致服务端渲染流程结束之后这个app对像没有释放掉
// 导致这个内存就不会下降，最后内存溢出
// const router = new Router({
//   routes
// })
// export default router

export default () => {
  return new Router({
    routes,
    mode: 'history',
    // 基准路径，所有路由都是在该路径下
    // base: '/base/'
    scrollBehavior (to, from, savedPosition) {
      // 路由跳转的时候页面要不要滚动
      if (savedPosition) {
        return savedPosition
      } else {
        return { x: 0, y: 0 }
      }
    },
    // 页面使用的是正常的路由，但是不是所有浏览器都支持history模式的路由，如果不支持的话vue-router自动使用hash模式
    // 如果是这样的话我们的单页应用就变成了多页应用，每次的路由跳转都会到后端然后去返回新的内容，所以会比较耗时
    // 所以一般设置为true
    fallback: true
    // 一般用不到
    // parseQuery () {

    // },
    // stringifyQuery () {

    // }
  })
}
