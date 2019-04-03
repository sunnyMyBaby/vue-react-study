import React from 'react'
// 在获取异步数据的时候react本身是不提供这种功能的所以我们需要通过其他插件搞定react-async-bootstrapper

import {
  observer,
  inject, // 注入摸个Provider提供的东西
} from 'mobx-react';
import PropTypes from 'prop-types'// react中要使用props都需要的插件,不然会报错的
import {AppState} from '../../store/index'
@inject('appState') @observer// 装饰器的写法，appState是在index.js的Provider定义的,@observe是告诉我们这个是reactive值一更新这里的值也会更新
export default class top extends React.Component {
  componentDidMount() {

  }
  render() {
    return (
      <div>
        TOP {this.props.appState.msg}
      </div>
    )
  }
}
top.propTypes = {
  appState:PropTypes.instanceOf(AppState).isRequired,
}