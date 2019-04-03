import {createStore, compose,applyMiddleware} from 'redux';
import reducer from './reducer'
// redux-thunk是对dispath的一种升级，在创建store的时候使用
// 使用redux-thunk时就可以把异步请求的数据放在单独的文件里边去进行，而redux-saga只能在action里边进行
import thunk from 'redux-thunk'

// composeEnhancers 安装了deveplTool后浏览器可见的调试
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer,composeEnhancers(
  applyMiddleware(thunk)
))
export default store