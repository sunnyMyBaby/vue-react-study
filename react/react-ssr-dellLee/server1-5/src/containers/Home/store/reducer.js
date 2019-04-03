// reducer 负责初始化创建一些数据，同时处理当action被接收到之后数据如何被改变的一些逻辑
// reducer必须是一个纯函数
import { CHANGE_LIST } from './constants'
const defaultState = {
  name: 'yg',
  newsList: []
}
export default (state = defaultState, action) => {
  switch(action.type){
    case CHANGE_LIST:
      const newState = {
        ...state,
        newsList: action.list
      }
      return newState
    break;
    default:
      return state
  }
}
