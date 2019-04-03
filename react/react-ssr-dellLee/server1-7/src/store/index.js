// store,这个store同样也要在客户端服务端个执行一次
// redux 提供的使用中间件的方式applyMiddleware

// combineReducers 辅助函数的作用是，把一个由多个不同 reducer 函数作为 value 的 object，合并成一个最终的 reducer 函数，然后就可以对这个 reducer 调用 createStore。
import { createStore, applyMiddleware, combineReducers } from 'redux';
// 在使用redux的时候使用一些中间件
// 他允许你的action可以返回函数, 带有dispatch和getState两个参数, 在这个action函数里, 异步的dispatch action;
import thunk from 'redux-thunk';

import { reducer as homeReducer } from '../containers/Home/store/index.js';
import { reducer as headerReducer } from '../components/Header/store/index'
import { reducer as TranslationReducer } from '../containers/Translation/store/index'
import { create } from 'domain';
console.log('aaaaaa');
console.log(headerReducer);
import clientRequest from '../client/request'
import serverRequest from '../server/request'

// const reducer = (state = {name: 'yg'}, action) => {
//   return state
// }

const reducer = combineReducers({
  home: homeReducer,
  header: headerReducer,
  translation: TranslationReducer
})
export const getStore = (req)=>{
  // 改变服务器端store的内容，那么就一定要使用serverAxios
  // applyMiddleware，withExtraArgument方法传递的内容在异步的action里边可以通过第三个参数调用
  return createStore(reducer, applyMiddleware(thunk.withExtraArgument(serverRequest(req))));
}
// 我们在创建客户端store的时候我们需要去使用服务端给我们的store，所以需要创建这个方法
export const getClientStore = ()=> {
  // 改变客户端store内容，一定要使用clientAxios
  // 拿到服务器返回给我们的状态，stroe,这时候初始渲染的时候客户端和服务端的store是一模一样的了
  // 这个过程就叫数据的脱水和注水
  const defaultState = window.context.state;
  return createStore(reducer, defaultState, applyMiddleware(thunk.withExtraArgument(clientRequest)));
}


// 这样导出的store是一个单例的store，每个用户在访问页面的时候都会执行render函数
// 但是返回的store永远都是那一个store，也就是所有用户用的是同一个store，同一份数据，显然这是不对的
// export default getStore