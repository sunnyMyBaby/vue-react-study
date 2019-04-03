import { fromJS } from 'immutable'
import {constants} from './index'
const defaultState = fromJS({
  topicList:[],
  articleList: [],
  recommentList: [],
  
})
export default (state = defaultState, action) => {
  switch(action.type){
    case constants.CHANGE_HOME_DATA:
        return state.merge({
          topicList: fromJS(action.topicList),
          articleList: fromJS(action.articleList),
          recommentList: fromJS(action.recommentList)
        })
      // state.set('topicList', fromJS(action.topicList));
      // state.set('articleList', fromJS(action.articleList));
      // state.set('recommentList', fromJS(action.recommentList));
      break;
      case constants.CHANGE_HOME_LIST:
        return state.set('articleList',state.get('articleList').concat(action.list));
      break;
      default: 
      return state;
  }
}