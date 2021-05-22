import React from 'react'
import {Link} from 'react-router-dom'
import {Container, Navbar, Nav} from 'react-bootstrap'


const Navigation = (props) => {

  return (
    <Container>
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/lists">Lists</Nav.Link>
            <Nav.Link href="/lists/new">Create New List</Nav.Link>
         </Nav>
      </Navbar>
    </Container>
  )
}

export default Navigation

// 
// <div className='nav'>
// <Link to='/home'>Home</Link>
// <Link to='/lists'>Lists</Link>
// <Link to='/lists/new'>Create a List</Link>
// </div>
