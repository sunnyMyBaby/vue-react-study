// // 只处理/public开头的静态文件
// const Router = require('koa-router');
// const send = require('koa-send')
// const public = new Router({prefix: '/public'})
// public.get('/*', async(ctx)=>{
//   console.log('aaaa')
//   console.log(ctx);
//   await send(ctx,`dist/${ctx.path}`)
// })
// module.exports = public

// const Koa = require('koa')
// var Router = require('koa-router');
// const ReactSSR = require('react-dom/server')

// // 因为我们打包的时候指定的是commonjs2的方法module.defalut所以需要.default
// const serverEntry = require('../dist/server-entry.js').default;

// const fs = require('fs')
// const path = require('path')

// // 读取client生成html文件
// const template = fs.readFileSync(path.join(__dirname,'../dist/index.html'),'utf-8')

// const public = require('./public.router')

// const app = new Koa();
// var router = new Router();
// // app.use(static(__dirname + '/dist'));
// // app.use(async(ctx,next)=>{
// //   const appString = ReactSSR.renderToString(serverEntry);
// //   ctx.body = template.replace('<!-- <app></app> -->',appString);
// //   next()
// // })
// app.use(public.routes()).use(public.allowedMethods())
// app.use(router.routes()).use(router.allowedMethods());
// app.listen(3000,()=>{
//   console.log('开启服务3000成功')
// });
