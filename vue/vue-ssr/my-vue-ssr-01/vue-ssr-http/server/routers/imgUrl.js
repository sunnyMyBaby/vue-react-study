// 处理静态文件路径,就像处理favicon.ico一样
const Router = require('koa-router')
// 这个插件的功能就是访问的路径比如说是/a/b/c.jpg,不是我们想要的我们可以修改
const send = require('koa-send')
const imgUrl = new Router({ prefix: '/resources' })
// /resources 下的所有请求都到这里来
imgUrl.get('/*', async (ctx) => {
  await send(ctx, `public/${ctx.path}`)
})
module.exports = imgUrl
