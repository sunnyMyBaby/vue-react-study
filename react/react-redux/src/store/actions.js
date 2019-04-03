
import {INPUT_CHANGE, ADD_CHANGE, DELETE_LIST} from './actionType'
export const inputChangeValue = (data)=>({
  type: INPUT_CHANGE,
  value: data
})
export const addList = ()=>({
  type: ADD_CHANGE,
})
export const deleleList = (index)=>({
  type: DELETE_LIST,
  index: index
})