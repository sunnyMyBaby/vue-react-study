// 让这一段代码在客户端执行一次，否则我们服务端返回的的是字符串中不能绑定时间等
import React from 'react';
import ReactDOM from 'react-dom'
import Home from '../containers/Home'
ReactDOM.hydrate(<Home/>, document.getElementById('root'))
// Uncaught SyntaxError: Unexpected identifier 然后在执行之后会报这个错误
// 因为浏览器下不支持import这种语法，在浏览器下不能直接被运行
// 如果要让他运行我们需要通过webpack编译然后放到浏览器上
// 所以我们才有了src下的client文件夹,打包编译后放到public文件夹下