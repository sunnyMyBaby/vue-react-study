const Path = require('path')
const merge =  require('webpack-merge')
const baseConfig = require('./webpack.base')

const clientConfig = {
  entry: './src/client/index.js',
  mode: 'development',// webpack4.x的要求
  output: {
    filename: 'index.js',
    path: Path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
      // webpack中loader的处理方式是下到上，右到左
      // style-loader 客户端用可以，但是服务端用就不行了，window对象不存在
      // 我们要使用，isomorphic-style-loader
      // 但是react-ssr中这样加载是有问题的因为禁用js之后就加载不了了
      // 而且还有抖动，因为服务端渲染的时候样式并没有真正的渲染出来
      // 在ssr中使用isomorphic-style-loader的帮我们解析了css，入添加class等
      // style-loader也会干同样的事情，但是相对于isomorphic-style-loader它额外干了一件事情把我们对应的样式放到了head里边才能看到样式
      // 看Home下index，componentWillMount
      {
        test: /\.css?$/,
        use: ['style-loader',{
          loader: 'css-loader',
          options:{
            importLoaders: 1, // 执行loader的数目
            modules: true, // 模块化
            localIdentName: '[name]_[local]_[hash:base64:5]'// css 使用class的名字
          }
        }]
      }
    ]
  }
}
module.exports = merge(baseConfig, clientConfig)