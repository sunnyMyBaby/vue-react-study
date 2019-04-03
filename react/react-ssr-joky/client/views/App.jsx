import React from 'react'
import { Link } from 'react-router-dom'
import Routes from '../config/router'

export default class App extends React.Component {
  componentDidMount() {

  }

  render() {
    return (
      [
        <div key="1">react-ssr-yg</div>,
        <Link to="/" key="top"> 首页 </Link>,
        <Link to="details" key="details"> 详情</Link>,
        <Routes key="2" />,
      ]
    )
  }
}
