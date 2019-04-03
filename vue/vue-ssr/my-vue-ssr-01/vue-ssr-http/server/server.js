// 这里我们使用的是koa2
// 因为我们要做服务端渲染所以我们要起一个node server因为只有node server才能做
const Koa = require('koa')
const pageRouter = require('./routers/dev-ssr')
const ProductionpageRouter = require('./routers/ssr')
// 处理静态文件路径的，因为我们在生产环境下是读取硬盘上的目录而在开发环境是读取内存目录的
const StaticRouter = require('./routers/static')
const apiRouter = require('./routers/api')
const createDB = require('./db/db')
const config = require('../app.config')
const db = createDB(config.db.appId, config.db.appKey)
const ImgUrl = require('./routers/imgUrl')
const path = require('path')
// koa-send 处理静态文件
const send = require('koa-send')
// 生成一个app实例
let app = new Koa()
let isDev = process.env.NODE_ENV === 'development'
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
app.use(async (ctx, next) => {
  ctx.db = db
  await next()
})
app.use(async (ctx, next) => {
  // 如果请求过来的是favicon.ico我们会获取相应目录下的favicon.ico文件\
  // console.log(path.join(__dirname)) 当前文件所处路径 /Users/yangguang02/Desktop/sduty/vue/my-vue-ssr-01/vue-ssr/server
  if (ctx.path === '/favicon.ico') {
    await send(ctx, ctx.path, { root: path.join(__dirname, '../') })
  } else {
    await next()
  }
})
app.use(StaticRouter.routes()).use(StaticRouter.allowedMethods())
app.use(apiRouter.routes()).use(apiRouter.allowedMethods())
// allowedMethods处理的业务是当所有路由中间件执行完成之后,若ctx.status为空或者404的时候,丰富response对象的header头.
if (isDev) {
  app.use(pageRouter.routes()).use(pageRouter.allowedMethods()) // 这是koa-router固定用法
} else {
  // 这是koa-router固定用法
  app.use(ImgUrl.routes()).use(ImgUrl.allowedMethods())
  app.use(ProductionpageRouter.routes()).use(ProductionpageRouter.allowedMethods()) // 这是koa-router固定用法
}

const HOST = process.env.HOST || '0.0.0.0'
const PORT = process.env.PORT || 3333
app.listen(PORT, HOST, () => {
  console.log(`监听端口成功${HOST}-${PORT}`)
})
