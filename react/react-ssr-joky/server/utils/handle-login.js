const router = require('express').Router()
const axios = require('axios')

const baseUrl = 'https://cnodejs.org/api/v1'

router.post('/login', function (req, res, next) {
  console.log(req.body.accessToken)
  axios.post(`${baseUrl}/accessToken`, {
    accesstoken: req.body.accessToken
  }).then(resp => {
    console.log('login 请求成功')
    if (resp.status === 200 && resp.data.success) {
      req.session.user = {
        accessToken: req.body.accessToken,
        loginName: resp.data.loginname,
        id: resp.data.id,
        avatarUrl: resp.data.avatar_url
      }
      // 给浏览器端发送数据
      res.json({
        success: true,
        data: resp.data
      })
    }
  }).catch(err => {
    console.log('login 请求失败！')
    // 请求cnode的接口是有返回值得，业务逻辑的错误而不是服务器的错误
    if (err.response) {
      res.json({
        success: false,
        data: err.response.data
      })
    } else {
      // 如果不是交给全面局的处理器去处理
      next()
    }
  })
})
module.exports = router
