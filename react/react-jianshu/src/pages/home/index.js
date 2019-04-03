import React,{PureComponent} from 'react'
import { HomeWrapper,HomeLeft,HomeRight,BackTop} from './style'
import List from './components/List'
import Recommend from './components/Recommend'
import Topic from './components/Topic'
import Writer from './components/Writer'
import {actionCreators} from '../../store/home'
import { connect } from 'react-redux'
// PureComponent 建议使用immutalbe管理数据，否则会有潜在的坑
class Home extends PureComponent{
  constructor(props){
    super(props)
    this.state = {
      scrollTop: 0
    }
  }
  // react-reducx 中我们可以看到在首页的每个组件里边基本上都调用了connect方法和store做了连接
  // 这几导致一个问题只要store发生了改变每个组件都会被渲染
  // 所以我们需要优化shouldCopomentUpdata,但是这个钩子自己得去对比，所以麻烦
  // 所以react提供了一个组件PureComponent
  // PureComponent 在自己的底层实现了一个自己的shouldComponentUpdate
  // shouldComponentUpdate(){

  // }
  toTop(){
    window.scrollTo(0,0)
  }
  render(){
    console.log(this.state)
    return (
      <HomeWrapper>
        <HomeLeft>
          <Topic></Topic>
          <List></List>
        </HomeLeft>
        <HomeRight>
          <Recommend></Recommend>
          <Writer></Writer>
        </HomeRight>
        {
          this.state.scrollTop > 200 ? <BackTop onClick={this.toTop}>TOP</BackTop> : null
        }
      </HomeWrapper>
    )
  }
  componentDidMount(){
    this.props.changeHomeData();
    this.bindEvent();
  }
  componentWillMount(){
    window.removeEventListener('scroll',(scroll)=>{
      this.setState({
        scrollTop: document.documentElement.scrollTop
      })
    })
  }
  bindEvent(){
    window.addEventListener('scroll',(scroll)=>{
      this.setState({
        scrollTop: document.documentElement.scrollTop
      })
    })
  }
}
const mapDispatchToProps = (dispatch) => ({
  changeHomeData(){
    const action = actionCreators.getHomeInfo();
    dispatch(action);
  }
})

export default connect(null,mapDispatchToProps)(Home)