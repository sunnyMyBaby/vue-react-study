// 编译打包客户端文件
// 服务端webpack配置
const path = require('path')
module.exports = {
  // 服务器端在打包的时候和客户端是有区别的，比如require('path'),打包的过程中是不需要把path包里的所有内容打包到生成文件里的
  // 而在客户端是需要把path所有的内容打包到文件里的
  // target: 'node',
  mode:'development',
  entry: './src/client/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'public'),// __dirname服务器端代码的根路径
  },
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