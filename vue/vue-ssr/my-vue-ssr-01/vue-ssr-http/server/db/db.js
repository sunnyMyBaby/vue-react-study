// 我们需要安装apiCloud这个线上数据库的签名
// npm i sha1 -S
const sha1 = require('sha1')
const axios = require('axios')
// 在线上数据要存储数据的时候要有存储空间
// 我们的数据都要存储在这个命名空间下面
// 我们每次请求都要把这个className带上
const className = 'ygVueSSR'

const request = axios.create({
  // 指定请求的基准路径
  baseURL: 'https://d.apicloud.com/mcm/api'
})
const createError = (code, resp) => {
  const err = new Error(resp.message)
  err.code = code
}
const handleRequest = ({ status, data, ...rest }) => {
  if (status === 200) {
    return data
  } else {
    throw createError(status)
  }
}
// 这个db我们是需要初始化的，就是我们在发送请求的时候要拿到我们拍知道appID，key
module.exports = (appId, appKey) => {
  // 请求都需要发送一个签名，有固定的http头的格式
  const getHeaders = () => {
    const now = Date.now()
    return {
      'X-APICloud-AppId': appId,
      'X-APICloud-AppKey': `${sha1(`${appId}UZ${appKey}UZ${now}`)}.${now}`
    }
  }
  return {
    async getAllData () {
      await handleRequest(
        request.get(`/${className}`, {
          header: getHeaders
        })
      )
    },
    async addItem (data) {
      return handleRequest(await request.post(
        `/${className}`,
        data,
        { headers: getHeaders() }
      ))
    }
  }
}
