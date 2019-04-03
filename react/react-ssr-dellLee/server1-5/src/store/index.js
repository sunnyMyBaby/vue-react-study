// store,这个store同样也要在客户端服务端个执行一次
// redux 提供的使用中间件的方式applyMiddleware
import { createStore, applyMiddleware, combineReducers } from 'redux';
// 在使用redux的时候使用一些中间件
// 他允许你的action可以返回函数, 带有dispatch和getState两个参数, 在这个action函数里, 异步的dispatch action;
import thunk from 'redux-thunk';

import { reducer as homeReducer } from '../containers/Home/store/index.js';
import { create } from 'domain';

// const reducer = (state = {name: 'yg'}, action) => {
//   return state
// }

const reducer = combineReducers({
  home: homeReducer
})
export const getStore = ()=>{
  return createStore(reducer, applyMiddleware(thunk));
}
// 我们在创建客户端store的时候我们需要去使用服务端给我们的store，所以需要创建这个方法
export const getClientStore = ()=> {
  // 拿到服务器返回给我们的状态，stroe,这时候初始渲染的时候客户端和服务端的store是一模一样的了
  // 这个过程就叫数据的脱水和注水
  const defaultState = window.context.state;
  return createStore(reducer, defaultState, applyMiddleware(thunk));
}


// 这样导出的store是一个单例的store，每个用户在访问页面的时候都会执行render函数
// 但是返回的store永远都是那一个store，也就是所有用户用的是同一个store，同一份数据，显然这是不对的
// export default getStore