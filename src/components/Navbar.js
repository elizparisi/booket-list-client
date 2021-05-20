import React from 'react'
import {Link} from 'react-router-dom'

// const link = {
//     width: '100px',
//     padding: '12px',
//     margin: '0 6px 6px',
//     background: 'pink',
//     textDecoration: "none",
//     color: 'white'
// }

const Navbar = (props) => {

  return (
    <div>
    <Link to='/home'>Home</Link>
    <Link to='/lists'>Lists</Link>
    <Link to='/lists/new'>Create a List</Link>
    </div>
  )
}

export default Navbar
