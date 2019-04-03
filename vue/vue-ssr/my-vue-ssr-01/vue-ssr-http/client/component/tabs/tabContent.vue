<script>
export default {
  props: {
    panes: {
      type: Array,
      required: true
    }
  },
  render () {
    const conttents = this.panes.map(pane => {
      return pane.active ? pane.$slots.default : null
    })
    console.log('aaaaa')
    return (
      <div class="tab-content">
        {conttents}
      </div>
    )
  }
}
</script>
