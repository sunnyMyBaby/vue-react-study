import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyAPp from './App';
import * as serviceWorker from './serviceWorker';
import store from './store'
// react-redux是连接redux和react的工具,Provide是一个组件
import { Provider } from 'react-redux'
const App =(
  <Provider store={store}>
    <MyAPp />
  </Provider>
);
ReactDOM.render(App, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
