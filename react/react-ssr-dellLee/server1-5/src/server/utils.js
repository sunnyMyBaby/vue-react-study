import React from 'react';
import Home from '../containers/Home/index';

// 同构的时候路由也要在服务器和客户端各跑一遍
import {StaticRouter, Route, matchPath} from 'react-router-dom';
// react-dom 提供的服务端渲染方式
import { renderToString } from 'react-dom/server';

import { Provider } from 'react-redux'

// Home 的本质是一个虚拟dom，把虚拟dom转为string，在服务端渲染的时候，我们就可以给浏览器提供一个渲染好的字符串
  // 拿到home组件之后把home组件变成字符串，然后返回给浏览器
// const content = renderToString(<Home />);

// ssr的时候react-router提供了context来做数据的传递，
// StaticRouter在使用的不像BrowserRouter会动态感知当前处于哪个路由
// 如果我们要想知道当前路由怎么办呢，我们得拿到用户请求的路径（req）然后传递给StaticRouter，这时候router才知道用户所处在的路径


// 在使用 renderToString时组件里边的事件是不会渲染出来的，只会渲染基础的内容
// 如果我们想要事件也能执行怎么做呢？首先让基本内容能够渲染出来，然后让相同的组件像传统的react项目在浏览器端再运行一下，这就引除了同构的概念（一套react代码在服务端执行一次，在客户端执行一次）
// 但是如何让相同的react代码在浏览器端再运行一次呢？
// 既然我们可以在返回给浏览器的文件里边添加一个js文件，那么我们就可以在这个js文件里边做手脚
// 看client下index.js即可

export const render = (req,routes, store) => {
  // 在服务端执行react代码
  // 这个是jsx的写法所以一定要映入react
  const content = renderToString((
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
      {/* 传统创建路由方法引用直接这么写就可以了，但是呢为了解决服务端获取store问题，我们修改了路由配置方式就需要使用另外一种路由使用方法 */}
      {/* {routes} */}
      <div>
      {
         routes.map(route => (
            <Route {...route}/>
         ))
      }
      </div>
      </StaticRouter>
    </Provider>
  ));
  return `<html>
      <head>
        <title>HELLO</title>
      </head>
      <body> 
        <div id="root">${content}</div>
        <script>
          window.context = {
            state: ${JSON.stringify(store.getState())}
          }
        </script>
        <script src='/index.js'></script>
      </body>
    </html>`
};