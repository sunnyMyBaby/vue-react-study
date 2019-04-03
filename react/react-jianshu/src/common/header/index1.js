import React from 'react'
import { connect } from  'react-redux'
import {SearchInfoList,SearchInfoItem,SearchInfoSwitch,SearchInfoTitle,SearchInfo, HeaderWrapper, Logo, Nav, NavItem,NavSearch,Addition, Button, SearchWrapper} from './style'
import {CSSTransition} from 'react-transition-group'
import {actionCreator} from '../../store/header';
// 无状态组件
const gitListArea = (show)=>{
  if(show){
    return (
      <SearchInfo>
      <SearchInfoTitle>
        热门搜索
        <SearchInfoSwitch>换一换</SearchInfoSwitch>
      </SearchInfoTitle>
      <SearchInfoList>
        <SearchInfoItem>JAVA</SearchInfoItem>
        <SearchInfoItem>C语言</SearchInfoItem>
        <SearchInfoItem>C++</SearchInfoItem>
        <SearchInfoItem>JS</SearchInfoItem>
        <SearchInfoItem>PHP</SearchInfoItem>
        <SearchInfoItem>GO</SearchInfoItem>
      </SearchInfoList>
    </SearchInfo>
    )
  }
}

const Header = (props)=>{
   return (
    <HeaderWrapper>
        <Logo/>
        <Nav>
          <NavItem className='left active'>首页</NavItem>
          <NavItem className='left'>下载App</NavItem>
          <NavItem className='right'>登录</NavItem>
          <NavItem className='right'>
            <span className="iconfont">&#xe636;</span>
          </NavItem>
          <SearchWrapper>
            <CSSTransition
              in={props.focused}
              timeout={200}
              classNames="slide">
              <NavSearch 
                className={props.focused ? 'focused' : ''}
                onFocus={props.handdleOnFocus}
                onBlur={props.handdleOnBlur}>
              </NavSearch>
            </CSSTransition>
            <span className={props.focused ? 'focused search-iconfont' : 'search-iconfont'}>&#xe631;</span>
            {gitListArea(props.focused)}
          </SearchWrapper>
          <Addition>
            <Button className="writting"> 
              <span className="iconfont">&#xe608;</span>写文章
            </Button>
            <Button className="reg">注册</Button>
          </Addition>
        </Nav>
    </HeaderWrapper>
   )
}
// state映射到props上这时候就可以直接用this.props了
const mapStateToProps = (state)=>{
  return {
    // 未使用immutable之前
    // focused: state.header.focused
    // 使用immutable之后
    // focused: state.get('header').get('focused')
    focused: state.getIn(['header','focused'])
  }
}
// 
const mapDispathToProps = (dispatch)=>{
   return {
    handdleOnFocus(){
      // const action = ({
      //   type: 'search_focus'
      // })
      dispatch(actionCreator.searchFoucs())
    },
    handdleOnBlur(){
      // const action = {
      //   type: 'search_blur'
      // }
      dispatch(actionCreator.searchBlur())
    }
   }
}

// Header 和store建立连接
export default connect(mapStateToProps, mapDispathToProps)(Header)