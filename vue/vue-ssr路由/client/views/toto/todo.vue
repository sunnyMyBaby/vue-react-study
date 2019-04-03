<template>
  <div class="content">
     <input 
      type="text"
      class="input"
      autofocus="autofocus"
      placeholder="请输入相关内容"
      @keyup.enter="add($event)">
    <Item
      v-for="items in filterContent"
      :key="items.id"
      :content="items"
      @del="del">
    </Item>
    <Tabs
      :filter="filter" 
      :content="content"
      @filterFun="filterFun"
      @clear="clear">
    </Tabs>
  </div>
</template>

<script>
  import Item from './item.vue'
  import Tabs from './tabs.vue'
  let id = 0
export default {
    beforeRouteEnter (to, from, next) {
      // 跳转进入该组件之前这里拿不到htis的，但是我们又需要在这里拿到一些数据然后塞到组件里我们酒需要在next里边做了
      console.log(this + '=======')
      next(vm => {
        console.log(vm.filter)
      })
    },
    beforeRouteUpdata (to, from, next) {
      console.log('如果一个组件被复用在第二次切换进入的时候才会执行')
      // 这里mounted不会触发
      next()
    },
    beforeRouteLeave (to, from, next) {
      // ...
      console.log('在组件离开之前')
      next()
    },
    components: {
      Item,
      Tabs
    },
    data () {
      return {
        content: [
        ],
        filter: 'all'
      }
    },
    computed: {
      filterContent () {
        if (this.filter === 'all') {
          return this.content
        } else {
          const completed = this.filter === 'completed'
          return this.content.filter((item) => item.completed === completed)
        }
      }
    },
    mounted () {
      console.log('aaaaaa')
    },
    methods: {
      filterFun (state) {
        this.filter = state
      },
      add (event) {
        this.content.unshift({
          id: id++,
          item: event.target.value.trim(),
          completed: false
        })
        event.target.value = ''
      },
      del (id) {
        this.content.splice(this.content.findIndex(item => item.id === id), 1)
      },
      clear () {
        const content = this.content.filter(todo => !todo.completed)
        this.content = content
      }
    }
  }
</script>

<style scoped>
  .content{
    min-height: 300px;
    background: #ffffff;
    width: 80%;
    margin: 0 auto;
  }
  input{
    outline: none;
    width: 60%;
    height: 40px;
    border: none;
    font-size: 20px;
    color: #999;
  }
</style>