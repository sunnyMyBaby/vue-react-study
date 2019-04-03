// 服务端渲染操作-----开发阶段和正式阶段都是一样的
const ejs = require('ejs')
module.exports = async (ctx, renderer, template) => {
  // 要返回的是html的内容
  ctx.headers['ContentType'] = 'text/html'
  // context服务端渲染的时候传入进去的，传入vue-server-render里边去的，
  // vue-server-render渲染完成后会插入一堆的属性，方便我们渲染html，里边包括客户端js的路径css路径
  // 如果客户端没有vue-style-loader如果没有把css单独打包出来，他会在里边生成一个style标签里边会有当前路由下的需要用的样式的内容我们可以直接把他渲染到html上面
  const context = { url: ctx.path }
  try {
    // renderToString 会返回一个promise所以可以用await
    const appString = await renderer.renderToString(context)
    // 渲染html
    const html = ejs.render(
      template, {
        // 这几个参数是传到模版ejs里边的，所以需要我们在ejs模版里边插入
        appString,
        style: context.renderStyles(), // 获取客户端的css
        scripts: context.renderScripts() // 获取客户端的js
      }
    )
    ctx.body = html
    console.log('server-render 成功了')
  } catch (err) {
    console.log('server-render 错误了')
    throw err
  }
}
