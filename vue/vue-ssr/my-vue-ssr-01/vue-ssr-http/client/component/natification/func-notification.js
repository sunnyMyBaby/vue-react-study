import Notification from './natification.vue'
// 申明一个组件notificationConstructor
// 请注意，extend创建的是一个组件构造器，而不是一个具体的组件实例。所以他不能直接在new Vue中这样使用： new Vue({components: fuck})
export default {
  extends: Notification,
  // 因为我们继承了组件notification，所以这里写的computed，data会覆盖notification里边已定义的
  computed: {
    style () {
      return {
        position: 'fixed',
        right: '20px',
        bottom: `${this.rightOffset}px`
      }
    }
  },
  data () {
    return {
      rightOffset: 0,
      autoClose: 3000,
      height: 0,
      visiable: false// 解决transtion不执行
    }
  },
  mounted () {
    console.log(this.$data)
    this.createTimer()
    // console.log(this.rightOffset)
  },
  methods: {
    createTimer () {
      console.log(this.autoClose)
      if (this.autoClose) {
        this.timer = setInterval(() => {
          this.visiable = false
        }, this.autoClose)
      }
    },
    clearTimer () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
    },
    afterEnter () {
      console.log('aaaa')
      this.height = this.$el.offsetHeight
    }
  },
  beforeDestroy () {
    this.clearTimer()
  }
}
