import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga';
import reducer from './reducer'
//  引入saga之后可以一步请求可以放在单独文件去处理，不必和thunk一样放在actions里边了
import todoSaga from './saga'
// 我们把异步请求放在组件或者componentDidMount里去做其实没有问题的，但是呢如果逻辑复杂的话
// 我们可以移除到其他的地方去做，进行统一的管理（redux-thunk）一个redux的中间件
// 可以放到action里边去做,使用redux-thunk 之后我们可以把异步操作的代码移到action里边

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers =window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const enhancer = composeEnhancers(
  applyMiddleware(thunk,sagaMiddleware),
);
const store =new createStore(
  reducer,
  enhancer
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 不用applyMiddleware的时候
);
sagaMiddleware.run(todoSaga);
export default store;


