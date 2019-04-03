import axios from 'axios';

const createInstance = (req)=> axios.create({
  baseURL: 'http://47.95.113.63/ssr',
  // 但是这里没有 req
  // const store = getStore(req);
  headers: {
    cookie: req.get('cookie') || ''
  },
  // 实例共用的参数
  params: {
    secret: 'PP87ANTIPIRATE'
  }
});
export default createInstance;
