// nodeJs体系下遵循的是common.js的规范也就是require
// import 和 export default 语法是esModule的语法
// import React from 'react'; 

// const React = require('react')
// const Home = ()=>{
//   return <div>home</div>
// }

// module.exports = {
//   default: Home
// }

// stage-0用了这个规范之后我们就可以在node环境下使用import esModulez这种规范了, 其实编译之后还是require这种语法

import React, {Component, Fragment} from 'react'
import Header from '../../components/Header/'
import { connect } from 'react-redux'
import { getHomeList } from './store/actions'
import style from  './style.css'
import { Helmet } from 'react-helmet'
class Home extends Component {
  componentWillMount(){
    // 服务端渲染的时候style是有这些方法的，但是到客户端就没有了
    // this.props.staticContext || style._getCss
    if(style._getCss){
      // this.props.staticContext.css = style._getCss();
      // 用push是为了防止样式替换后覆盖
      this.props.staticContext.css.push(style._getCss());
      // 这时候在服务端我们就可以接收到这些样式了然后就可以想办法在ssr中把css显示出来看server.js/utils.js cssStr
      // 但是呢到这里在home组件还是不行的，因为this.props.staticContext是undefined
      // 因为在home路径的时候会加载两个组件App，和Home，这时候用this.props.staticContext是可以的，所以我们要向下传递
      // 但是header组件是在app组件的内部不能使用this.props.staticContext，
      // 然后再server.js/index.js下，打印出来
      console.log(style._getCss())
    }
  }
  getList() {
    const { list } = this.props;
    return list.map((item)=> <div key={item.id}>{item.title}</div>)
  }
  render (){
    // console.log(this.props.list);
    // Fragment 一般是用来处理多个元素返回的情况，Fragment本身不转换为任何dom元素，是个空标签，比如
    // <Fragment>
    //   <li>hi</li>
    //   <li>原罪</li>
    // </Fragment>
    return (
      <Fragment>
        <Helmet>
          <title>这是Home页面-yg的ssr项目</title>
          <meta name="description" content="这是一个自己学习研究的react-ssr框架"/>
        </Helmet>
        <div>
          {/* <Header /> */}
          <div class={style.style}>yg react ssr: { this.props.name }</div>
          {
          this.getList() 
          }
          <button onClick={()=>{alert('click')}}>
            click
          </button>
        </div>
      </Fragment>
    )
  }
  componentDidMount() {
    // 这个周期函数只会在客户端渲染的时候执行,服务器端不会执行，所以呢一开始获取到的store数据都是空的
    // 所以接下来我们要解决的是如何让服务器端也能执行从而获取数据，始终服务器端是不会执行componentDidMount的但是可以通过其他方式进行
    // https://reacttraining.com/react-router/web/guides/server-rendering
    // 如果首先进入根目录那么我们会通过服务端获取到数据了，这时候我们就不需要再获取一遍
    // 但是我们又不能去掉，因为如果我们首次进入其他页面再跳转到这个页面那么，我们依然需要借助这里的方法获取数据
    if(!this.props.list.length){
      this.props.getHomeList()
    }
  }
}
// Home.loadData = (store) => {
//   // 这个函数，负责在服务器端渲染之前，把这个路由需要的数据提前获取加载好
//   // 扩充store里边的数据
//   return store.dispatch(getHomeList(true))
// }
const mapStateToProps = state => ({
  name: state.home.name,
  list: state.home.newsList,
})
const mapDispatchToProps = dispatch => ({
  getHomeList(){
    dispatch(getHomeList())
  }
})
const ExportHome = connect(mapStateToProps, mapDispatchToProps)(Home);
// 如果loadData直接挂载到Home下回存在以下潜在的问题因为我们导出的组件是通过connect包装后的组件
ExportHome.loadData = (store) => {
  // 这个函数，负责在服务器端渲染之前，把这个路由需要的数据提前获取加载好
  // 扩充store里边的数据
  return store.dispatch(getHomeList(true))
}
export default ExportHome




// 函数式组件，没有任生命周期
// const Home = (props)=>{
//   return (
//     <div>
//       <Header />
//       <div>yg react ssr: { props.name }</div>
//       <button onClick={()=>{alert('click')}}>
//         click
//       </button>
//     </div>
//   )
// }

// const mapStateToProps = state => ({
//   name: state.home.name
// })

// export default connect(mapStateToProps, null)(Home)