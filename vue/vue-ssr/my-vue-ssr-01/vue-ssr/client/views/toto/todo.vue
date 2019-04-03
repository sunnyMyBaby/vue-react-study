<template>
  <div class="content">
    <div class="tab-container">
      <tabs :value='tabValue' @change="handleChange">
        <tab label='tab1' index ='1'>
          <!-- 这里边动态绑定，inputcontent会存在一个问题就是我们在输入时组件里边的数据总会慢半拍 -->
          <!-- 这是跟我们的vue原理有关系，每个节点会创建虚拟dom，他会去判断他的props，以及自己声明的data有没有变化 -->
          <!-- 如果props和data对比过程没有发现任何变化的话，他就导致他不会重新渲染内容；这里他会去判断panes这个数组他认为一开始输入的时候是没有变化的 -->
          <!-- 解决方法是穿创建的tabContent.vue -->
          <span>内容1{{inputcontent}}</span>
        </tab>
        <tab index ='2'>
          <span slot='label' style='color:red;'>{{tabValue}}</span>
          <span>内容2</span>
        </tab>
        <tab label='tab3' index ='3'>
          <span>内容3</span>
        </tab>
      </tabs>
    </div>
     <input 
      type="text"
      class="input"
      autofocus="autofocus"
      placeholder="请输入相关内容"
      v-model="inputcontent"
      @keyup.enter="add($event)">
    <Item
      v-for="items in filterContent"
      :key="items.id"
      :content="items"
      @del="del">
    </Item>
    <my-tabs
      :filter="filter" 
      :content="content"
      @filterFun="filterFun"
      @clear="clear">
    </my-tabs>
  </div>
</template>

<script>
  import Item from './item.vue'
  import myTabs from './tabs.vue'
  let id = 0
export default {
    metaInfo: {
      title: 'meta下级会覆盖上级的'
    },
    beforeRouteEnter (to, from, next) {
      // 跳转进入该组件之前这里拿不到htis的，但是我们又需要在这里拿到一些数据然后塞到组件里我们酒需要在next里边做了
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
      myTabs
    },
    data () {
      return {
        content: [
        ],
        filter: 'all',
        tabValue: '1',
        inputcontent: ''
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
    },
    methods: {
      handleChange (index) {
        this.tabValue = index
      },
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
  .tab-container{
    background: #fff;
    padding: 0 15px;
  }
</style>