import React, {PureComponent} from 'react'
import { connect } from 'react-redux'
import { Submit } from './style'
import { Redirect } from 'react-router-dom'
class Write extends PureComponent{
  render() {
    const {loginStatus} = this.props;
    if(!loginStatus){
      return (
        <Submit>Write,这个需要权限才能登录</Submit>
      )
    } else {
      return <Redirect to="/login" />
    }

  }
}
const mapState = (state) =>({
  login: state.getIn(['login', 'login'])
})

export default connect(mapState,null)(Write)