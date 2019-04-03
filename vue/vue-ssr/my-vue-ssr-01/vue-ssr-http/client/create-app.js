// 每一次服务端渲染都需要渲染一个新的app，我们不能用上一次app渲染的对象进行下一次渲染，
// 因为这一个app已经包含了上一次app的状态会影响我们下一次渲染的内容，所以每一次都需要创建一个新的app
import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
// 这个插件是在服务端里边处理路由头部信息的，因为在客户端里边我们可以用vue路由的meta属性做的，但是服务端不行
// 然后使用了之后我们在客户端路由里边写的metaInfo就可以获取到
import Meta from 'vue-meta'
import App from './app.vue'
import createStore from './store/store'
import CreateRouter from './config/router'

import './assets/styles/global.styl'
// 把组件定义在全局里边
import Notification from './component/natification'
import Tabs from './component/tabs'
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(Meta)
Vue.use(Notification)
Vue.use(Tabs)
export default() => {
  const router = CreateRouter()
  const store = createStore()
  const app = new Vue({
    router,
    store,
    render: h => h(App)
  })
  return { app, router, store }
}
