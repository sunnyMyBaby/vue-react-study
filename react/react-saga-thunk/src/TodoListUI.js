import React from 'react'
import { Input ,Button, List} from 'antd'

const TodoListUI = (props)=>{
  return (
    <div className="App">
      <Input 
        value={props.inputValue}
        placeholder="xxxx" 
        style={{width: '300px'}}
        onChange={props.handleInputChange}/>
      <Button type="primary" onClick={props.handleBtnClick}>提交</Button>
      <List 
        style={{width: '300px'}}
        bordered 
        dataSource={props.list}
        renderItem={(item,index)=>(<List.Item onClick={(index)=>{
          props.handleItemDelete(index)
        }}>{item}</List.Item>)}>
      </List>
    </div>
  )
}

export default TodoListUI;