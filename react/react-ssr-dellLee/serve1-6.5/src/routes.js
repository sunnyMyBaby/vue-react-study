import React from 'react'
import {Route} from 'react-router-dom'
import Home from './containers/Home'
import Login from './containers/Login'
import App from './App'
// 同构的时候路由也要在服务器和客户端各跑一遍
// exact 用户严格的访问根路径的时候
// 如果我们需要做服务端渲染根据路由提前加载数据那么路由的定义我们就不能这么写了
// export default (
//   <div>
//     <Route path='/' exact component={Home}></Route>
//     <Route path='/login' exact component={Login}></Route>
//   </div>
// )

// 老路由，没有多级路由，当我们添加了App.js无论何时都能显示header之后可以看只有的router配置
// export default [
//   {
//     path: "/",
//     component: Home,
//     exact: true, // 精确匹配
//     key:'home',
//     loadData: Home.loadData, // 加载home组件之前要执行loadData方法，这个方法其实是定义在Home组件上的
//     // routes: [
//     //   {
//     //     path: "/ttt",
//     //     component: Login,
//     //     exact: true, // 精确匹配
//     //     key:'ttt',
//     //   }
//     // ]
//   },
//   {
//     path: "/login",
//     component: Login,
//     exact: true, // 精确匹配
//     key:'login',
//     // loadData: Home.loadData // 加载home组件之前要执行loadData方法，这个方法其实是定义在Home组件上的
//   },
// ];


// 多级路由,多层嵌套路由的时候在使用的时候routes.map是循环不出来的，我们就要使用一个更为复杂的方法
// 这个方法是react-router-config 提供的
// 在使用多级路由的时候utils里边展示的只是第一层路由的数据也就是App.js这个路由
// 而App组件只有一个<Header/>组件，所以我们要在App组件中渲染多级路由
export default [{
  path: '/',
  component: App,
  routes: [
    {
      path: "/",
      component: Home,
      exact: true, // 精确匹配
      key:'home',
      loadData: Home.loadData, // 加载home组件之前要执行loadData方法，这个方法其实是定义在Home组件上的
    },
    {
      path: "/login",
      component: Login,
      exact: true, // 精确匹配
      key:'login',
    },
  ]
}]