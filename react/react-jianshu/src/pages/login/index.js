import React, {PureComponent} from 'react'
import { connect } from 'react-redux'
import { LoginWrapper,LoginBox,LoginInput,Submit } from './style'
import {actionCreators} from '../../store/login'
import { Redirect } from 'react-router-dom'
class Login extends PureComponent{
  constructor(props){
    super(props);
    // this.state = {
    //   acount: '',
    //   password: ''
    // }
  }
  render() {
    const {login} = this.props;
    console.log(login);
    if(!login){
      return (
        <LoginWrapper> 
          <LoginBox>
            <LoginInput placeholder="账号" ref={(input)=>{this.acount = input}}></LoginInput>
            <LoginInput placeholder="密码" type="password" ref={(input)=>{this.password = input}}></LoginInput>
            <Submit onClick={()=>this.props.Login(this.acount,this.password)}>登录</Submit>
          </LoginBox>
        </LoginWrapper>
      )
    } else {
      return <Redirect to="/" />
    }

  }
}
const mapState = (state) =>({
  login: state.getIn(['login', 'login'])
})
const mapDispatch = (dispatch) =>({
  Login(acount, password){
    console.log(acount.value);
    console.log(password.value);
    dispatch(actionCreators.Login(acount.value, password.value));
  }
})
export default connect(mapState,mapDispatch)(Login)