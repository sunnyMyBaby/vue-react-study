module.exports = {
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: '/node_modules/',
        options: {
          // npm i babel-preset-react --save , babel-preset-stage-0
          // stage-0 更新的语法，es2015 16 17...
          // env 打包的过程当中如何根据环境进行适配
          // stage-0用了这个规范之后我们就可以在node环境下使用import esModulez这种规范了
          presets: ['react', 'stage-0', ['env', {
            // npm i babel-preset-env --save 在打包过程中babel会去兼容主流浏览器的最后两个版本
            targets: {
              browsers: ['last 2 versions']
            }
          }]]
        }
      }
    ]
  }
}