import axios from 'axios'
import {constants} from './index'

export const Logout = ()=>({
  type: constants.LOGOUT,
  value: false
})

export const Login = (accout, password)=>{
  return (dispatch)=>{
    axios.get('/api/login.json?account='+accout+"&password="+password).then((res)=>{
      console.log(res.data.data);
      const result = res.data.data;
      if(result){
        const action = {
          type: constants.LOGIN,
          value: true
        }
        dispatch(action);
      } else {
        const action = {

        }
        dispatch(action);
      }
    })
  }
}
