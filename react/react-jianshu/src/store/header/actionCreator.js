import {SEARCH_FOCUS,SEARCH_BLUR,CHANGE_LIST,MOUSE_ENTER,MOUSE_LEAVE,CHANGE_PAGE} from './constants'
import axios from 'axios'
import {fromJS} from 'immutable'

export const searchFoucs = ()=>({
  type: SEARCH_FOCUS
})

export const searchBlur = ()=>({
  type: SEARCH_BLUR
})

export const mouseEnter = ()=>({
  type: MOUSE_ENTER
})


export const mouseLeave = ()=>({
  type: MOUSE_LEAVE
})


export const changePage = (page)=>({
  type: CHANGE_PAGE,
  page
})


export const changeList = (data)=>({
  type: CHANGE_LIST,
  // 因为state的初始值defaultState是一个fromJS对象所以这里穿进去的数据也需要时同一类型否则报错
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10)
})


// 没有使用redux-thunk之前这个方法都会返回一个对象，儿现在可以返回一个方法了
export const getList = ()=>{
  return(dispatch)=>{
    axios.get('http://localhost:3000/api/headerList.js').then((res)=>{
      const action = changeList(res.data.data)
      dispatch(action);
    }).catch((err)=>{
    })
  }
}