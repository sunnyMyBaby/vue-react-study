// import {combineReducers} from 'redux'
import headerReducer from './header/reducer'
import homeReducer from './home/reducer'
import detailReducer from './detail/reducer'
import LoginReducer from './login/reducer'
import { combineReducers } from 'redux-immutable';
// 在我们石红过了immutable之后，虽然我们的reducer里边不能直接修改state了
// 但是我们在页面使用的时候回出现state.header.get('focused')这中不统一的写法
// 为了解决这个问题redux-immutable诞生了,我们需要统成为state.get('header').get('focused')
export default combineReducers({
  header: headerReducer,
  home: homeReducer,
  detail: detailReducer,
  login: LoginReducer
})