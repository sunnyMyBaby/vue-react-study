// 这里处理的是开发时的服务端渲染
// 之所以要分开发环境和生产环境的服务端渲染是因为生产环境下我们是可以通过引用静态文件的方式获取文件的
// 我们在写node.js的时候要使用require而不是import因为目前node版本还不支持我们写import
const Router = require('koa-router')// 处理koa router的插件
const Axios = require('axios')// 服务端也可以使用axios
const Fs = require('fs')
const MemoryFS = require('memory-fs')// 和fs差不多区别就是memory-fs不会把文件写到硬盘里边而是写到内存里边了，这样就会高效
const webpack = require('webpack')// 因为我们在开发的时候是需要直接在node.js里边打包webpack
const VueServerRender = require('vue-server-renderer')// 服务端渲染要用到官方提供的这个插件
const serverConfig = require('../../build/webpack.config.server')
// console.log(serverConfig)
const path = require('path')
// const Ejs = require('ejs')
const ServerRender = require('./server-render')
// 我们首先要做的是node.js环境里边编译webpack，就是把webpack跑起来
const sererCompiler = webpack(serverConfig)// 我们直接run或者watch然后就可以生成我们在服务端需要的bunder
const mfs = new MemoryFS()
// 执行我们的webpack编译输出的目录是我们的mfs里边
sererCompiler.outputFileSystem = mfs

// bundle记录webapck每次打包产生的新的文件
let bundle
// watch的好处是我们没次修改服务端相关代码会重新打包
sererCompiler.watch({}, (err, status) => {
  if (err) throw err
  // 有些报错不是打包的错误而是eslint的错误不会在err里边出现而是会在status里出现所以需要通过status发现
  status = status.toJson()
  status.errors.forEach(err => console.log(err))
  status.warnings.forEach(warn => console.warn(warn))
  // 获取打包后的服务端代码路径， 使用了VueServerRender之后输出的文件名默认就是
  const bundlePath = path.join(
    serverConfig.output.path,
    'vue-ssr-server-bundle.json'// 这里我们使用的不是outPut写的那个filename，没错使用了VueServerRender打包后就是json文件
  )
  // 从内存里读取json文件，指定utf-8否则读出来为二进制
  bundle = JSON.parse(mfs.readFileSync(bundlePath, 'utf-8'))
  // console.log(bundle)
  console.log('dev-ssr，webpack打包')
})

// 处理整个服务端渲染要返回的东西，只需要执行ctx.body返回即可
const handleSSR = async (ctx) => {
  // 因为首次进来服务端渲染可能没完成所以bundle啥也没有
  if (!bundle) {
    ctx.body = '骚年请等会儿，这时候服务端还没渲染完成'
    return false
  } else {
    // 如果有我们就返回一个完整的html,所以这里我们需要一个ejs模版引擎处理来帮我生成一个完整的html
    const template = Fs.readFileSync(
      path.join(__dirname, '../server.template.ejs'),
      'utf-8'
    )

    // 我们还做一步操作获取客户端就是webpack.dev.server打包的js文件的地址，因为我们要拿到这个地址之后才能在拼接html的时候添加到html里边在客户端才能动态操作点击之类的
    // 但是这是两个进程我们没法办法在两个进程里边通过任何代码获取这个webpack.dev.server打包的js文件，
    // 所以这里我们就需要用到axios去发送一个请求然后获取vue-ssr-client-manifest.json文件
    // 在webpack.config.base中如果配置了publicPath这里一定更要记得添加
    const clientBundleJson = Axios.get('http://127.0.0.1:8000/public/vue-ssr-client-manifest.json')
    // 获取json里边的内容
    const clientBundData = clientBundleJson.data
    // 通过VueServerRender提供方法帮我们生成一个我们可以直接调用的renderer的方法function
    // renderer是一个functoin，然后通过renderer创建一个appSting
    const renderer = VueServerRender.createBundleRenderer(
      bundle, {
        // VueServerRender是可以指定一个template，但是这个template需要按VueServerRender官方提供的模版形式指定，它会把我们指定的一些内容插入进去，
        //  但是限制很大，导致有些功能没法做，所以我们不需要了，我们只需要把我们的app string渲染出来就可以了，然后自己处理余下内容
        inject: false,
        // 这样就会生成一个带script标签的js文件引用的字符串，然后我们可以把他直接填到ejs里边
        clientBundData
      }
    )
    await ServerRender(ctx, renderer, template)
  }
}
const router = new Router()
// 在服务端里边通过koa2-router处理所有的请求都通过handleSSR去处理
router.get('*', handleSSR)
module.exports = router
