// react-router 是集合RN，和web的router一起的，我们做的是web，所以最好用react-ruter-dom
import React from 'react'

import {
  Route,
  Redirect,
} from 'react-router-dom'
// import top from '../views/top/index'
import details from '../views/details/index'
import list from '../views/list/index'
import apiTest from '../views/test/api-test'

export default () => [
  // 这样写在匹配/ 的时候同样也会匹配/details,为了不让他匹配后面的我们可以添加
  <Route path="/" render={() => <Redirect to="/list" />} key="top" exact />,
  <Route path="/list" component={list} key="list" />,
  <Route path="/details" component={details} key="details" />,
  <Route path="/test" component={apiTest} key="apiTest" />,
  // <Redirect from="/" to="/list" />, // 不推荐使用，在使用switch（解决路由重复匹配的问题，）标签时才推荐使用
]
