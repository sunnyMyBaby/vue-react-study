// 类似于vue插件的使用方法，是可以发布到第三方使用的组件
// 把这个组件在全局注册一下
// 然后在create-app.js注册就可以了
import Notification from './natification.vue'
import notify from './function'
export default(Vue) => {
  console.log(Vue)
  // 第一个是参数参数名
  Vue.component(Notification.name, Notification)
  Vue.prototype.$notify = notify
}
