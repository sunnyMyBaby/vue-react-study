const path = require('path')
const HTMLPlugin = require('html-webpack-plugin') // 希望在浏览器打开我们的文件需要用到该插件
const webpack = require('webpack')
const isDev = process.env.NODE_ENV === 'development'
const configBase = require('./webapck.config.base')
const webpackMerge = require('webpack-merge')
const config = webpackMerge(configBase, {
  mode: 'development',
  entry: {
    app: path.join(__dirname, '../client/app.js')
  },
  output: {
    // name对应的是entry一项的名字
    filename: '[name].[hash].js',
    path: path.join(__dirname, '../dist')
    // 静态资源引用时的路径---/public/app.js
    // publicPath: 'public'
    // publicPath: '',// 要是想在没有搭建服ß务器的情况下，在打包后直接打开html文件需要把publicPath改为空
  },
  // module: {
  //   rules: [
  //     {
  //       test: /.(js|jsx)$/,
  //       loader: 'eslint-loader',
  //       enforce: 'pre', // 在执行代码编译之前，先用eslint检测代码
  //       exclude: [
  //         path.resolve(__dirname, '../node_modules')
  //       ]
  //     },
  //     {
  //       // 通过babel-loader编译jsx语法,babel-loader默认支持的es6的语法而不能编译jsx语法，所以需要在babelrc文件里边配置
  //       test: /.jsx$/,
  //       loader: 'babel-loader'
  //     },
  //     {
  //       test: /.js$/,
  //       loader: 'babel-loader',
  //       exclude: [
  //         path.join(__dirname, '../node_modules')
  //       ]
  //     }
  //   ]
  // },
  plugins: [
    new HTMLPlugin({
      template: path.join(__dirname, '../client/template.html')
    }), // 生成一个html页面，同时在编译的时候把所有的entry都注入到html里边，而且名字都是更具output拼接而成的
    new HTMLPlugin({
      // <%- appString %> 如果这么写在webpack编译的时候就会把appString当做一个变量放进去了，这种写法我们可以用ejs的loader编译出来时把%去掉-->
      // '!!ejs-compiled-loader'
      template: '!!ejs-compiled-loader!' + path.join(__dirname, '../client/server.template.ejs'),
      filename: 'server.ejs'
    })
  ]
})

if (isDev) {
  // 因为我们用了react-hot-loader/babel所以我们需要做以下配置
  config.entry = {
    app: [
      'react-hot-loader/patch',
      path.join(__dirname, '../client/app.js')
    ]
  }
  // 启动一个webpack.dev.server
  config.devServer = {
    host: '0.0.0.0',
    port: '8000',
    contentBase: path.join(__dirname, '../dist'), // 启动webpack.dev.server就是为了服务于我们编译好的静态文件的所以这个路径和编译的静态文件一致
    hot: true,
    overlay: {
      errors: true // 在编译的过程中如有错误就会在页面上有一层黑色背景
    },
    // http://localhost:8000/server-entry.js
    // 这时候我们npm run dev:client就可以访问到静态的js文件了，但是呢我们还访问不到html，所以我们就需要下面这个配置
    // 当然了下面的配置写好了还是不能访问，因为我们的硬盘上有dist目录，如果有这个目录webpack.dev.server默认是会去检测硬盘上有没有这个目录，如果有直接去访问这个目录下的文件
    // 因为dist目录下没有对应的版本他访问不到，所以404
    // 当然到这里还是会报错Hot Module Replacement is disabled
    // 因为但是我们没有在react里边配置相关的Hot Module Replacement的模块，Hot Module Replacement他会给我们的js注入一部分的代码
    // react-hot-loader/babel
    publicPath: '/public/', // 意思是访问这儿的静态路径都需要通过/public才能访问
    historyApiFallback: {
      // 执行index的路径，也是我们刷新页面会把这个这个地址发给服务器，服务器找不到这个地址就回返回404，它会让所有404的请求都会返回这个页面，所以他很有用
      index: '/public/index.html'
    },
    proxy: {
      // 把/api的请求都代理到http://localhost:3001
      '/api': 'http://localhost:3001'
    }
  }
  config.plugins.push(new webpack.HotModuleReplacementPlugin())
}
module.exports = config
