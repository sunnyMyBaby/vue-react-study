<template>
  <div class="items">
    <span class="left">内容长度{{contentLength}}</span>
    <span>
      <span v-for="item in states" :key="item.class" :class="[item.class,filter === item.class ? 'actived':'']"
      @click="filterFun(item.class)">
        {{item.label}}
      </span>
    </span>
    <span class="clear" @click="clear">清除</span>
  </div>
</template>

<script>
  export default {
    props: {
      filter: {
        type: String,
        default: ''
      },
      content: {
        type: Array,
        required: true
      }
    },
    computed: {
      contentLength () {
        return this.content.filter(items => !items.completed).length
      }
    },
    data () {
      return {
        states: [
          {
            label: '全部',
            class: 'all'
          },
          {
            label: '选中',
            class: 'active'
          },
          {
            label: '完成',
            class: 'completed'
          }
        ]
      }
    },
    methods: {
      filterFun (filter) {
        console.log(filter)
        this.$emit('filterFun', filter)
      },
      clear () {
        this.$emit('clear')
      }
    }
  }
</script>

<style scoped>
  /* .all{
    color: red;
  } */
  .actived{
    color: red;
  }
  /* .completed{
    color: red;
  } */
</style>