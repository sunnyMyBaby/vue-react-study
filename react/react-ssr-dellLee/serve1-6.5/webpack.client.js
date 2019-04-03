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
}
module.exports = merge(baseConfig, clientConfig)