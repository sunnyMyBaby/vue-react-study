import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './app.vue'
import './styles/global.styl'
import CreateRouter from './config/router'
import createStore from './store/store'
import Vuex from 'vuex'
require('es6-promise').polyfill()
require('es6-promise/auto')
// const root = document.createElement('div')
Vue.use(VueRouter)
const router = CreateRouter()
// zai这里创建的store所以需要在这里
Vue.use(Vuex)
const store = createStore()
// 动态注册模块路由，多系统集成的核心
// 注册完成后使用方式和正常一样
store.registerModule('dynamicModules', {
  state: {
    text: '这里是动态注册的模块'
  }
})
// store.unregisterModule('dynamicModules') //解绑模块
// 路由监听
// store.watch((state) => {
//   return state.count
// }, (newCount) => {
//   // 当地一个参数返回的数据有变化时执行
//   console.log(newCount)
// })
// 订阅,会拿到所有mutations的变化，有一个mutation被调用都会执行
// store.subscribe((mutations, state) => {
//   console.log(mutations)
//   // payload调用mutations时接收的参数
//   console.log(state)
// })
// 监听Action
// subscribeAction,subscribe主要用于制作vuex插件的时候
store.subscribeAction((action, state) => {
  console.log(action)
  console.log(state)
})
// document.body.appendChild(root)
router.beforeEach((to, from, next) => {
  console.log('路由守卫-跳转之前执行')
  next()
})
router.beforeResolve((to, from, next) => {
  console.log('路由守卫22222')
  next()
})
router.afterEach((to, from) => {
  console.log('路由守卫-跳转路由之后执行')
})
new Vue({
  // 申明渲染出来的的是App的内容
  // $mount 挂在到html上
  router,
  store,
  render: (h) => h(App)
}).$mount('#root')
