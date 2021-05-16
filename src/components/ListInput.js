import React from 'react'
import {connect} from 'react-redux'

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

  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>List Name:</label>
          <input type='text' placeholder='Enter your book list name' value={this.state.name} name='name' onChange={this.handleChange}/>
          <br/>
          <input type='submit'/>
        </form>
      </div>
    )
  }
}

export default connect()(ListInput)
