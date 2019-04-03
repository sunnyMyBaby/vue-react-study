const path = require('path')
const configBase = require('./webapck.config.base')
const webpackMerge = require('webpack-merge')
module.exports = webpackMerge(configBase, {
  mode: 'production',
  target: 'node',
  entry: {
    app: path.join(__dirname, '../client/server-entry.js')
  },
  // 服务端打包的时候是不应该把vue，mobx这些代码打包进去的,在node环境中我们是不需要把dependencies代码打包进去的因为我们可以直接通过requi这种方式引用
  externals: Object.keys(require('../package.json').dependencies),
  output: {
    // name对应的是entry一项的名字,服务端是不需要浏览器缓存的所以没有hash啥的
    filename: 'server-entry.js',
    path: path.join(__dirname, '../dist'),
    // 静态资源引用时的路径---/public/app.js
    // publicPath: '/public/',
    // publicPath: '',// 要是想在没有搭建服务器的情况下，在打包后直接打开html文件需要把publicPath改为空
    // 此配置的作用是控制 webpack 打包的内容是如何暴露的-https://blog.csdn.net/frank_yll/article/details/78992778
    // 使用这个之后我们可以看到打包之后的文件是module.exports出去的，而app.js是一个自执行的方法
    libraryTarget: 'commonjs2'

  }
  // module: {
  //   rules: [
  //     {
  //       enforce: 'pre', // 在执行代码编译之前，先用eslint检测代码
  //       test: /.(js|jsx)$/,
  //       loader: 'eslint-loader',
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
  // }
})
