<template>
  <div :class="['item', content.completed?'completed':'']">
    <div>
      <input 
      type="checkbox"
      class="toggle"
      v-model="content.completed">
      <label>{{ content.item }}</label>
    </div>
    <div
      class="delete" 
      @click="deleteItem">
      X
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      content:{
        type: Object,
        required: true
      }
    },
    methods: {
      deleteItem(){
        this.$emit('del', this.content.id);
      }
    }
  }
</script>

<style scoped>
  .item{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .delete{
    margin-right: 20px;
    width: 12px;
    height:12px;
    color:#444;
    cursor: pointer;
  }
</style>