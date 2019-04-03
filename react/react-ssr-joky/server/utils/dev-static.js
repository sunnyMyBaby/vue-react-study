const axios = require('axios')
const webpack = require('webpack')
const serverConfig = require('../../build/webpack.config.server')
const memoryFs = require('memory-fs')
const proxy = require('http-proxy-middleware')
const path = require('path')

const serverRender = require('./server-render')

// 在获取异步数据的时候react本身是不提供这种功能的所以我们需要通过其他插件搞定react-async-bootstrapper
// 这个不要写错名字
let serverBundle, createStoreApp
const getTemplate = () => {
  return new Promise((resolve, reject) => {
    // 获取客户端模版文件
    axios.get('http://localhost:8000/public/server.ejs')
      .then((res) => {
        resolve(res.data)
      }).catch((err) => {
        reject(err)
      })
  })
}

// 在内存读写文件,提高效率
const mfs = new memoryFs()
// 获取server端的bundle,vue 同样也是获取的是server的bundle
const serverCompiler = webpack(serverConfig)
serverCompiler.outputFileSystem = mfs
serverCompiler.watch({}, (err, stats) => {
  if (err) throw err
  stats = stats.toJson()
  stats.errors.forEach(err => console.log(err))
  stats.warnings.forEach(warn => console.log(warn))
  // 获取服务端bundle的路径
  const bundlePath = path.join(
    serverConfig.output.path,
    serverConfig.output.filename
  )
  // 这个module其实就是我们使用的export.modlue,这是一个原生的模块
  const NativeModule = require('module')
  const vm = require('vm')
  const getModuleFromString = (bundle, filename) => {
    const m = { exports: {} }
    // wrap方法可以把可执行的js代码包装一下类似于(function(exports,require,module,filename,_dirname){
    //   这里才是真正要执行的代码
    //   ...bundle code
    // })
    //  这样包装之后有啥效果呢，我们可以传入exports，这个exports就是...bundle code里边执行的export.modlue一样的效果
    const wrapper = NativeModule.wrap(bundle)
    const script = new vm.Script(wrapper, {
      filename: filename,
      displayErrors: true
    })
    const result = script.runInThisContext()// 指定执行环境
    result.call(m.exports, m.exports, require, m)
    return m
  }

  const Module = module.constructor// module对应的就是module.exports这种的constructor是他的构造方法，然后我们通过这个构造方法构造新的module
  const bundle = mfs.readFileSync(bundlePath, 'utf-8')
  const m = getModuleFromString(bundle, 'server-entry.js')
  // const m = new Module()
  // m._compile(bundle, 'server-entry.js')// 用module去解析string的内容，他会给我们生成一个新的模块,一定要指定module的名字，否则无法在缓存中存储内容
  serverBundle = m.exports
  // serverBundle = m.exports.default// 因为我们用的module.constructor解析的自然就是.fault才能获取内容
  // 到这一步的时候我们虽然都处理了所有的请求结果，返回的也都是服务端的数据但是还是不能渲染出来，因为在开发环境中并没有静态文件生成，我们获取不到静态文件，所以需要做一些处理，都是在内存里边的，所以我们需要做代理
  // 因为客户端的js都是在webpack.dev.server里边去存储的，然后通过一个http服务export出来的，所以我们通过代理的方式把静态文件代理到webpack.dev.server启动的这个服务上面
  // createStoreApp = m.exports.createStoreApp

  //  当我们在config里边配置如下时回报Cannot find module 'react'错误，这是因为我们使用的是new Module()把我们打包出来的一个server-entry.js去compile到一个module里边，这种方式呢无法通过require方式从node_modules引用包，因为如下配置不会打包react，mobx等
  //  怎么解决呢看getModuleFromString方法
  // externals: Object.keys(require('../package.json').dependencies),
})

module.exports = function (app) {
  // 代理
  app.use('/public', proxy({
    target: 'http://localhost:8000'
  }))
  app.get('*', function (req, res, next) {
    // 有可能还没有编译完成
    if (!serverBundle) {
      return res.send('请等待编译')
    }
    getTemplate().then(template => {
      return serverRender(serverBundle, template, req, res)
    }).catch(next)
  })
}
// ---------------------------------------------
// const axios = require('axios')
// const webpack = require('webpack')
// const serverConfig = require('../../build/webpack.config.server')
// const memoryFs = require('memory-fs')
// const reactDomServer = require('react-dom/server')
// const proxy = require('http-proxy-middleware')
// const ejs = require('ejs')
// const serialize = require('serialize-javascript')
// const Helmet = require('react-helmet').default // 也是使用的export import的方法写的
// const path = require('path')

// // 在获取异步数据的时候react本身是不提供这种功能的所以我们需要通过其他插件搞定react-async-bootstrapper
// // 这个不要写错名字
// const asyncBootStrap = require('react-async-bootstrapper')
// let serverBundle, createStoreApp
// const getTemplate = () => {
//   return new Promise((resolve, reject) => {
//     // 获取客户端模版文件
//     axios.get('http://localhost:8000/public/server.ejs')
//       .then((res) => {
//         resolve(res.data)
//       }).catch((err) => {
//         reject(err)
//       })
//   })
// }

