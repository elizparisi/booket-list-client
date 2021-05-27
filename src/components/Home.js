import React from 'react'
import Books from '../books.jpg'
import {Jumbotron, Image} from 'react-bootstrap'

const Home = () => {

  return (
    <div className='homepage'>
        <Jumbotron fluid className='jumbotron'>
          <h1>Welcome to Booket Lists</h1>
          <h2>Create your must read lists!</h2>
        </Jumbotron>
    </div>
  )
}

export default Home
