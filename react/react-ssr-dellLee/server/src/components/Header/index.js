
import React, {Fragment, Component} from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { actions } from './store/index'
import styles from './style.css'
import withStyle from '../../WithStyle'
class Header extends Component {
  // componentWillMount(){
  //   // 服务端渲染的时候style是有这些方法的，但是到客户端就没有了
  //   // this.props.staticContext || style._getCss
  //   if(style._getCss){
  //     this.props.staticContext.css.push(style._getCss());
  //     // 这时候在服务端我们就可以接收到这些样式了然后就可以想办法在ssr中把css显示出来看server.js/utils.js cssStr
  //     // 然后再server.js/index.js下，打印出来
  //     console.log(style._getCss())
  //   }
  // }
  render() {
    const { login, handleLogin, handleLoginOut } = this.props;
    console.log(login);
    return (
      <div className={styles.blue}>
        <Link to='/'>首页</Link>
        <br/>
        {
          login ? <Fragment>
            <Link to='/translation'>翻译列表</Link>
            <br/>
            <div onClick={handleLoginOut}>退出</div>
          </Fragment> : <div onClick={handleLogin}>登录</div>
        }
        <br/>
        
      </div>
    )
  }
}
const mapState = (state) => ({
  login: state.header.login
})
const mapDispatch = (dispatch)=>({
  handleLogin() {
    dispatch(actions.login())
  },
  handleLoginOut(){
    dispatch(actions.loginOut())
  }
})
export default connect(mapState, mapDispatch)(withStyle(Header, styles))


// 当我们刷新切换会出现登录和退出状态的切换的bug，这是因为
// 1.刚进入页面，处于非登录装填
// 2.用户点击登录按钮，进行登录
// 浏览器发送请求给nodejs服务器
// 转发给api服务器，进行登录
// api服务器生成cookie
// 浏览器上存在了cookie登录成功
// 当用户重新刷子你页面的时候
// 浏览器请求html（携带了cookie）
// nodejs服务器进行服务器端渲染
// 进行服务器端渲染，首先要去api服务器取数据（没有携带cookie，node服务器在proxy代理转发的时候不携带这个cookie）正是这一步导致了这个bug
// server/index 下promises打印出来有个undefined，这个原因导致了，因为正常来说每次请求都是一个promise但是有一个undefined，根源在这里
// 为啥有这个undefined呢，loadData的问题
// loadData需要返回一个promise才行，这只是解决了一部分
// 在发送请求的时候我们要把cookie带上（剑requeset里的header
// const store = getStore(req);