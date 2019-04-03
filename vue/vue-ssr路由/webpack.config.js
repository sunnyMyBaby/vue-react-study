const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
// html-webpack-plugin-为外部引入的资源添加hash防止引用缓存的外部文件问题
// 生成创建的html入口文件，可以配置单个也可以配置多个
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 分离打包非js代码
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')
const isDev = process.env.NODE_ENV === 'development'
const config = {
  target: 'web', // 项目是跑在浏览器里边的，如果是服务端渲染这里就是node
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    filename: 'bundle.[hash:8].js', // 开发环境不能使用chunk hash，会报错
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /.vue$/,
        loader: 'vue-loader'
      },
      {
        // 解析jsx语法
        test: /\.jsx$/,
        loader: 'babel-loader'
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
              name: '[name].[ext]'
            }
          }
        ]
      }
    ]
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
    new HtmlWebpackPlugin()
  ]
}
// 判断当前环境是开发环境还是生产环境cross-env 插件设置环境变量
if (isDev) {
  config.module.rules.push(
    {
      // 针对css结尾的文件进行处理
      test: /\.css$/,
      use: [
        {
          loader: 'style-loader',
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
          }
        }
      ]
    },
    {
      test: /\.styl/,
      use: [
        'style-loader',
        'css-loader',
        // 处理stylus文件，处理完之后扔给css-loader处理，再扔给style-loader注入到style标签里
        // stylus-loader这个包是依赖于stylus，用stylus来处理内容
        {
          loader: 'postcss-loader',
          options: {
            sourceMap: true // stylus-loader是会生成自己的sourceMap文件的，该配置指定postcss使用前面生成的sourceMap文件
          }
        },
        'stylus-loader'
      ]
    })
  config.devtool = '#cheap-module-eval-source-map' // 页面调试，我们写代码是ES6代码，浏览器不能直接运行，有可能我们自己也看不懂，所以要进行代码映射
  // webpack2之后添加了webpack-dev-server的配置devServer
  // webpack-dev-server是用于开发环境的
  config.devServer = {
    port: 8000,
    host: '0.0.0.0', // 0.0.0.0内网下可以访问
    overlay: {
      erros: true // 编译过程中有任何错误都会在页面上显示出来
    },
    //  open: true, // 启动的时候打开浏览器
    // 映射地址
    //  historyFallback: {
    //  }
    hot: true // 热更新-会刷新页面
  }
  config.plugins.push(
    new webpack.HotModuleReplacementPlugin(), // 防止热更新时刷新页面
    new webpack.NoEmitOnErrorsPlugin()// 减少一些不需要的信息展示的问题
  )
} else {
  // 配置单独打包的模块如vue，jquery，vuex，vue-router等
  config.entry = {
    app: path.join(__dirname, 'src/index.js'),
    vendor: ['vue']
  }
  // .vue文件里边的css是没有打包到我们配置的这个css文件里边的，这是vue的设定，在vue-loader中根据每个组件的样式只有在组件显示的时候才会把他的样式加载页面上
  config.output.filename = '[name].[chunkhash:8].js'
  config.plugins.push(
    new MiniCssExtractPlugin({
      filename: 'style.[contentHash].css'
      // chunkFilename: "[id].[hash].css"
    })
  )
  // https://blog.csdn.net/github_36487770/article/details/80228147
  config.optimization = {
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
  }
  config.module.rules.push({
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
  })
}
module.exports = config
