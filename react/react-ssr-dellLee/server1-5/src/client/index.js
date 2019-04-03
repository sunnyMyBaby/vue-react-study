console.log('--------');
// 在浏览器洗不支持esModule这种引入方式的，所以直接这么写肯定执行不了我们要把这段代码编译之后才能够运行
import React from 'react';
import ReactDom from 'react-dom';

// 同构的时候路由也要在服务器和客户端各跑一遍
import { BrowserRouter, Route } from 'react-router-dom';
import routes from '../routes';

import { Provider } from 'react-redux'
import {getStore, getClientStore} from '../store'

// 同构
// 在做服务端渲染的时候不能用render，因为这个代码即在服务端渲染了一遍又在客户端渲染了一遍所以我们应该用hydrate
// hydrate这是方法涉及到数据的脱水和注水


// 1. <Provider store={getStore()}>在服务端渲染中客户端我们通过getStore()去获取数据势必会造成服务端获取一次store后客户端又获取了一次，造成数据不同步，第一次加载仍然有白屏的情况
// 所以我们需要在stroe/index.js中扩充一个方法getClientStore()
// 我们在创建客户端store的时候我们需要去使用服务端给我们的store

const store = getClientStore();

const App = ()=>{
  return (
    <Provider store={getClientStore()}>
      <BrowserRouter>
      {/* 只允许有一个组件 */}
      <div>
        {
          routes.map(route => (
            <Route {...route} />
          ))
        }
      </div>
      </BrowserRouter>
    </Provider>
  )
}

ReactDom.hydrate(<App />, document.getElementById('root'))