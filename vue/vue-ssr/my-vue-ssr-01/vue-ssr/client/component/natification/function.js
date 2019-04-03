// 这里是通过extents方式拓展组件功能的，以达到通过function调用的方式
// 为什么不直接在组件里边写，因为那些属性加上去之后在使用的时候就会变得不好用，因为我们要做很多的逻辑的判断比如何时显示之类的
// extentds是继承组件
import Vue from 'vue'
import Notify from './func-notification'
const NotificationConstructor = Vue.extend(Notify)
const instanses = []
let seed = 1
// 因为我们要通过方法来调用，所以我们需要传content，btn等，这些都可以通过options传进去
const notify = (options) => {
  // 如果是服务端我们就不能进行的，因为我们会涉及到dom操作
  if (Vue.prototype.$isServer) return
  // 意思就是除了autoClose，其他的都放在一个...reset里边
  const {
    autoClose,
    ...rest
  } = options
  const instanse = new NotificationConstructor({
    // 这里变可以传递参数
    propsData: {
      ...rest
    },
    data: {
      // 这个也可以覆盖
      autoClose: autoClose || 3000
    }
  })
  // console.log(instanse) 一个vue的VueComponent
  const id = `natification_${seed++}`
  instanse.id = id
  // 直接调用$mount不传节点的时候，只是生成了一个$el的对象，但这个时候还没有真正插入到dom里边去
  // 但是节点已经有了，然后我们就可以挂载body下
  // $mount()为手动挂载，可以用于延时挂载，比如在挂载之前做判断等
  // instanse.$mount()这里返回的是一个vue的对象
  instanse.vm = instanse.$mount()
  // vm.$el 在入口文件中实例化一个Vue实例赋值给了一个变量vm，运行后可以获得id为app的dom
  // instanse.vm.$el这里边就是我们生成的这个dom几点，添加到body里边
  document.body.appendChild(instanse.vm.$el)
  instanse.vm.visiable = true
  // 计算高度，因为我们多次出现要累加，然后网上累
  let rightOffset = 0
  instanses.forEach(item => {
    rightOffset += item.$el.offsetHeight + 16
  })
  rightOffset += 16
  instanse.rightOffset = rightOffset // 这时候就可以吧数据添加到组件里边的data里了
  instanses.push(instanse)
  const removeInstance = (instanse) => {
    if (!instanse) return
    const len = instanses.length
    const index = instanses.findIndex(inst => instanse.id === inst.id)
    instanses.splice(index, 1)
    if (len <= 1) return
    const removeHeight = instanse.vm.height
    for (let i = index; i < len - 1; i++) {
      instanses[i].rightOffset = parseInt(instanses[i].rightOffset) - removeHeight - 16
    }
  }
  instanse.vm.$on('closed', () => {
    removeInstance(instanse)
    document.body.removeChild(instanse.vm.$el)
    instanse.vm.$destroy()// 销毁组件
  })// 监听事件
  instanse.vm.$on('close', () => {
    instanse.visiable = false
  })
}

export default notify
// var vm = new Vue({
//   el: '#app',
//   router,
//   template: '<App/>',
//   components: {App}
// });
// console.log(vm.$el)
