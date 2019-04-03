// // import Koa  = require('koa')  commonJs方式引入
// // 我们用了webpack，stage-0 就可以通过import方式引入了
// import Koa  from 'koa'
// import Home from './src/containers/Home'
// import React from 'react'
// import staticFiles from 'koa-static' 
// import path from 'path'
// import {renderToString} from 'react-dom/server'
// const router = require('koa-router')(); 
// // react-ssr 服务端需要用到react-dom/server，把react虚拟dom转化为字符串
// // react-ssr 是建立在react 虚拟dom机制上的（虚拟都没是真实DOM的一个js对象印射）
// // 在客户端渲染的是时候我们可以把这个虚拟dom转换为真是dom
// // ReactDom.render(<Home/>),在服务端渲染时可以把它专为字符串返回给浏览器
// // 客户端渲染----react代码在浏览器上运行，消耗的是用户浏览器的性能
// // 服务端渲染----代码在服务器上运行，消耗的是服务器的性能，而且react也是很消耗计算性能的代码因为需要虚拟dom转化成字符串，做各种个样的运算比对特别消耗性能，在服务器上运行的时候也是特别消耗性能的，所以服务端架构很消耗服务器性能

// const app = new Koa();
// // 请求静态文件都到public目录下去找-相对于 app.js 的路径
// app.use(staticFiles(path.join(__dirname, 'public')))
// // 相对于 app.js 的路径
// app.use(async ctx=>{
//   // 变成一个jsx语法，当然需要用到react
//   // 拿到home组件之后把这个组件变成了字符串，然后返回给浏览器
//   // express 是放在send(renderToString(<Home/>))里的
//   ctx.body = `
//     <html>
//       <head>
//         <title></title>
//       </head>
//       <body>
//          ${renderToString(<Home/>)}
//          <img src='/data.png'>
//          <script src="/index.js"></script>
//       </body>
//     </html>
//   `
// })
// app.listen(3000)





// import Koa  = require('koa')  commonJs方式引入
// 我们用了webpack，stage-0 就可以通过import方式引入了
import express  from 'express'
import Home from './containers/Home/index'
import React from 'react'
import {renderToString} from 'react-dom/server'
// react-ssr 服务端需要用到react-dom/server，把react虚拟dom转化为字符串
// react-ssr 是建立在react 虚拟dom机制上的（虚拟都没是真实DOM的一个js对象印射）
// 在客户端渲染的是时候我们可以把这个虚拟dom转换为真是dom
// ReactDom.render(<Home/>),在服务端渲染时可以把它专为字符串返回给浏览器
// 客户端渲染----react代码在浏览器上运行，消耗的是用户浏览器的性能
// 服务端渲染----代码在服务器上运行，消耗的是服务器的性能，而且react也是很消耗计算性能的代码因为需要虚拟dom转化成字符串，做各种个样的运算比对特别消耗性能，在服务器上运行的时候也是特别消耗性能的，所以服务端架构很消耗服务器性能

const app = new express();
// 请求静态文件都到public目录下去找-相对于 app.js 的路径
// 相对于 app.js 的路径
app.use(express.static('public'))
app.get('/',function (req,res){
  // 变成一个jsx语法，当然需要用到react
  // 拿到home组件之后把这个组件变成了字符串，然后返回给浏览器
  // express 是放在send(renderToString(<Home/>))里的
  res.send (`
    <html>
      <head>
        <title></title>
      </head>
      <body>
         <div id="root">${renderToString(<Home/>)}</div>
         <script src="index.js"></script>
      </body>
    </html>
  `)
})
app.listen(3000)