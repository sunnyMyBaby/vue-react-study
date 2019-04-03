import React,{Component} from 'react'
import { connect } from  'react-redux'
import { Redirect } from 'react-router-dom'
import {SearchInfoList,SearchInfoItem,SearchInfoSwitch,SearchInfoTitle,SearchInfo, HeaderWrapper, Logo, Nav, NavItem,NavSearch,Addition, Button, SearchWrapper} from './style'
import {CSSTransition} from 'react-transition-group'
import {actionCreator} from '../../store/header';
import {actionCreators as LoginActionCreator} from '../../store/login';
import { Link } from 'react-router-dom'
class Header extends Component{
  gitListArea(){
    const {list,page, focused, mouseIn, totalPage} = this.props;
    // 使用了immutable后返回的list是fromJS对象需要转为普通的对象
    const newList = list.toJS();
    const pageList = [];
    if(newList.length){
      for (let i = (page - 1) * 10; i < page*10; i++) {
        // console.log(newList[i]);第一次的时候是没有的所以打印出10个undifined
        pageList.push(
          <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
        )
      }
    }
    if(focused || mouseIn){
      return (
        <SearchInfo  
          onMouseEnter={this.props.mouseEnter}
          onMouseLeave={this.props.mouseLeave}> 
          <SearchInfoTitle>
            热门搜索
            {/* 注意在react中只有()=>this.props.handleChangePage(page,totalPage)这种写法才能传递参数 */}
            <SearchInfoSwitch onClick={()=>this.props.handleChangePage(page,totalPage,this.spinIcon)}>
             <span ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe65c;</span>
             换一换
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {
             pageList
            }
          </SearchInfoList>
        </SearchInfo>
      )
    }
  }
  render(){
    const {list, handdleOnFocus} = this.props;
    return (
      <HeaderWrapper>
      <Link to='/'><Logo/></Link>
      <Nav>
        <NavItem className='left active'>首页</NavItem>
        <NavItem className='left'>下载App</NavItem>
        { 
          this.props.login ? <NavItem className='right' onClick={this.props.logOut}>退出</NavItem> : 
          <Link to='/login'><NavItem className='right'>登录</NavItem></Link>
        }
        <NavItem className='right'>
          <span className="iconfont">&#xe636;</span>
        </NavItem>
        <SearchWrapper>
          <CSSTransition
            in={this.props.focused}
            timeout={200}
            classNames="slide">
            <NavSearch 
              className={this.props.focused ? 'focused' : ''}
              onFocus={() => handdleOnFocus(list)}
              onBlur={this.props.handdleOnBlur}>
            </NavSearch>
          </CSSTransition>
          <span className={`iconfont ${this.props.focused ? 'focused search-iconfont' : 'search-iconfont'}`}>&#xe631;</span>
          {this.gitListArea()}
        </SearchWrapper>
        <Addition>
          <Link to="/write">
            <Button className="writting"> 
              <span className="iconfont">&#xe608;</span>写文章
            </Button>
          </Link>
          <Button className="reg">注册</Button>
        </Addition>
      </Nav>
    </HeaderWrapper>
    )
  }
}

// state映射到props上这时候就可以直接用this.props了
const mapStateToProps = (state)=>{
  return {
    // 未使用immutable之前
    // focused: state.header.focused
    // 使用immutable之后
    // focused: state.get('header').get('focused')
    focused: state.getIn(['header','focused']),
    list: state.getIn(['header','list']),
    page: state.getIn(['header','page']),
    totalPage: state.getIn(['header','totalPage']),
    mouseIn: state.getIn(['header','mouseIn']),
    login: state.getIn(['login','login'])
  }
}
// 
const mapDispathToProps = (dispatch)=>{
   return {
    handdleOnFocus(list){
      
      // 没数据的是才去请求
      (list.size === 0) && dispatch(actionCreator.getList())
      dispatch(actionCreator.searchFoucs())
      // 使用redux-thunk时就可以把异步请求的数据放在单独的文件里边去进行，而redux-saga只能在action里边进行
      // dispatch(actionCreator.getList());
    },
    handdleOnBlur(){
      // const action = {
      //   type: 'search_blur'
      // }
      dispatch(actionCreator.searchBlur())
    },
    mouseEnter(){
      dispatch(actionCreator.mouseEnter())
    },
    mouseLeave(){
      dispatch(actionCreator.mouseLeave())
    },
    logOut(){
      dispatch(LoginActionCreator.Logout())
    },
    handleChangePage(page,totalPage,spinIcon){
      // 旋转
      let originAngle = spinIcon.style.transform.replace(/[^0-9]/ig,'')
      if(originAngle){
        originAngle = parseInt(originAngle,10);
      } else {
        originAngle = 0;
      }
      spinIcon.style.transform = `rotate(${originAngle + 360}deg)`
      // console.log(page,totalPage,spinIcon);
     if (page < totalPage) {
       const pageNumber = page + 1;
       dispatch(actionCreator.changePage(pageNumber))
     } else {
       dispatch(actionCreator.changePage(1))
     }
    }
   }
}

// Header 和store建立连接
export default connect(mapStateToProps, mapDispathToProps)(Header)