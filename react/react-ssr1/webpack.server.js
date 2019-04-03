const path = require('path');
const nodeExternals = require('webpack-node-externals')

module.export = { 
 // 打包node代码-运行在node
 target: 'node',
 // webpack.4x的要求打包的时候是线上还是开发
 mode: 'development',
 // 入口cl
 entry:'./src/index.js',
 // 出口
 output:{
   filename:"bundle.js",
   path: path.resolve(__dirname, 'build')
 },
 // 我们要引入node_modules包的时候打包是不需要打的，还需要webpack-node-externals
 // 比如说我们reqire('koa')的时候，koa是在node_modlus里边的使用该配置就不会吧koa打包到文件里边而是保存之前的引用形式
 externals:[nodeExternals()],
 //  打包编译的规则
 module:{
   // 规则
   rules:[
     {
       test: /\.js?$/,
       // bable-loader语法编译器
       loader: 'babel-loader',
       // 配置编译的规则-比如要编译的代码有react代码
       exclude: '/node_modules/',
       options: {
         presets: [
            'react', 
            // ”stage-0"是对ES7一些提案的支持
            'stage-0',
            // 打包的过程当中如何根据环境去做一些适配
            [
              // env 根据浏览器的兼容性不同去转码的-可以根据配置的目标运行环境（environment）自动启用需要的 babel 插件。
              'env',
              {
                targets: {
                  // https://segmentfault.com/p/1210000008466178
                  // 打包变异的过程中回兼容目前所有主流浏览器的最新连个版本
                  browsers: ['last 2 version']
                }
              }
            ]
          ]
        }
     }
   ]
 }
}