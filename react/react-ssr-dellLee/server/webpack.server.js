const Path = require('path')
const nodeExternals = require('webpack-node-externals');
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base')

const serverConfig = {
  target: 'node',// 在我们引入一些node_modules包的时候光是用target是不够的,还需要使用webpack-node-externals
  entry: './src/server/index.js',
  mode: 'development',// webpack4.x的要求
  output: {
    filename: 'bundle.js',
    path: Path.resolve(__dirname, 'build')
  },
  // const express = require('express')这时候引入express的时候express是存在于node_modules里边的，他不会把express打包到文件里边，还是会保存之前require的引用形式
  externals: [nodeExternals()],
  module: {
    rules: [
      // webpack中loader的处理方式是下到上，右到左
      {
        test: /\.css?$/,
        use: ['isomorphic-style-loader',{
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
module.exports = merge(baseConfig, serverConfig)