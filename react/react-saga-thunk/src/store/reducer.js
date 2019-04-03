import {CHANGE_INPUT_VALUE,ADD_TO_LIST,DELETE_ITEM,INIT_LIST_ACTION} from './actionsType'
const defaultState = {
  inputValue: '123',
  list: [
    '1',
    '2',
    "3"
  ]
}


// reducer 可以接收state，但是绝不能修改state
// reducer 是一个纯函数，给固定的输入就有一个固定的输出，而且不会有副作用（不会对传入的参数做修改）
// 如果里边有个new Date()就不是个纯函数了，因为每次输出都和时间有关系，所以reducer里边不能有异步的操作timeout或者ajax等
export default (state = defaultState,action)=>{
  // action 使用store也就是用户传过来的
  if(action.type === CHANGE_INPUT_VALUE){
    // 深拷贝
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    // return 的东西返回给了store，然后store把新数据替换掉旧数据
    return newState;
  }
  if(action.type === ADD_TO_LIST){
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.unshift(newState.inputValue);
    newState.inputValue = '';
    return newState;
  }
  if(action.type === DELETE_ITEM){
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index, 1);
    return newState;
  }
  if(action.type === INIT_LIST_ACTION){
    const newState = JSON.parse(JSON.stringify(state));
    newState.list = action.data;
    return newState;
  }
  return state
}