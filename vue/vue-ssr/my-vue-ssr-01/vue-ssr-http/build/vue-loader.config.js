// const docLoader = require.resolve('./doc-loader');
// 因为webpack加载loader的方式是通过字符串的方式进行所以需要使用require.resolve
// http://www.ruanyifeng.com/blog/2015/05/require.html
module.exports = (isDev) => {
  return {
    // 去掉html里边的空格
    preserveWhitespace: true,
    // 把template里边的css分离出来打包-vue默认不这样做
    // 开发环境中不需要
    extractCSS: !isDev
    // 注意该配置webpack4.X已经变更了，需要在css-loader里边配置
    // cssModules:{
    //   localIdentName: '[path]-[name]-[hash:base64:5]',// 给css的classname添加hash（根据文件路径，文件名，文件内容的hash）生成，在vue里边写了一个class名字在别的文件不可使用
    //   camelCase: true, // 我们在使用class时会用aaa-bbb形式，但是js中回很难用，这个配置确保我们用-链接的class转为小驼峰
    // }
    // 自定义模块,把docs内容输出到组件的options里边去
    // loaders:{
    //   // 'docs': docLoader
    //   js: 'coffe-loader' // 指定js模版里边我们可以写coffeJs代码
    //   // html,style都可以指定
    // },
    // preLoader:{
    //   js: ''// 先用这里变指定的解析js代码，然后在用babel-loader解析,如使用typeScript
    // },
    // postLoader:{
    //   js:'',// 先用babel解析然后用babel解析
    // }
  }
}
