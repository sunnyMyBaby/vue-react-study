// webpack服务端配置
// ver-server-render vue服务端渲染的插件
// 这里边的代码我们不需要关心开发还是生产环境产出的js并不需要压缩等优化只要能在node端跑起来就可以了
const path = require('path')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// vue-server-renderer 这个插件是vue官方推荐我们使用的vue-ssr插件，他帮我们做了很多事情
// 所以vue的服务端渲染比react服务端渲染简单的多
// 有了这个插件以后我们打包之后是不会有js文件输出的，输出的会是一个json文件，输出的这个json文件我们可以通过vue-server-renderer做服务端渲染的事情
const VueServerPlugin = require('vue-server-renderer/server-plugin')
let config
config = merge(baseConfig, {
  // 在webpack4.X里边要设置该配置，否则在dev-ssr中memory-fs读取内存的文件vue-ssr-server-bundle.json时回报找不到该文件
  // The 'mode' option has not been set, webpack will fallback to 'production' for this value. Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
  mode: 'development',
  target: 'node', // 这个配置必须添加因为我们到包好的程序是运行在服务端的-所以要指定打包的目标是在node环境
  entry: path.join(__dirname, '../client/server-entry.js'),
  // devtool 的配置参考https://segmentfault.com/a/1190000008315937
  devtool: 'source-map',
  output: {
    // 指定我们写的代码export出去之后入口是怎么样的
    // 再node我们使用的模块是moudel.export = ... 以及require这种方式
    // commonjs2打包出去之后就是这样的，所以在nodejs里边就可以直接应用打包后的js,
    // 这种方式只能用于服务端不能用于浏览器，因为浏览器是没有moudel模块的内容在里边的，也不支持这种运行方式
    libraryTarget: 'commonjs2',
    // 通过模块去加载的js，没必要使用我嗯浏览器的缓存功能
    filename: 'server-entry.js',
    path: path.join(__dirname, '../server-build')
  },
  // 指定dependencies不能被同时打包，js在打包的是时候会把依赖的所有js文件都打包到同一个文件中去
  // 因为浏览器中我们没有办法通过require这种方法加载一个单独的文件，所以我们在浏览器端要把所有的用到的js打包到一个新的js文件里边去然后一次性加载到浏览器端加载的时候什么都有了
  // 但是在node端我们只需要在导出的这个文件里边require，dependencies里边的东西就可以了
  // 所以我们没有必要不是vue等这些文件都打包到server-entry.js里边去，同样如果不这样会导致我们打包的这个js有单独的js代码和node_modules里边是不同的代码，会导致报错后者浪费内存
  externals: Object.keys(require('../package.json').dependencies),
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../'
            }
          },
          {
            loader: 'css-loader',
            options: {
              minimize: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true // stylus-loader是会生成自己的sourceMap文件的，该配置指定postcss使用前面生成的sourceMap文件
            }
          }
        ]
      },
      {
        test: /\.styl/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../'
            }
          },
          {
            loader: 'css-loader',
            options: {
              minimize: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true // stylus-loader是会生成自己的sourceMap文件的，该配置指定postcss使用前面生成的sourceMap文件
            }
          },
          'stylus-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.[contentHash].css'
      // chunkFilename: "[id].[hash].css", // 服务端同样不需要hash
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      // 这个是vue服务端渲染官方建议添加的属性
      'process.env.VUE_ENV': '"server"'
    }),
    // {filename: ''}可以指定文件名 默认 vue-ssr-server-bundle.json'
    // 有了VueServerRender之后我们打包的文件是不会有js文件输出的只有一个json文件
    // 这个json文件帮我们做了很多服务端渲染的事情
    new VueServerPlugin()
  ]
})
module.exports = config
