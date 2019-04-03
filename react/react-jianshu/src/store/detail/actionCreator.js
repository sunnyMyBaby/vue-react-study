import axios from 'axios'
import { CHANGE_DETAIL } from './constants'
export const getDetail = (id)=>{
  return (dispatch) =>{
    axios.get('/api/detail.json?id=' + id).then((res)=>{
      const action = {
        type: CHANGE_DETAIL,
        data: res.data.data
      }
      dispatch(action)
      
    });
  }
}