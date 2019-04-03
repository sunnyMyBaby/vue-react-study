import {CHANGE_LOGIN} from './constants'

const defaultState = {
  login: true
}
export default (state = defaultState, action) =>{
  switch(action.type){
    // 接收action
    case CHANGE_LOGIN:
      return {
        ...state,
        login: action.value
      }
    break;
    default:
    return state
  }
}