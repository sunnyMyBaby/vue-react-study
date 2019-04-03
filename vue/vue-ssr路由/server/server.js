// 这里我们使用的是koa2
// 因为我们要做服务端渲染所以我们要起一个node server因为只有node server才能做
const Koa = require('koa')
const pageRouter = require('./routers/dev-ssr')
// 生成一个app
const app = new Koa()

const isDev = process.env.NODE_ENV === 'development'
console.log('-------')
// 记录所有的请求
app.use(async (ctx, next) => {
  try {
    console.log(`进来了那些路径${ctx.path}`)
    // 等待执行完毕之后进入到下一步
    await next()
  } catch (err) {
    console.log(err)
    ctx.status = 500
    if (isDev) {
      // 开发环境错误直接显示到页面上
      ctx.body = err.message
    } else {
      ctx.body = '请重新尝试'
    }
  }
})
// allowedMethods处理的业务是当所有路由中间件执行完成之后,若ctx.status为空或者404的时候,丰富response对象的header头.
app.use(pageRouter.routes()).use(pageRouter.allowedMethods()) // 这是koa-router固定用法
const HOST = process.env.HOST || '0.0.0.0'
const PORT = process.env.PORT || 3333
app.listen(PORT, HOST, () => {
  console.log(`监听端口成功${HOST}-${PORT}`)
})
