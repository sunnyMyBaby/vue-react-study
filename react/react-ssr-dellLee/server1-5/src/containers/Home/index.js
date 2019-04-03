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

import React, {Component} from 'react'
import Header from '../../components/Header'
import { connect } from 'react-redux'
import { getHomeList } from './store/actions'

class Home extends Component {
  getList() {
    const { list } = this.props;
    return list.map((item)=> <div key={item.id}>{item.title}</div>)
  }
  render (){
    console.log(this.props.list);
    return (
      <div>
      <Header />
      <div>yg react ssr: { this.props.name }</div>
      {
       this.getList() 
      }
      <button onClick={()=>{alert('click')}}>
        click
      </button>
    </div>
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
Home.loadData = (store) => {
  // 这个函数，负责在服务器端渲染之前，把这个路由需要的数据提前获取加载好
  // 扩充store里边的数据
  return store.dispatch(getHomeList())
}
const mapStateToProps = state => ({
  name: state.home.name,
  list: state.home.newsList,
})
const mapDispatchToProps = dispatch => ({
  getHomeList(){
    dispatch(getHomeList())
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(Home)




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