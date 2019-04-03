const ejs = require('ejs')
const serialize = require('serialize-javascript')
const asyncBootStrap = require('react-async-bootstrapper')
const reactDomServer = require('react-dom/server')
const Helmet = require('react-helmet').default // 也是使用的export import的方法写的

const getStoreState = (stores) => {
  return Object.keys(stores).reduce((result, storeName) => {
    result[storeName] = stores[storeName].toJson()
    return result
  }, {})
}
module.exports = (bundle, template, req, res) => {
  return new Promise((resolve, reject) => {
    const createStoreApp = bundle.createStoreApp
    const createApp = bundle.default
    const routerContext = {}
    const stores = createStoreApp()
    const app = createApp(stores, routerContext, req.url)
    asyncBootStrap(app).then(() => {
      // 有redirect的情况下，reactrouter是会给routerContext上面加一个属性url
      if (routerContext.url) {
      // 调重定向的一个头，然后通过在header设置Location熟悉跳转到重定向的地址
        res.status(302).setHeader('Location', routerContext.url)
        res.end()// 结束这次请求
        return
      }
      const helmet = Helmet.rewind()
      console.log('-------------')
      // 这是源代码拿到的是3但是现实出来的确是0，这是因为服务端和客户端渲染的数据不同步
      // 怎么解决呢，在store里边加一个toJson
      console.log(stores)
      // 获取到客户端store的数据，然后我们要想办法把这些数据插入到html里边，然后才有了client里边的HTMLPlugin的模板
      const state = getStoreState(stores)
      // 要渲染返回给客户端的是服务端打包生成的那个bundle,这个bundle只包含了内容并没有那些个html这样的标签，但是css，js等路径在打包服务端的时候又没有，所以需要通过客户端打包的那个html文件来获取，所以才这么复杂
      const content = reactDomServer.renderToString(app)
      const html = ejs.render(template, {
        meta: helmet.meta.toString(),
        title: helmet.title.toString(),
        style: helmet.style.toString(),
        link: helmet.link.toString(),
        appString: content,
        initialState: serialize(state)
        //  写到这里依然不能正确显示代码，因为我们并没有设置到store里边去、怎么做呢看store里边的cunstructor方法,然后app.js要读取ejs里边的 window.__INITIAL__START__ = <%%- initialState%>
        // {"appState":{"count":3,"name":"yangguang"}}
        // 这种写法是不对的，以为你ejs会把他toSting然后把一个对象渲染为字符串，所以我们需要序列化js，把state对象转为string，serialize-javascript
      })
      res.send(html)
      resolve()
    }).catch(reject)
  })
}
