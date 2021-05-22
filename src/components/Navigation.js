import React from 'react'
import {Link} from 'react-router-dom'
import {Navbar, Nav} from 'react-bootstrap'


const Navigation = (props) => {

  return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">BOOKET LISTS</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/lists">Lists</Nav.Link>
            <Nav.Link href="/lists/new">Create New List</Nav.Link>
         </Nav>
      </Navbar>
  )
}

export default Navigation

//
// <div className='nav'>
// <Link to='/home'>Home</Link>
// <Link to='/lists'>Lists</Link>
// <Link to='/lists/new'>Create a List</Link>
// </div>
