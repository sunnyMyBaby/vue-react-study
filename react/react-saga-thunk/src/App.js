import React, { Component } from 'react';
import 'antd/dist/antd.css'
import {getInitListSaga,getInputChangeInput,getAddItemAction, getDeletetemAction,getTodoList} from './store/actionsCreator'
import './App.css';
import store from './store'
import TodoListUI from './TodoListUI'
class App extends Component {
  constructor(props){
    super(props);
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this)
    this.hendleStoreChange = this.hendleStoreChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleItemDelete = this.handleItemDelete.bind(this);
    // 订阅store,如果用了react-redux后就可以不用订阅了
    store.subscribe(this.hendleStoreChange);
  }

  render() {
    return (
      <TodoListUI 
        inputValue= {this.state.inputValue}
        list={this.state.list}
        handleInputChange={this.handleInputChange}
        handleBtnClick={this.handleBtnClick}
        handleItemDelete={this.handleItemDelete}
      />
    );
  }
  componentDidMount() {
    // 我们把异步请求放在这里去做其实没有问题的，但是呢如果逻辑复杂的话
    // 我们可以移除到其他的地方去做，进行统一的管理（redux-thunk）一个redux的中间件
    // 可以放到action里边去做
    // axios.get('http://localhost:3003/list').then((res)=>{
    //   const action = initListAction(res.data);
    //   store.dispatch(action)
    // })
    const action = getTodoList();
    // 如果没有redux-thunk到这一步就会报错了
    // action其实是一个函数，在这里我们调用store.dispatch(action);的时候
    // action函数就会执行，然后在里边实际上dispatch的也是一个对象
    // 如果action是对象就是传给store=>reducer,如果是对象就会执行这个对象，在里边dispatch
    store.dispatch(action);

    // saga方式
    setTimeout(()=>{
      const actionSaga = getInitListSaga();
      store.dispatch(actionSaga);
    }, 2000);
  }
  handleInputChange(e){
    const action = getInputChangeInput(e.target.value)
    store.dispatch(action);
  }
  hendleStoreChange(){
    // input输入值之后需要重新设置State，否则state的inputValue变了，但是页面不会变
    this.setState(store.getState());
  }
  handleBtnClick(){
    const action = getAddItemAction()
    store.dispatch(action);
  }
  handleItemDelete(index){
    const action = getDeletetemAction(index)
    store.dispatch(action)
  }
}

export default App;
