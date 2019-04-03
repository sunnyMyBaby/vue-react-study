import React,{Component} from 'react'

// 这个函数式生成高阶组件的函数
export default (DocoratedComponent, style)=>{
  // 返回的组件叫做高阶组件
  // 他只做一件事，即将被渲染之前他会到自己的Context里边去往他的css属性里边push一个style内容
  return class NewComponent extends Component {
    componentWillMount(){
      if(style._getCss){
        this.props.staticContext.css.push(style._getCss());
        console.log(style._getCss())
      }
    }
    // 渲染什么也不知道，要从外部传递进来
    // 返回一个全新的组件，这个全新的组件会在渲染旧的组件之前会在staticContext一些东西然后再去渲染旧的那个组件
    // 其实就是为了不用再每个组件下去写componentWillMount周期然后push样式
    // 其实我更喜欢在组件里边写的安歇代码
    render() {
      return <DocoratedComponent {...this.props}/>
    }
  }
}