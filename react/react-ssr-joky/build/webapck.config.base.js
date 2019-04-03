const path = require('path')
module.exports = {
  output: {
    publicPath: '/public/'
  },
  resolve: {
    // 不用写后缀名
    // https://segmentfault.com/a/1190000013176083?utm_source=tag-newest
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        loader: 'eslint-loader',
        enforce: 'pre', // 在执行代码编译之前，先用eslint检测代码
        exclude: [
          path.resolve(__dirname, '../node_modules')
        ]
      },
      {
        // 通过babel-loader编译jsx语法,babel-loader默认支持的es6的语法而不能编译jsx语法，所以需要在babelrc文件里边配置
        test: /.jsx$/,
        loader: 'babel-loader'
      },
      {
        test: /.js$/,
        loader: 'babel-loader',
        exclude: [
          path.join(__dirname, '../node_modules')
        ]
      }
    ]
  }
}
