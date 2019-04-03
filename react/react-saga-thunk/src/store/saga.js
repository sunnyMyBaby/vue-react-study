// saga要求这个函数必须是Generator函数
import { takeEvery,put } from 'redux-saga/effects'
import {GET_LIST_SAGA} from './actionsType'
import {initListAction} from './actionsCreator'
import axios  from 'axios'
function* getInitList() {
  // Generator函数我们就不要用promise这种方法了
  // console.log('bbb');
  // axios.get('http://localhost:3003/listSaga').then((res)=>{
  //   console.log(res);
  //   const action = initListAction(res.data)
  //   put(action)
  // })

  try {
    const res = yield axios.get('http://localhost:3003/listSaga');
    console.log(res.data);
    const action = initListAction(res.data)
    yield put(action) // yield的意思是等action处理完成之后put
  } catch(e) {
    console.log('请求失败');
  }
}

function* msSaga() {
  // GET_LIST_SAGA捕捉这个action当GET_LIST_SAGA被dispatch后就会执行函数，然后调用fetchUsr方法
  yield takeEvery(GET_LIST_SAGA, getInitList)
}

export default msSaga