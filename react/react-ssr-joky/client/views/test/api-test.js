import React from 'react';
import axios from 'axios'
/* eslint-disable */
export default class apiTest extends React.Component {
  getTopics() {
    axios.get('/api/topics')
      .then((resp) => {
        console.log('topics 成功')
        console.log(resp)
      }).catch((err) => {
        console.log('topics 失败')
        console.log(err)
      })
  }

  login() {
    console.log('----')
    axios.post('/api/user/login', {
      accessToken: '2b6ef6c1-a5c1-4e82-be81-040081a832d7',
    }).then((resp) => {
      console.log('login 成功')
      console.log(resp)
    }).catch((err) => {
      console.log('login 失败')
      console.log(err)
    })
  }

  markAll() {
    axios.post('/api/message/mark_all?needAccessToken=true').then((resp) => {
      console.log('mark_all 成功')
    }).catch((err) => {
      console.log('mark_all 失败')
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.getTopics}>tops</button>
        <button onClick={this.login}>login</button>
        <button onClick={this.markAll}>markAll</button>
      </div>
    )
  }
}
/* eslint-disable */
