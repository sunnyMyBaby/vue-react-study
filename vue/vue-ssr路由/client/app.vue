<template>
  <div id="app">
   <div id="cover"></div>
   <Header></Header>
   <transition name="fade">
    <router-view />
   </transition>
   <Footer></Footer>
  </div>
</template>

<script>
  // vuex 提供的帮助方法
  import {
    // 这两个对应的是获取
    mapState,
    mapGetters,
    // 这两个对应的是操作所以写在methonds里边
    mapActions,
    mapMutations
  } from 'vuex'
  export default {
    data () {
      return {

      }
    },
    mounted () {
    },
    computed: {
    },
    methods: {

    }
  }
</script>

<style scoped>
 #cover{
   position: absolute;
   left: 0;
   top: 0;
   right:0;
   bottom: 0;
   background-color: #999;
   opacity: 0.4;
   z-index: -1
 }
</style>