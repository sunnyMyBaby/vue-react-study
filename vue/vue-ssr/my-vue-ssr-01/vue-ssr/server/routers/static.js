// 处理静态文件路径,就像处理favicon.ico一样
const Router = require('koa-router')
const send = require('koa-send')
// 只会处理/public开头的路径
const StaticRouter = new Router({ prefix: '/public' })
StaticRouter.get('/*', async ctx => {
  await send(ctx, ctx.path)
})
module.exports = StaticRouter
