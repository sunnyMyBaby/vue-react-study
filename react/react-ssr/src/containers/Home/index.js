// commonJs 语法
// const React = require('react')
// const Home = ()=>{
//   return <div>home</div>
// }
// module.exports = {
//   default: Home
// }
// 引入babel编译之后我们就可以这样写了
import React from 'react';
const Home = ()=>{
  return (
    <div>
      <div>Home</div>
      {/* 同构： */}
      {/* 这种写法的时候在服务端渲染的时候我们使用了renderToString，事件上的东西不会被渲染出来，只会把组件的基础内容渲染出来 */}
      {/* 那么我们想让点击等事件能够渲染出来要怎么办呢 ？*/}
      {/* 我们可以这样做，让一套React代码在服务端执行一次，在客户端执行一次 */}
      <button onClick={()=>{alert('aaaa')}}>
        click me
      </button>
    </div>
  )
}
export default Home