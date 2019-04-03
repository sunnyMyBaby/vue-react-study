import axios from 'axios'
import { CHANGE_LIST } from './constants'

const changeList = (list) =>({
  type: CHANGE_LIST,
  list
})

export const getTranslationList = (server = false)=>{
  // 可以返回一个普通的对象，也可以返回一个一个函数来做一些异步的操作，因为我们用了react-thunk（可在action里做异步操作）
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get('/api/translations.json')
      .then((res)=>{
        console.log('999999999')
        console.log(res.data)
        if (res.data.success) {
          const list = res.data.data
          dispatch(changeList(list))
        } else {
          const list = []
          dispatch(changeList(list))
        }
      })
  }
}