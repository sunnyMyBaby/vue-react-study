
const express = require('express')
const ReactSSR = require('react-dom/server')
const bodyParser = require('body-parser')// 处理请求参数
const session = require('express-session')
const serverRender = require('./utils/server-render')

// 服务端渲染会涉及到客户端的js以及服务端的bundle，所以需要判断前端环境
const isDev = process.env.NODE_ENV === 'development'

// 处理favicon
const favicon = require('serve-favicon')

const fs = require('fs')
const path = require('path')

const app = express()

app.use(bodyParser.json())
// urlencoded 对应的http的请求格式，对应的表单请求的不同类型
// 在post请求是会有json，formData的请求参数格式，这种格式我们都转成urlencoded，然后写业务直接调用urlencoded就能拿到数据
app.use(bodyParser.urlencoded({ extended: false }))

// 真实环境中需要放在redis或者数据库中的
app.use(session({
  maxAge: 10 * 60 * 1000,
  name: 'react-ssr-id', // 放一个cookeid到浏览器端
  resave: false, // 每次请求是否生成一个id
  saveUninitialized: false,
  secret: 'yangguang' // 用这个字符串去加密cookie
}))

app.use(favicon(path.join(__dirname, '../favicon.ico')))
app.use('/api/user', require('./utils/handle-login'))
app.use('/api', require('./utils/proxy'))
if (!isDev) {
  // 生产环境下做的服务端渲染
  // 因为我们打包的时候指定的是commonjs2的方法module.defalut所以需要.default
  // const serverEntry = require('../dist/server-entry.js').default
  const serverEntry = require('../dist/server-entry.js') // 有了server-render.js之后就不需要.default了
  // 读取client生成html文件
  const template = fs.readFileSync(path.join(__dirname, '../dist/server.ejs'), 'utf-8')
  app.use('/public', express.static(path.join(__dirname, '../dist')))
  app.get('*', function (req, res, next) {
    // 最初
    // const appString = ReactSSR.renderToString(serverEntry)
    // res.send(template.replace('<!-- <app></app> -->', appString))
    serverRender(serverEntry, template, req, res).catch(next)// next 扔出来的错误怎么处理呢,看下面app.use
  })
} else {
  // 开发环境下我们需要单独处理因为开发环境并没有，index.html，server-entry.js这些文件
  const devStatic = require('./utils/dev-static')
  devStatic(app)
}
// express 有一个机制定义一个error处理的中间件
// 虽然req, res, next这三个参数用不到，但是在读取的时候需要根据参数长度去判断这是不是个handle error
app.use(function (error, req, res, next) {
  console.log(error)
  res.status(500).send(error)
})
app.listen(3001, () => {
  console.log('开启服务3001成功')
})
