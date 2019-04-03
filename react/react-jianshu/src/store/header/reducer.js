import {SEARCH_FOCUS,SEARCH_BLUR,CHANGE_LIST,MOUSE_ENTER,MOUSE_LEAVE,CHANGE_PAGE} from './constants'
// immutable提供了不可在reducer中修改原始的state，但是如果没有immutable
// 依然是可以修改的，使用了immutable就不可修改了
// fromJS把js对象转为immutable对象
import {fromJS} from 'immutable'
const defaultState = fromJS({
  focused: false,
  list: [],
  page: 1,
  totalPage: 1,
  mouseIn: false
})
// 纯函数-不允许修改state，只允许返回一个新的state
// 给固定的输入就有固定的冲突
export default (state = defaultState, action )=>{
  if(action.type===SEARCH_FOCUS){
    // immutable对象会结合之前immutable对象的值
    // 和设置的值，返回一个全新的对象
    return state.set('focused',true)
    // 使用immutable之前
    // return {
    //   focused: true
    // }
  }
  if(action.type===SEARCH_BLUR){
    return state.set('focused',false)
    // return {
    //   focused: false
    // }
  }
  if(action.type===CHANGE_LIST){
    // return state.set('list',action.data).set('totalPage',action.totalPage)
    // 太长的时候也可以这么写
    return state.merge({
      list: action.data,
      totalPage: action.totalPage
    })
  }
  if(action.type === MOUSE_ENTER){
    return state.set('mouseIn',true);
  }
  if(action.type === MOUSE_LEAVE){
    return state.set('mouseIn',false);
  }
  if(action.type === CHANGE_PAGE){
    console.log(action.page);
    console.log(action);
    return state.set('page',action.page);
  }
  return state
}