// 把所有的发向cnode的接口都在这里代理出去
const axios = require('axios')
const baseUrl = 'https://cnodejs.org/api/v1'
const queryString = require('query-string')
module.exports = function (req, res, next) {
  const path = req.path // 接口地址
  console.log('aaaaaa')
  console.log(path)
  const user = req.session.user || {}// 用户是否登录
  console.log(user)
  const needAccessToken = req.query.needAccessToken // 需不需要needAccessToken
  if (needAccessToken && !user.accessToken) {
    // 告诉客户端
    res.status(401).send({
      success: false,
      msg: 'need login'
    })
  }
  // 不能直接把query传过去，因为query有我们自己家的一些属性needAccessToken
  const query = Object.assign({}, req.query, {
    accesstoken: (needAccessToken && req.method === 'GET') ? user.accessToken : ''
  })// 如果我们get请求需要accesstoken怎门办
  if (query.needAccessToken) delete query.needAccessToken
  console.log(`${baseUrl}${path}----`)
  console.log(user.accessToken)
  axios(`${baseUrl}${path}`, {
    method: req.method, // 客户端发送过来的请求方式
    params: query, // get地址栏格式
    // 用queryString.stringify之前 {'A':'xxxx'}
    // 用queryString.stringify只有 A=xxxx,这跟我们使用formData格式传输表单请求是一样的
    data: queryString.stringify(Object.assign({}, req.body, {
      accesstoken: (needAccessToken && req.method === 'POST') ? user.accessToken : ''
    })), // 我们需要加上AccessToken,即使不需要我们加上也没有关系
    // cnode api 有个问题再用axios发送的时候他的ContentType是application json的，
    // cnode api 有一些是可以接受application json，有一些则只能用formData传输，为了防止出现一些错误我们全部设为formdata方式
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
      // 在配置这个之后我们的data里边是不能直接写一个对象的，不然他会给我们解析成json字符串，和/x-www-form-urlencoded这种数据格式是不对应的
    }
  }).then(resp => {
    console.log('prox 成功')
    if (resp.status === 200) {
      res.send(resp.data)
    } else {
      res.status(resp.status).send(resp.data)
    }
  }).catch(err => {
    console.log('prox 失败')
    if (err.response) {
      res.status(500).send(err.response.data)
    } else {
      res.status(500).send({
        success: false,
        msg: '未知错误'
      })
    }
  })
}
