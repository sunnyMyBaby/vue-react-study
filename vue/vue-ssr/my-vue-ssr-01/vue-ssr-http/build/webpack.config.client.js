// 客户端webpac配置
// 这个服务是一个自主的server，我们无法在这里边添加服务端渲染的代码，所以我们需要两个server，一个是node server，服务端的逻辑放里边书写
const path = require('path')
// html-webpack-plugin-为外部引入的资源添加hash防止引用缓存的外部文件问题
// 生成创建的html入口文件，可以配置单个也可以配置多个
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 分离打包非css代码
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const baseConfig = require('./webpack.config.base.js')
const merge = require('webpack-merge')
const webpack = require('webpack')
const isDev = process.env.NODE_ENV === 'development'
const VueLoaderPlugin = require('vue-loader/lib/plugin')
// vue服务端渲染时需要用到的插件
const VueClientPlugin = require('vue-server-renderer/client-plugin')

const devServer = {
  port: 8000,
  host: '0.0.0.0', // 0.0.0.0内网下可以访问
  overlay: {
    erros: true // 编译过程中有任何错误都会在页面上显示出来
  },
  //  open: true, // 启动的时候打开浏览器
  // 映射地址
  // 在使用mode: 'history'模式的路由时会出现刷新路由然后404的情况
  // http://0.0.0.0:8000/app（这个完整的url）到我们服务端之后默认情况下服务端是需要进行匹配的才能进行真正的完成请求操作的
  // 但是这种情况在我们前端做路由的时候做跳转是没有关系的，用户手动刷新浏览器的时候会请求到服务端，服务端如果没有进行什么处理就会容易产生错误
  // 在webpack.devSearver中并没有做路径的映射关系，根本就不认识/login这个路径
  historyApiFallback: {
    // 根目录下的html，实际上就是HtmlWebpackPlugin生成的index.html的位置
    // 这个路径的写法是和output的public有关系的
    index: '/public/index.html'
    // index: '/index.html'
  },
  // 解决热重载不生效问题，因为我们在配置是publick是127.0.0.1访问的但是我们经常用locahost访问
  // 所以就跨域了，因为我们时webpack.dev.server，所以在这里允许跨域是没有问题的，只会在存在于开发环境
  headers: { 'Access-Control-Allow-Origin': '*' },
  hot: true // 热更新-会刷新页面
}
let config
if (isDev) {
  config = merge(baseConfig, {
    devServer,
    devtool: '#cheap-module-eval-source-map', // 页面调试，我们写代码是ES6代码，浏览器不能直接运行，有可能我们自己也看不懂，所以要进行代码映射
    module: {
      rules: [
        {
          // 针对css结尾的文件进行处理
          test: /\.css$/,
          use: [
            {
              loader: 'vue-style-loader',
              options: {
                // 处理为单个style标签
                singleton: true
              }
            },
            {
              loader: 'css-loader',
              options: {
                // 压缩css代码-webpack4.X之后一定要引入css-loader对css文件进行处理，否则会出现错误
                minimize: true
                // 该配置webpack4.X之前需要在vueloader里边配置,同时import的外部css文件也可以使用
                // modules: true,
                // localIdentName: isDev ? '[path]-[name]-[hash:base64:5]':'[hash:base64:5]'
              }
            }
          ]
        },
        {
          test: /\.styl/,
          use: [
            // 3.X版本中貌似style-loader没有css热更新功能所以需要使用vue-style-loader
            // 4.X版本中style-loader有css热更新功能
            'vue-style-loader',
            {
              loader: 'css-loader'
              // options: {
              //   // 压缩css代码-webpack4.X之后一定要引入css-loader对css文件进行处理，否则会出现错误
              //   minimize: true,
              //   // 该配置webpack4.X之前需要在vueloader里边配置,同时import的外部css文件也可以使用
              //   modules: true,
              //   localIdentName: isDev ? '[path]-[name]-[hash:base64:5]':'[hash:base64:5]'
              // }
            },
            // 处理stylus文件，处理完之后扔给css-loader处理，再扔给style-loader注入到style标签里
            // stylus-loader这个包是依赖于stylus，用stylus来处理内容
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true // stylus-loader是会生成自己的sourceMap文件的，该配置指定postcss使用前面生成的sourceMap文件
              }
            },
            {
              loader: 'stylus-loader'
            }
          ]
        }
      ]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(), // 防止热更新时刷新页面
      new webpack.NoEmitOnErrorsPlugin(), // 减少一些不需要的信息展示的问题
      // vue 15.x之后vue-loader需要配合一个webpack的插件才能用
      new VueLoaderPlugin(),
      // 配置全局变量
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: isDev ? '"development"' : '"production"'
        }
      }),
      new HtmlWebpackPlugin({
        // 在插入根目录的html时使用模版
        template: path.join(__dirname, 'template.html')
      }),
      // {
      //   filename: '' 可以指定文件名默认vue-ssr-client-manifest.json
      // }
      new VueClientPlugin()
    ]
  })
} else {
  config = merge(baseConfig, {
    entry: {
      // app: path.join(__dirname, '../client/index.js'),
      app: path.join(__dirname, '../client/client-entry.js'),
      // 配置单独打包的模块如vue，jquery，vuex，vue-router等
      vendor: ['vue']
    },
    output: {
      // .vue文件里边的css是没有打包到我们配置的这个css文件里边的，这是vue的设定，在vue-loader中根据每个组件的样式只有在组件显示的时候才会把他的样式加载页面上
      filename: '[name].[chunkhash:8].js',
      // 生产环境的时候我们打包的时候使用的路径还是base.js里边的http://0.0.0.0:8000/public/，这就导致我们启动
      // npm run start 的时候并没有启动npm run dve:client然后通过http://0.0.0.0:8000/public/是访问不到图片，css，js路径的
      publicPath: '/public/'// 使用绝对路径
    },
    plugins: [
      // vue 15.x之后vue-loader需要配合一个webpack的插件才能用
      new VueLoaderPlugin(),
      // 配置全局变量
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: isDev ? '"development"' : '"production"'
        }
      }),
      new HtmlWebpackPlugin(),
      new MiniCssExtractPlugin({
        filename: 'style.[contentHash].css'
        // chunkFilename: "[id].[hash].css"
      }),
      new VueClientPlugin()
    ],
    optimization: {
      // webpack4之后配置vendor的方式已改变
      // https://blog.csdn.net/github_36487770/article/details/80228147
      splitChunks: {
        cacheGroups: {
          vendor: {
            name: 'vendor',
            chunks: 'initial',
            minChunks: 2
          }
        }
      },
      // 名字没有在entry里定义过的就是打包本文件单独打包webpack文件
      runtimeChunk: {
        name: 'webpack'
      }
    },
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
    }
  })
}
module.exports = config
