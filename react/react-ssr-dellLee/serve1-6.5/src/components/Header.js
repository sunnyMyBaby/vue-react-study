
import React from 'react'
import { Link } from 'react-router-dom'
const Header = ()=>{
  return (
    <div>
      <div>Header</div>
      <Link to='/'>Home</Link>
      <Link to='/login'>Login</Link>
    </div>
  )
}

export default Header