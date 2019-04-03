// import Vuex from 'vuex'
// import Vue from 'vue'
// // zai new Vuex.Store之前先
// // 同样的我们要用到服务端渲染，所以呢这里就应该每次返回一个新的store，不然就会造成内存溢出的问题
// Vue.use(Vuex)
// const store = new Vuex.Store({
//   state: {
//     count: 0
//   },
//   mutations: {
//     // 这里主要是修改state的
//     updateCount (state, num) {
//       state.count = num
//     }
//   }
// })
// export default store

import Vuex from 'vuex'
import defaultState from './state/state'
import mutations from './mutation/mutation'
import getters from './getters/getters'
import actions from './action/action'
// 同样的我们要用到服务端渲染，所以呢这里就应该每次返回一个新的store，不然就会造成内存溢出的问题
export default () => {
  // 这时候并没有new 并没有执行到这里所以不需要Vue.use(Vuex)
  const store = new Vuex.Store({
    // 设置为true之后this.$store.state.count = 0这种就不能修改了，只能commit
    // 这个只能开发环境用
    strict: process.env.NODE_ENV === 'development',
    state: defaultState,
    mutations,
    getters,
    actions,
    // 自定义的vuex插件
    // plugins: [
    //   (store) => {
    //     // 这里可以做一写操作subscribeAction,subscribe等
    //     // console.log('自定义的vuex插件----这里初始化的时候就被调用')
    //     // console.log(store)
    //   }
    // ],
    // 模块
    modules: {
      AModules: {
        namespaced: true, // 这样就可以写同名的mutations，actions了
        state: {
          text: 'AModules'
        },
        mutations: {
          updateText (state, text) {
            console.log('state...是AModules下的')
            state.text = text
          }
        },
        getters: {
          textPlus (state, getters, rootState) {
            console.log(getters)// 模块下的所有getters方法
            console.log(rootState)
            return state.text
          }
        },
        actions: {
          add ({ state, commit, rootState }) {
            console.log(state)
            console.log(commit)
            console.log(rootState)
            console.log(rootState.count)
            // commit('updateText', rootState.count)这里commit的是该模块下的
            commit('updateCount', 'asdfasdf', { root: true })// 这里会在全局下去找updateText
          }
        }
      },
      BModules: {
        namespaced: true,
        state: {
          text: 'BModules'
        },
        getters: {
          textPlus (state, getters, rootState) {
            console.log(getters)// 木块下的
            console.log(rootState.regester)
            return state.text
          }
        },
        actions: {
          add ({ commit }) {
            console.log('--------')
            commit('AModules/updateText', 'aaa, bbbbb', { root: true })
          }
        }
      }
    }
  })
  // 路由修改后的热更替，就不会在我们修改路由时刷新页面了
  if (module.hot) {
    module.hot.accept([
      './state/state',
      './mutation/mutation',
      './getters/getters',
      './action/action'
    ], () => {
      // 第二个参数开启热更行功能
      // 这里注意我们的子模块是没有热更新功能，如果要有那就需要我们再手动添加
      const newState = require('./state/state').default
      const newMutation = require('./mutation/mutation').default
      const newGetters = require('./getters/getters').default
      const newAction = require('./action/action').default
      // store提供的api动态更新我们加载过来的模块
      store.hotUpdate({
        state: newState,
        mutations: newMutation,
        getters: newGetters,
        actions: newAction
      })
    })
  }
  return store
}
