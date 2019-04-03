// const express = require('express')
// const app = express()
// const Home = require('./ cocntainers/Home/index')
// stage-0用了这个规范之后我们就可以在node环境下使用import esModulez这种规范了, 其实编译之后还是require这种语法

import express from 'express';

import { render } from './utils'
import {getStore} from '../store'
import routes from '../routes';
import { matchRoutes } from 'react-router-config'

// 搭建一个代理服务器，让nodeServer做一个中间层，我们客户端在请求接口的时候都会通过这nodeServer，然后nodeServer转发到远程服务器，而不是客户端直接请求远程服务器的数据，有利于调试错误
import proxy from 'express-http-proxy'

const app = express();

// // 当请求/api的时候代理到http://47.95.113.63
app.use('/api',proxy('http://47.95.113.63', {
  proxyReqPathResolver: function(req){
    // console.log(req.url);
    // 做了中间层代理之后这时候ssr渲染不出来了，一直转圈，
    // 为啥会出现这种情况，因为在ssr中也会执行axios.get('/api/news.json?secret=PP87ANTIPIRATE')这一段代码以便获取数据，这时候做了代理就错误了
    // 为啥会错误呢
    // 如果在浏览器运行/api/news.json = localhost:300/api/news.json
    // 但是如果在服务器运行/api/news.json = 服务器根目录下的/api/news.json 服务器根目录下的(server)
    return '/ssr/api'+ req.url;
    // 所以我们需要判断在actions.js里边做判断
  }
}))

// 处理静态文件，只要访问的是静态文件就到public里边去找,json,js,png等都是静态文件
app.use(express.static('public'))

app.get('*', (req, res) => {
  const store = getStore(req);
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
      // 处理多个接口调用时因为延时等原因造成的数据加载错误
      // 比如有a,b,c,d个组件，a,报错了走catch，这时候b,c,d没回来就得需要这种处理方式
      // 以便保证下面能触发all方法
      const promise = new Promise((resolve,reject)=>{
        item.route.loadData(store).then(resolve).catch(resolve)
      })
      promises.push(promise)
    }
  })


  // 拿到home组件之后把home组件变成字符串，然后返回给浏览器
  // res.send(
  //   render(req)
  // )
  // console.log(promises);// TODO
  Promise.all(promises).then(()=>{
    // console.log(store.getState());// 这里就可以打印出来了
    const context = {}
    const html = render(store, routes,req ,context);
    // 当我们按照routes.js方式定义路由时，transtion下有个<Redirect to="/" />重定向，当我们没有登录的时候访问
    // translation页面，客户端给我们重定向（一开始的重定向并不是服务端做的而是客户端做的）时会在context上添加一下信息 action: 'REPLACE',
    // 所以我们可以通过这个信息来做服务端301重定向
    if (context.action === 'REPLACE') {
      res.redirect(301, context.url)
    } else if(context.NotFound){
      res.status(404)
      res.send(html)
    } else {
      res.status(200)
      res.send(html)
    }
    // 到这里服务器端渲染已经完成了，但是我们刷新页面的时候还会有一段白屏，然后才会渲染出来，实际上源码里边已经有数据了的
    // 什么原因呢，这是因为虽然在服务端已经返回数据了，但是再客户端再执行一遍的时候store仍然是空的，也就是我们没有做到服务端客户端的store统一，如何解决呢
    // 这里涉及到了数据的脱水和注水,看server/index window.context,以及client/index
    // 在服务端渲染中客户端我们通过getStore()去获取数据势必会造成服务端获取一次store后客户端又获取了一次，造成数据不同步，第一次加载仍然有白屏的情况
    // 所以我们扩充了store的方法getClientStore
  })
  // console.log(store.getState()); // 这时候打印出来的state里边newsList依然是空的，因为他是异步的，所以没等执行完就已经打印了
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))