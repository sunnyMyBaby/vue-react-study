<template>
  <div id="app">
   <div id="cover">aaa</div>
   <Header></Header>
   <!-- <Todo></Todo> -->
   <!-- <router-link to="/app">app124</router-link>
   <router-link to="/app">app456</router-link>
   <router-link to="/login">login</router-link> -->
  <transition name="fade" mode="out-in">
    <router-view />
  </transition>
   <Footer></Footer>
   <button @click="add"></button>
   <!-- {{counter}}——{{firsteName}}——{{AModules}}——{{textB}}——{{textPlus}}——{{dynamicModulesState}} -->
   <!-- <transition name="fade">
    命名router-view
    <router-view name="a"/>
   </transition> -->
   <!-- <notification content="自定义全局组件"></notification> -->
  </div>
</template>

<script>
import Header from './layout/header.vue'
import Footer from './layout/footer.jsx'
// import Loading from './components/loading/loading.vue'
// // vuex 提供的帮助方法
// import {
//   // 这两个对应的是获取
//   mapState,
//   mapGetters,
//   // 这两个对应的是操作所以写在methonds里边
//   mapActions,
//   mapMutations
// } from 'vuex'
export default {
  metaInfo: {
    title: '杨广--下级会覆盖上级的'
  },
  components: {
    Header,
    Footer
    // Loading
  },
  data () {
    return {

    }
  },
  methods: {
    add () {
      this.$notify({
        content: 'aa',
        close: 'a'
      })
    }
  },
  mounted () {

    // console.log(this.$store)
    // let i = 0
    // // this.$store.state.count = 3
    // // dispatch 是用来触发action的
    // this.$store.dispatch('updateCountAsync', 2000)
    // // this.updateCountAsync(100);
    // // this.updateCount(100)
    // // 如果action和mutation同时执行同一个会优先执行mutation
    // setInterval(() => {
    //   this.$store.commit('updateCount', i++)
    // }, 1000)
    // // this.updateText('这里是模块的mutations')
    // // 使用命名空间后
    // this['AModules/updateText']('这里是模块的mutations')
    // this['AModules/add']('-------')
    // this['BModules/add']()
  }
  // computed: {
  //   // ...mapState(['count']),
  //   // ...mapState({
  //   //   counter: 'count'
  //   // }),
  //   ...mapState({
  //     counter: (state) => state.count,
  //     // 获取模块里的
  //     textB: (state) => state.BModules.text,
  //     textAnamespace: (state) => state.AModules.text,
  //     // 动态注册的
  //     dynamicModulesState: (state) => state.dynamicModules.text
  //   }),
  //   // mapGetters 的用法和上面的一样
  //   // babel是不支持...这个解构语法的，因为这是未定稿的，的我们需要安装babel-preset-stage-1s
  //   // 然后在babelrc中配置  "stage-1"
  //   // count () {
  //   //   return this.$store.state.count
  //   // },
  //   firsteName () {
  //     return this.$store.getters.filterNmae
  //   },
  //   // 模块
  //   AModules () {
  //     return this.$store.state.AModules.text
  //   },
  //   ...mapGetters({
  //     textPlus: 'AModules/textPlus'
  //   })
  // },
  // methods: {
  //   ...mapActions(['updateCountAsync', 'AModules/add', 'BModules/add']),
  //   ...mapMutations(['updateCount', 'AModules/updateText'])
  // }
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