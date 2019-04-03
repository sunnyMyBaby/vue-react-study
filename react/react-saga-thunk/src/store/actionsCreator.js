import axios from 'axios'
// import store from './store'

import {GET_LIST_SAGA,CHANGE_INPUT_VALUE,ADD_TO_LIST,DELETE_ITEM,INIT_LIST_ACTION} from './actionsType'

export const getInputChangeInput = (value)=> ({
  type: CHANGE_INPUT_VALUE,
  value
})

export const getAddItemAction = ()=>({
  type: ADD_TO_LIST 
})

export  const getDeletetemAction = (index)=>({
  type:DELETE_ITEM,
  index
})

export const initListAction = (data)=>({
  type: INIT_LIST_ACTION,
  data
})

// 使用redux-thunk之后actionCreator就可以是一个函数了而不是一个对象
// 如果没有使用redux-thunk store.dispatch(action)action必须是一个对象
// 如果我们要做自动化测试测试getTodoList这个方法会比我们放在生命周期里边简单
// redux-thunk 是把异步的操作放在action里边进行
// redux-soga是把异步操作拆分出来放到单独的文件里边维护
export const getTodoList = ()=>{
  return (dispatch) => {
    axios.get('http://localhost:3003/list').then((res)=>{
      console.log('aaaaa');
      const action = initListAction(res.data);
      // 把action传给store
      dispatch(action)
    })
  }
}

export const getInitListSaga = ()=>({
  type: GET_LIST_SAGA,
})