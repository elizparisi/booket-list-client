import React from 'react'
import {connect} from 'react-redux'
import {addList} from '../actions/addList'
import {Form, Button} from 'react-bootstrap'
class ListInput extends React.Component {

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
        <form onSubmit={this.handleSubmit}>
          <label>List Name:</label>
          <input type='text' placeholder='Enter your book list name' value={this.state.name} name='name' onChange={this.handleChange}/>
          <br/>
          <Button variant='primary' input type='submit'>Submit</Button>
        </form>
      </div>
    )
  }
}

export default connect(null, {addList})(ListInput)
