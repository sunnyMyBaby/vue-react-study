import styled from 'styled-components'
import logoPic from '../../static/logo.png'
export const HeaderWrapper  = styled.header`
  z-index: 1000;
  positon: relative;
  height: 58px;
  border-bottom: 1px solid #f0f0f0;
`
// export const Logo  = styled.a.attrs({
//   // 跳转，同时也可以在 <Logo />添加
//   // href: '/'
// })`
//   display:block;
//   position:absolute;
//   top:0;
//   left:0;
//   width:100px;
//   height: 58px;
//   background: url(${logoPic});
//   background-size: contain;
// `
export const Logo  = styled.div`
  display:block;
  position:absolute;
  top:0;
  left:0;
  width:100px;
  height: 58px;
  background: url(${logoPic});
  background-size: contain;
`
export const Nav = styled.div`
  width:960px;
  height:100%;
  padding-right: 70px;
  margin:0 auto;
  box-sizing: border-box;
`
export const NavItem =  styled.div`
  line-height: 58px;
  padding: 0px 15px;
  font-size: 17px;
  color: #333;
  &.left{
    float:left;
  }
  &.right{
    float:right;
    color: #999
  }
  &.active{
    color: #ea6f5a;
  }
`
export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  margin-top: 9px;
  padding: 0 20px;
  box-sizing: border-box;
  width: 160px;
  height: 38px;
  border: none;
  outline: none;
  border-radius: 19px;
  background: #eee;
  font-size: 14px;
  margi-left: 20px;
  &::placeholder {
    color: #999;
  }
  &.focused{
    width: 240px;
  }
`
export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`
export const Button = styled.div`
  float: right;
  margin-top: 9px;
  margin-right: 20px;
  padding: 0 20px;
  line-height: 38px;
  border-radius: 19px;
  border: 1px solid #ec6149;
  &.reg{
    color:#ec6149;
  }
  &.writting{
    color:#fff;
    background:#ec6149
  }
`
export const SearchWrapper = styled.div`
 position: relative;
 float: left;
 .slide-enter {
   width: 160px;
   transition: all .2s ease-out;
  }
 .slide-enter-active {
    width: 240px;
  }
  .slide-exit {
    transition: all .2s ease-out;
  }
  .slide-exit-active{
    width: 160px;
  }
 .search-iconfont {
   position: absolute;
   right: 5px;
   bottom: 5px;
   width: 30px;
   height: 30px;
   line-height: 30px;
   border-radius: 15px;
   text-align: center;
   &.focused{
    color: #fff;
    background: #777;
  }
 }
`
export const SearchInfo = styled.div`
  position: absolute;
  left: 0;
  toop: 56px;
  width: 240px;
  padding: 0 20px;
  box-shadow: 0 0 8px rgba(0,0,0,.2);
  // height: 120px;
  // ovflow-x:hidden;
`
export const SearchInfoTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
`
export const SearchInfoSwitch = styled.span`
  font-size: 13px;
  float: right;
  cursor: pointer;
  .spin{
    display: block;
    float:left;
    font-size: 16px;
    margin-right: 2px;
    transition: all .2s ease-in;
    transform: rotate(180deg);
    transform-origin: center center;
  }
`
export const SearchInfoItem  = styled.a`
  line-height: 20px;
  padding: 0 5px;
  font-size: 12px;
  border: 1px solid #ddd;
  color: #969696;
  bordr-radius: 2px;
  float: left;
  display:block;
  margin-right: 10px;
  margin-bottom: 10px;
`
export const SearchInfoList = styled.div`
  ovflow-x:hidden;
`