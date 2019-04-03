import React from 'react'
import {Route} from 'react-router-dom'
import Home from './containers/Home'
import Login from './containers/Login'
// 同构的时候路由也要在服务器和客户端各跑一遍
// exact 用户严格的访问根路径的时候
// 如果我们需要做服务端渲染根据路由提前加载数据那么路由的定义我们就不能这么写了
// export default (
//   <div>
//     <Route path='/' exact component={Home}></Route>
//     <Route path='/login' exact component={Login}></Route>
//   </div>
// )


export default [
  {
    path: "/",
    component: Home,
    exact: true, // 精确匹配
    key:'home',
    loadData: Home.loadData, // 加载home组件之前要执行loadData方法，这个方法其实是定义在Home组件上的
    // routes: [
    //   {
    //     path: "/ttt",
    //     component: Login,
    //     exact: true, // 精确匹配
    //     key:'ttt',
    //   }
    // ]
  },
  {
    path: "/login",
    component: Login,
    exact: true, // 精确匹配
    key:'login',
    // loadData: Home.loadData // 加载home组件之前要执行loadData方法，这个方法其实是定义在Home组件上的
  },
];