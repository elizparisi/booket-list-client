import React from 'react'
import {connect} from 'react-redux'
import {addBook} from '../actions/addBook'
import {Container, Form, Button} from 'react-bootstrap'

class BookForm extends React.Component {

  // set local state
  state = {
    title: '',
    author: '',
    image_url: '',
    read: false,
    rating: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addBook(this.state, this.props.list.id)
    this.setState({
      title: '',
      author: '',
      image_url: '',
      read: false,
      rating: ''
    })
  }

  render() {
    return (
      <div>
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="bookTitle">
          <Form.Label>Title:</Form.Label>
          <Form.Control type='text' name='title' value={this.state.title} onChange={this.handleChange}/>
          </Form.Group>

          <Form.Group controlId="bookAuthor">
          <Form.Label>Author:</Form.Label>
          <Form.Control type='text' name='author' value={this.state.author} onChange={this.handleChange}/>
          </Form.Group>

          <Form.Group controlId="bookImage">
          <Form.Label>Image URL:</Form.Label>
          <Form.Control type='text' name='image_url' value={this.state.image_url} onChange={this.handleChange}/>
          </Form.Group>

          <Form.Group controlId="bookRead">
          <Form.Label>Read?:</Form.Label>
          <Form.Control type='checkbox' name='read' value={false} onChange={this.handleChange}/>
          </Form.Group>

          <Button variant='primary' input type='submit'>Submit</Button>
        </Form>
      </Container>
      </div>
    )
  }
}

export default connect(null, {addBook})(BookForm)
