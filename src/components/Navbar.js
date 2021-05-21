import React from 'react'
import {Link} from 'react-router-dom'


const Navbar = (props) => {

  return (
    <div className='nav'>
    <Link to='/home'>Home</Link>
    <Link to='/lists'>Lists</Link>
    <Link to='/lists/new'>Create a List</Link>
    </div>
  )
}

export default Navbar
