import axios from 'axios'
import {constants} from './index'
import { fromJS } from 'immutable'
const changeHomeData = (result)=>({
  type: constants.CHANGE_HOME_DATA,
  topicList: result.topicList,
  articleList: result.articleList,
  recommentList: result.recommentList,
})

export const getHomeInfo = () =>{
  return (dispatch) => {
    axios.get('http://localhost:3000/api/home.json').then((res)=>{
      const result = res.data.data;
      const action = changeHomeData(result);
      dispatch(action);
    })
  }
}

export const getMoreInfo = ()=>{
  return (dispatch)=>{
    axios.get('http://localhost:3000/api/homeList.json').then((res)=>{
      console.log(res.data.data);
      const action = {
        type: constants.CHANGE_HOME_LIST,
        // 因为这时候store里边存储的数据是fromJs格式的数据所以这里也需要转一下
        // List 这个也可以,但是list只是外层转为了immutable，内层并没有，所以会报错
        list: fromJS(res.data.data)
        // list: List(res.data.data)
      }
      dispatch(action);
    })
  }
}