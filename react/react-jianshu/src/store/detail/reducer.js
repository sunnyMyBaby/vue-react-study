import {fromJS } from 'immutable' 
import * as constants from './constants'

const defaultState = fromJS({
  title: '',
  content: ''
})
export default (state = defaultState, action ) =>{
  switch(action.type) {
    case constants.CHANGE_DETAIL:
      console.log(action);
      return state.merge({
        title: action.data.title,
        content: action.data.content,
      })
    default: 
      return state;
  }
}