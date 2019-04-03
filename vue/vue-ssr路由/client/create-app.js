// 每一次服务端渲染都需要渲染一个新的app，我们不能用上一次app渲染的对象进行下一次渲染，
// 因为这一个app已经包含了上一次app的状态会影响我们下一次渲染的内容，所以每一次都需要创建一个新的app
import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

import App from './app.vue'
import createStore from './store/store'
import CreateRouter from './config/router'

import './styles/global.styl'
Vue.use(VueRouter)
Vue.use(Vuex)
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
