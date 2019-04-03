import {INPUT_CHANGE, ADD_CHANGE, DELETE_LIST} from './actionType'
const defaultState = {
  inputValue:'',
  list: ['React','Vue','Angular']
}
export default(state = defaultState ,action) => {
  if(action.type === INPUT_CHANGE){
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }
  if(action.type === ADD_CHANGE) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.push(state.inputValue);
    return newState;
  }
  if(action.type === DELETE_LIST) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(action.index,1);
    return newState;
  }
  return state;
}