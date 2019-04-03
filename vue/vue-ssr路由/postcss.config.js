// 用于给浏览器添加兼容前缀
// postcss会对css进行优化，但是优化并不是他自己完成的，它是通过一系列列的组件完成的比如autoprefixer
const autoprefixer = require('autoprefixer')
module.exports = {
  plugins: [
    autoprefixer()
  ]
}
