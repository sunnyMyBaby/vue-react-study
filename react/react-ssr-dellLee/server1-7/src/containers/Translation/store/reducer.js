// import {} from './constants'
import { CHANGE_LIST } from './constants'

const defaultState = {
  translationList: []
}
export default (state = defaultState, action) => {
  switch(action.type){
     case CHANGE_LIST:
        console.log('=====')
        console.log(action.list);
        return {
          ...state,
          translationList: action.list
        }
       break;
     default:
       return state;
  }
}