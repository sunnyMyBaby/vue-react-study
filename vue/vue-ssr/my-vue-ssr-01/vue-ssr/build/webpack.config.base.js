// webpack共同的基础配置
const path = require('path')
const vueLoader = require('./vue-loader.config.js')
const isDev = process.env.NODE_ENV === 'development'
const config = {
  target: 'web', // 项目是跑在浏览器里边的，如果是服务端渲染这里就是node
  // entry: path.join(__dirname, '../client/index.js'),
  entry: path.join(__dirname, '../client/client-entry.js'),
  output: {
    filename: 'bundle.[hash:8].js', // 开发环境不能使用chunk hash，会报错
    path: path.join(__dirname, '../public'),
    // 这个配置很重要，如果只写/public/，那么在client打包之后服务端获取到的js，css文件路径将会是/public/...的，并不能获取到真正的路径，也就不能加载出功能，和样式
    publicPath: 'http://0.0.0.0:8000/public/'
    // publicPath: '/public/'
  },
  module: {
    rules: [
      {
        test: /\.(vue|js|jsx)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
        enforce: 'pre'
        // 因为在处理.vue文件之前需要vue-loader去处理的，所以这个配置就是在预编译之前使用eslint检测
      },
      {
        test: /.vue$/,
        loader: 'vue-loader',
        options: vueLoader(isDev)
      },
      {
        // 解析jsx语法
        test: /\.jsx$/,
        loader: 'babel-loader'
      },
      {
        // 解析jsx语法
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        // 处理图片
        test: /\.(gif|jpg|jpeg|png|svg)$/,
        use: [
          {
            // url-loader封装了file-loader添加了limit等功能
            loader: 'url-loader',
            options: {
              limit: 1024,
              // 把图片打包到单独文件夹需要把路径写完整resources/，[path]路径变量
              name: 'resources/[path][name].[hash:8].[ext]'
            }
          }
        ]
      }
    ]
  }
}
module.exports = config
