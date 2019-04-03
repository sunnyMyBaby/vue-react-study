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
  let id = 0;
  export default {
    components:{
      Item,
      Tabs
    },
    data(){
      return{
        content:[
        ],
        filter: 'all'
      }
    },
    computed:{
       filterContent(){
         if(this.filter === 'all'){
          return this.content;
         } else {
           const completed = this.filter === 'completed';
           return this.content.filter((item)=>item.completed === completed)
         }
       }
    },
    methods:{
      filterFun(state){
        this.filter = state;
        console.log(state);
      },
      add(event){
        console.log(event);
        this.content.unshift({
          id: id++ ,
          item: event.target.value.trim(),
          completed: false,
        })
        event.target.value = '';
      },
      del(id){
        this.content.splice(this.content.findIndex(item => item.id === id), 1);
      },
      clear(){
        const content = this.content.filter(todo=> !todo.completed);
        this.content = content;
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