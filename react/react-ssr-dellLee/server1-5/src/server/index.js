// const express = require('express')
// const app = express()
// const Home = require('./ cocntainers/Home/index')
// stage-0用了这个规范之后我们就可以在node环境下使用import esModulez这种规范了, 其实编译之后还是require这种语法

import express from 'express';

import { render } from './utils'
import {getStore} from '../store'
import routes from '../routes';
import { matchRoutes } from 'react-router-config'

const app = express();

// 处理静态文件，只要访问的是静态文件就到public里边去找,json,js,png等都是静态文件
app.use(express.static('public'))

app.get('*', (req, res) => {
  const store = getStore();
    // 解决ssr中componentDidMount()方法不执行获取不到数据的问题
  // 如果在这里拿到异步数据并填充到store之中
  // https://reacttraining.com/react-router/web/guides/server-rendering
  // 1.看home下index.js文件===>Home.loadData
  // 2.看route.js 文件，路由是如何做配合的，到底需要哪个路由的数据我们不知道，所以我们需要结合当前用户请求地址和路由做判断
  // 怎么实现第二部的想法呢需要接祖import { matchPath } from "react-router-dom";
  // 所以我们也需要改造路由


  // 当然了到这里我们还不能处理复杂的理由比如嵌套，我们就需要用到matchRoutes
  // https://github.com/ReactTraining/react-router/tree/master/packages/react-router-configs
  // 3.让matchRoutes里边对应的组件的loadData方法执行，以便获取到这些组件需要获取到的数据
  const matchRoute = matchRoutes(routes, req.path)
  const promises = [];
  matchRoute.forEach((item)=>{
    // loadData 函数填充store里边的内容,item.route.loadData也是一个promise
    if (item.route.loadData) {
      // item.route.loadData(store 返回的实际上就是一个promise
      promises.push(item.route.loadData(store))
    }
  })


  // 拿到home组件之后把home组件变成字符串，然后返回给浏览器
  // res.send(
  //   render(req)
  // )
  Promise.all(promises).then(()=>{
    console.log(store.getState());// 这里就可以打印出来了
    res.send(render(req, routes, store))
    // 到这里服务器端渲染已经完成了，但是我们刷新页面的时候还会有一段白屏，然后才会渲染出来，实际上源码里边已经有数据了的
    // 什么原因呢，这是因为虽然在服务端已经返回数据了，但是再客户端再执行一遍的时候store仍然是空的，也就是我们没有做到服务端客户端的store统一，如何解决呢
    // 这里涉及到了数据的脱水和注水,看server/index window.context,以及client/index
    // 在服务端渲染中客户端我们通过getStore()去获取数据势必会造成服务端获取一次store后客户端又获取了一次，造成数据不同步，第一次加载仍然有白屏的情况
    // 所以我们扩充了store的方法getClientStore
  })
  console.log(store.getState()); // 这时候打印出来的state里边newsList依然是空的，因为他是异步的，所以没等执行完就已经打印了
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))