import axios from 'axios'
import { CHANGE_LIST } from './constants'
import clientRequest from '../../../client/request'
import serverRequest from '../../../server/request'

const changeList = (list) =>({
  type: CHANGE_LIST,
  list
})

export const getHomeList = (server = false)=>{
  // 可以返回一个普通的对象，也可以返回一个一个函数来做一些异步的操作，因为我们用了react-thunk（可在action里做异步操作）
  return (dispatch, getState, axiosInstance) => {
    // react-thunk我们用它做异步请求的时候，返回的这个函数可以接收到dispatch这个方法，然后呢可以再调用dispatch在派发一个dispatch
    // 因为这里是异步的，会返回一个promise所以这里我们需要把这个promise返回，方便服务端执行loaData的时候获取数据
    // 使用httpProxy做代理之后
    // return axios.get('http://47.95.113.63/ssr/api/news.json?secret=PP87ANTIPIRATE')
    // 下面写法太low，所以我们需要用到axios的instance(同意前缀)概念，看requeset.js
    // let url = ''
    // if(server){
    //   url = 'http://47.95.113.63/ssr/api/news.json?secret=PP87ANTIPIRATE'
    // } else {
    //   url = '/api/news.json?secret=PP87ANTIPIRATE';
    // }

    // 新写法
    // let request = null;
    // 当然了我们要是使用了redux-thunk，方法就可以不用再使用了
    // const request = server ? serverRequest : clientRequest;
    // return request.get('/api/news.json?secret=PP87ANTIPIRATE')
    return axiosInstance.get('/api/news.json')
      .then((res)=>{
        // console.log(res);
        dispatch(changeList(res.data.data))
      })
  }
}