// // 在内存读写文件,提高效率
// const mfs = new memoryFs()
// // 获取server端的bundle,vue 同样也是获取的是server的bundle
// const serverCompiler = webpack(serverConfig)
// serverCompiler.outputFileSystem = mfs
// serverCompiler.watch({}, (err, stats) => {
//   if (err) throw err
//   stats = stats.toJson()
//   stats.errors.forEach(err => console.log(err))
//   stats.warnings.forEach(warn => console.log(warn))
//   // 获取服务端bundle的路径
//   const bundlePath = path.join(
//     serverConfig.output.path,
//     serverConfig.output.filename
//   )
//   // 这个module其实就是我们使用的export.modlue,这是一个原生的模块
//   const NativeModule = require('module')
//   const vm = require('vm')
//   const getModuleFromString = (bundle, filename) => {
//     const m = { exports: {} }
//     // wrap方法可以把可执行的js代码包装一下类似于(function(exports,require,module,filename,_dirname){
//     //   这里才是真正要执行的代码
//     //   ...bundle code
//     // })
//     //  这样包装之后有啥效果呢，我们可以传入exports，这个exports就是...bundle code里边执行的export.modlue一样的效果
//     const wrapper = NativeModule.wrap(bundle)
//     const script = new vm.Script(wrapper, {
//       filename: filename,
//       displayErrors: true
//     })
//     const result = script.runInThisContext()// 指定执行环境
//     result.call(m.exports, m.exports, require, m)
//     return m
//   }

//   const Module = module.constructor// module对应的就是module.exports这种的constructor是他的构造方法，然后我们通过这个构造方法构造新的module
//   const bundle = mfs.readFileSync(bundlePath, 'utf-8')
//   const m = getModuleFromString(bundle, 'server-entry.js')
//   // const m = new Module()
//   // m._compile(bundle, 'server-entry.js')// 用module去解析string的内容，他会给我们生成一个新的模块,一定要指定module的名字，否则无法在缓存中存储内容
//   serverBundle = m.exports.default// 因为我们用的module.constructor解析的自然就是.fault才能获取内容
//   // 到这一步的时候我们虽然都处理了所有的请求结果，返回的也都是服务端的数据但是还是不能渲染出来，因为在开发环境中并没有静态文件生成，我们获取不到静态文件，所以需要做一些处理，都是在内存里边的，所以我们需要做代理
//   // 因为客户端的js都是在webpack.dev.server里边去存储的，然后通过一个http服务export出来的，所以我们通过代理的方式把静态文件代理到webpack.dev.server启动的这个服务上面
//   createStoreApp = m.exports.createStoreApp

//   //  当我们在config里边配置如下时回报Cannot find module 'react'错误，这是因为我们使用的是new Module()把我们打包出来的一个server-entry.js去compile到一个module里边，这种方式呢无法通过require方式从node_modules引用包，因为如下配置不会打包react，mobx等
//   //  怎么解决呢看getModuleFromString方法
//   // externals: Object.keys(require('../package.json').dependencies),
// })
// const getStoreState = (stores) => {
//   return Object.keys(stores).reduce((result, storeName) => {
//     result[storeName] = stores[storeName].toJson()
//     return result
//   }, {})
// }
// module.exports = function (app) {
//   // 代理
//   app.use('/public', proxy({
//     target: 'http://localhost:8000'
//   }))
//   app.get('*', function (req, res) {
//     getTemplate().then(template => {
//       console.log('aaaaaaa')
//       const routerContext = {}
//       const stores = createStoreApp()
//       const app = serverBundle(stores, routerContext, req.url)
//       asyncBootStrap(app).then(() => {
//         // 有redirect的情况下，reactrouter是会给routerContext上面加一个属性url
//         if (routerContext.url) {
//         // 调重定向的一个头，然后通过在header设置Location熟悉跳转到重定向的地址
//           res.status(302).setHeader('Location', routerContext.url)
//           res.end()// 结束这次请求
//           return
//         }
//         const helmet = Helmet.rewind()
//         console.log('-------------')
//         // 这是源代码拿到的是3但是现实出来的确是0，这是因为服务端和客户端渲染的数据不同步
//         // 怎么解决呢，在store里边加一个toJson
//         console.log(stores)
//         // 获取到客户端store的数据，然后我们要想办法把这些数据插入到html里边，然后才有了client里边的HTMLPlugin的模板
//         const state = getStoreState(stores)
//         // 要渲染返回给客户端的是服务端打包生成的那个bundle,这个bundle只包含了内容并没有那些个html这样的标签，但是css，js等路径在打包服务端的时候又没有，所以需要通过客户端打包的那个html文件来获取，所以才这么复杂
//         const content = reactDomServer.renderToString(app)
//         const html = ejs.render(template, {
//           meta: helmet.meta.toString(),
//           title: helmet.title.toString(),
//           style: helmet.style.toString(),
//           link: helmet.link.toString(),
//           appString: content,
//           initialState: serialize(state)
//           //  写到这里依然不能正确显示代码，因为我们并没有设置到store里边去、怎么做呢看store里边的cunstructor方法,然后app.js要读取ejs里边的 window.__INITIAL__START__ = <%%- initialState%>
//           // {"appState":{"count":3,"name":"yangguang"}}
//           // 这种写法是不对的，以为你ejs会把他toSting然后把一个对象渲染为字符串，所以我们需要序列化js，把state对象转为string，serialize-javascript
//         })
//         res.send(html)
//       })
//     })
//   })
// }
