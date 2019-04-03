import React from 'react'
// StaticRouter是react-router-dom提供给我们做服务端渲染使用的组件
import { StaticRouter } from 'react-router-dom'
// useStaticRendering这个也是mobx-react提供的服务服务端渲染的方法
import { Provider, useStaticRendering } from 'mobx-react'
import App from './views/App'

import { createStoreApp } from './store/index'

// 服务端渲染的时候使用他，需要单独打包进来，因为这个代码是不能在服务端运行的

// 使用静态的渲染，mobx在服务端渲染的时候不会重复的数据变换
// 因为mobx是reacttive的框架，每次数据变化都会造成其他方法的调用比如computed里边的方法，如果重复调用就会导致内存溢出
// 这里的store需要每次重新生成，因为ssr会有不同的请求进来，不可能说将同一个store在不同的请求里边去使用，因为第一次可能初始化了一些数据，第二次又初始化另一份数据，就会造成数据的重复修改
// 这里的store是{KEY:VALUE}的方式
// context ssr的时候传给StaticRouter的一个对象，会在静态渲染写时候对这个对象进行一些操作然后返回一些信息， 比如说做重定向，那么他会在context这个对象上添加一个url
// location是当前请求的url，这个url可以通过req里边的url地址拿到
useStaticRendering(true)
export default (store, routerContext, url) => (
  <Provider {...store}>
    <StaticRouter context={routerContext} location={url}>
      <App />
    </StaticRouter>
  </Provider>
)
export { createStoreApp }
