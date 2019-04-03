import React, { Component } from 'react'
import { DetailWrapper, Header, Content } from './style'
import { connect } from 'react-redux'
import { actionCreators } from '../../store/detail';

import { withRouter } from 'react-router-dom'
class Detail extends Component {
  render() {
    console.log(this.props);
    return (
      <DetailWrapper>
        <Header>{this.props.title}</Header>
        <Content dangerouslySetInnerHTML={{__html:this.props.content}}>
          {/*
            {this.props.content} 因为内容里边有html标签这么现实会被转义，所以需要现实原始的标签
          */}
        </Content>
      </DetailWrapper>
    )
  }
  componentDidMount(){
    // 如果没有用ract-loadable这个做异步加载这样是能获取到id的
    // 但是呢我们使用了异步加载组价之后再App.js里边的路由组件对应的就是detail组件
    // 但是用了异步加载之后加载的是LoadableComponent这个组件
    // 所以我们需要使用withRouter了意思是让Detail组件有能力获取到组件里边所有参数
    this.props.getDetail(this.props.match.params.id);
  }
}
const mapState = (state)=>({
  title: state.getIn(['detail', 'title']),
  content: state.getIn(['detail', 'content']),
})
const mapDispatch = (dispatch) => ({
  getDetail(id) {
    dispatch(actionCreators.getDetail(id))
  }
})   
export default connect(mapState,mapDispatch)(withRouter(Detail));