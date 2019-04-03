import React, { Component } from 'react';
import 'antd/dist/antd.css'
import './App.css';
import store from './store'
import { inputChangeValue ,addList, deleleList} from './store/actions'
// 使用react-redux之后
import {connect} from 'react-redux'
import { stat } from 'fs';
class App extends Component {
  constructor(props){
    super(props);
    this.state = store.getState();
    console.log(this.state);

    // 使用react-redux后
    console.log(this.props.inputValue)
  }

  render() {
    return (
      <div>
      <div> 
        <input 
          value={this.props.inputValue}
          onChange={this.props.handleValueChange}/>
        </div>
      <div><button onClick={this.props.handleClick}>提交</button></div>
      {
        this.props.list.map((item,index)=>{
          return <div key={item} onClick={this.props.delete.bind(this,index)}>{item}</div>
        })
      }
    </div>
    );
  }
}

// export default App;
const mapStateToProps = (state)=>{
  // state就是store里边的数据
  console.log(state)
  return {
    inputValue: state.inputValue,
    list: state.list,
  }
}

// 第二个参数的意思是我们把store的dispatch挂载到props上
// store.dispatch,这里边是可以调用dispatch的，和我们在外边store.dispatch一样
const mapDispatchToProps = (dispatch)=>{
  return {
    handleValueChange(e){
      console.log(e);
      const action = inputChangeValue(e.target.value)
      dispatch(action)
    },
    handleClick(){
      const action = addList()
      dispatch(action)
    },
    delete(index){
      console.log(index);
      const action = deleleList(index)
      dispatch(action)
    }
  }
}
// mapStateToProps的意思是让我的App组件和sotre做连接
// 连接是有一些规则的规则在哪里就在mapStateToProps里边，意思就是把store里边的数据映射到
// 给这个组件，变成组件的props
export default connect(mapStateToProps,mapDispatchToProps)(App);// 让App这个组件和redux做连接
