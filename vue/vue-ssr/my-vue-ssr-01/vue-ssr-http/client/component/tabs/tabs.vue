<script>
import TabContainer from './tabContent.vue'
// 这里变会涉及一些只能在render function才能做的，所以我们就不用template
export default {
  name: 'Tabs',
  // value 控制显示那个tab
  provide () {
    const data = {}
    // 每次调用这个value值的时候其实都是调用的get方法，这也是reactive的基础
    Object.defineProperty(data, 'value', {
      get: () => this.value,
      enumerable: true // 可被读取
    })
    return {
      // 父子或者同级之间的的交互可以用,但是有个问题这vue不提供provide，reactive的，所以我们在tab里边inject到只有第一次拿到，之后的变化都拿不到，所以需要我们自己
      data // 直接返回data是不行的，必须把data作为一个objec的属性去返回，因为他会直接调用value的get方法，然后得到一个值之后每次就是这个值他不会进行更新
      // 只有通过data.value调用的时候每次都是再去调用这个get方法
    }
  },
  components: {
    TabContainer
  },
  props: {
    value: {
      type: [String, Number],
      required: true
    }
  },
  methods: {
    onChange (index) {
      this.$emit('change', index)
    }
  },
  data () {
    return {
      panes: []
    }
  },
  // jsx语法
  render () {
    // const conttents = this.panes.map(pane => {
    //   return pane.active ? pane.$slots.default : null
    // })
    // console.log(conttents)
    return (
      // <div class="tabs">
      //   <ul class="tabs-header">
      //     {this.$slots.default}
      //   </ul>
      //   <div class="tab-content">
      //     {conttents}
      //   </div>
      // </div>
      <div class="tabs">
        <ul class="tabs-header">
          {this.$slots.default}
        </ul>
        <tab-container panes={this.panes}></tab-container>
      </div>
    )
  }
}
</script>
<style lang="stylus" scoped>
.tabs-header
  display flex
  list-style none
  margin 0
  padding 0
  border-bottom 2px solid #ededed
</style>