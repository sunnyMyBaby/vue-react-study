import Vue from 'vue'
import App from './app.vue'
import './styles/global.styl'
const root = document.createElement('div')
document.body.appendChild(root)
new Vue({
  // 申明渲染出来的的是App的内容
  // $mount 挂在到html上
  render: (h)=>h(App)
}).$mount(root)