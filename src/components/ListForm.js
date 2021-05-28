import React from 'react'
import {connect} from 'react-redux'
import {addList} from '../actions/addList'
import {Container, Form, Button} from 'react-bootstrap'

class ListForm extends React.Component {

// set local state
  state = {
    name: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addList(this.state)
    // reset state to clear out form data
    this.setState({
      name: ''
    })
  }

  render() {
    return(
      <div>
        <Container>
          <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="listName">
            <Form.Label>List Name:</Form.Label>
            <Form.Control type='text' placeholder='Enter your book list name' value={this.state.name} name='name' onChange={this.handleChange} />
          </Form.Group>
          <Button variant='primary' input type='submit'>Submit</Button>
          </Form>
        </Container>
      </div>
    )
  }
}

export default connect(null, {addList})(ListForm)
