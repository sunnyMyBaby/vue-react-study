const Router = require('koa-router')
const apiRouter = new Router({ prefix: '/api' })
const successResponse = (data) => {
  return {
    success: true,
    data
  }
}
apiRouter.get('/itmes', async (ctx) => {
  const data = await ctx.db.getAllData()
  ctx.body = successResponse(data)
})
  .post('/itme', async (ctx) => {
    // 创建
    const data = await ctx.db.addItem(ctx.request.body)
    ctx.body = successResponse(data)
  })
module.exports = apiRouter
