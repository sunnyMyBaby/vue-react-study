// 服务端webpack配置
const path = require('path')
// 虽然有了target: 'node',我们打包核心模块的时候不会把node_modules里边的包打包到我们的文件里
// 但是在我们引入node_modules里边的包的时候光用target: 'node'还不行
const nodeExternals = require('webpack-node-externals')
module.exports = {
  // 服务器端在打包的时候和客户端是有区别的，比如require('path'),打包的过程中是不需要把path包里的所有内容打包到生成文件里的
  // 而在客户端是需要把path所有的内容打包到文件里的
  target: 'node',
  mode:'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),// __dirname服务器端代码的根路径
  },
  externals: [nodeExternals()],
  // 配置规则
  module:{
    rules:[
      {
        test:/\.js?$/, // 检测文件类型
        loader: 'babel-loader', // 需要安装babel-loader 和babele-core（核心库）s
        exclude: '/node_modules/',
        // 额外配置项--配置编译的规则
        options: {
          presets:['react','es2015','stage-0',[
            'env',// 根据环境去配置去做一些适配
            {
              targets:{
                browsers: ['last 2 versions']// 在打包过程中兼容主流浏览器的最后2个版本，当然也可以是多个
              },
            }
          ]]
        }
      }
    ]
  }
}