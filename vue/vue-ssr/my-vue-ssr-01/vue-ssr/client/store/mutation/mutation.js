export default{
  // 这里主要是修改state的
  // 没有第三个参数
  updateCount (state, num) {
    // 这个就是我们commit的时候触发的
    state.count = num
  }
}
