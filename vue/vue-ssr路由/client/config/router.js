import Router from 'vue-router'
import routes from './routes'
export default () => {
  return new Router({
    routes,
    mode: 'history',
    scrollBehavior (to, from, savedPosition) {
      // 路由跳转的时候页面要不要滚动
      if (savedPosition) {
        return savedPosition
      } else {
        return { x: 0, y: 0 }
      }
    },
    fallback: true
  })
}
