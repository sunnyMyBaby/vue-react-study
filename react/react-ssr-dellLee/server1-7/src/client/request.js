import axios from "axios";
const instance = axios.create({
  baseURL: '/',
  // 实例共用的参数,这样的话其他地方的secret就不用带了
  params: {
    secret: 'PP87ANTIPIRATE'
  }
})

export default instance;