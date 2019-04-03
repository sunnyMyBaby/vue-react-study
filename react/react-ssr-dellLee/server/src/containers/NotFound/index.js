import React, {Component} from 'react'
class NotFound extends Component{
  
  componentWillMount(){
    // componentDidMount 只会在客户端渲染执行
    // 这个方法客户端服务端渲染都会执行
    // 只有服务端渲染才用，因为客户端压根没有传不过来
    // if(this.props.staticContext){
    //   this.props.staticContext.NotFound = true;
    // }
    const { staticContext } = this.props;
    staticContext && (staticContext.staticContext = true );
  }
  render(){
    return <div>404,sorry,page,nodt found</div>
  }
}
export default NotFound