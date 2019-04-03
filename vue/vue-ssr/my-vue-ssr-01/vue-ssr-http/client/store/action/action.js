export default {
  // store整个vuex
  updateCountAsync (store, time) {
    // 这是是异步的，而mutation是同步的
    console.log(time)
    setTimeout(() => {
      store.commit('updateCount', 10)
    }, time)
  }
}
