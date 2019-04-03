const Router = require('koa-router')
const path = require('path')
const fs = require('fs')
const VueServerRender = require('vue-server-renderer')
const ServerRender = require('./server-render')
// 生产环境中我们可以从硬盘中获取下面这个文件，在开发环境中我们是放在了内存里边然后在在读取
const clientManifest = require('../../public/vue-ssr-client-manifest.json')
// vue-ssr-client-manifest.json
// 创建一个renderer实例
const render = VueServerRender.createBundleRenderer(
  // 这里之所以没有和dev-ssr里边一样有data是因为我们保存在硬盘里边了，儿dev-ssr是通过ajax获取的
  path.join(__dirname, '../../server-build/vue-ssr-server-bundle.json'),
  {
    inject: false,
    // { renderToString: [Function: renderToString],
    //   renderToStream: [Function: renderToStream] }
    // 生成script和style标签然后插到ejs里边
    clientManifest: clientManifest
  }
)
const template = fs.readFileSync(
  path.join(__dirname, '../server.template.ejs'),
  'utf-8'
)
const ServerRouter = new Router()
ServerRouter.get('*', async (ctx) => {
  console.log('-------进来了')
  await ServerRender(ctx, render, template)
})
module.exports = ServerRouter
