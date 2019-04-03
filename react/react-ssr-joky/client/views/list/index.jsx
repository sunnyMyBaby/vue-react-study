import React from 'react'
import {
  observer,
  inject,
} from 'mobx-react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import Button from '@material-ui/core/Button';
import { AppState } from '../../store/index'

@inject('appState') @observer
class list extends React.Component {
  constructor() {
    super()

    this.onChangeName = this.onChangeName.bind(this)
  }

  componentDidMount() {

  }

  onChangeName(event) {
    // const { appState }
    this.props.changeName(event.target.value)
    // appState.name = event.target.value 不建议这么做，要加个action，这样mobx可以有每次的修改的记录
  }

  // 这个名字千万不要变
  asyncBootstrap() {
    // 这个方法里可以操作异步的数据，然后在dev-static里边调用这个方法的时候他会执行到组件里边的这个方法，等他执行完成之后才会去做渲染的工作
    return new Promise((resolve) => {
      setTimeout(() => {
        this.props.appState.count = 3
        // 一定要resolve true因为他会根据true判断执行是否成功
        resolve(true)
      }, 2000)
    })
  }

  // Helmet是配置头信息的
  render() {
    const { appState } = this.props
    return (
      <div>
        <Helmet>
          <title> list </title>
          <meta name="description" content="this is list" />
        </Helmet>
        <input type="text" onChange={this.onChangeName} />
        <Button color="primary">aa</Button>
        <span>
          LIST-
          {appState.msg}
        </span>
      </div>
    )
  }
}
list.propTypes = {
  appState: PropTypes.instanceOf(AppState), // eslint-disable-line
}
export default list
