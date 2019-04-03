<script>
export default {
  name: 'Tab',
  inject: ['data'],
  props: {
    // 永远存储这个tab对应的是那个value
    index: {
      required: true,
      type: [Number, String]
    },
    // tab内容
    label: {
      type: String,
      default: 'tab'
    }
  },
  computed: {
    active () {
      // return this.$parent.value === this.index
      return this.index === this.data.value
    }
  },
  mounted () {
    this.$parent.panes.push(this)
  },
  methods: {
    handleClick () {
      this.$parent.onChange(this.index)
    }
  },
  render () {
    // 里边的内容有两种形式第一种是插槽的，默认使用插槽
    const tab = this.$slots.label || <span>{this.label}</span>
    const classNames = {
      tab: true,
      active: this.active
    }
    return (
      <li class={classNames} onClick={this.handleClick}>
        {tab}
      </li>
    )
  }
}
</script>
<style lang="stylus" scoped>
.tab
  list-style none
  line-height 40px
  margin-right 30px
  position relative
  bottom -2px
  cursor pointer
  &.active
    border-bottom 2px solid blue
  &:last-child
    margin-right 0
</style>