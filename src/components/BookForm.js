import React from 'react'
import {connect} from 'react-redux'
import {addBook} from '../actions/addBook'

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
    addBook(this.state, list)
  }

  render() {
    return (
      <div>
        <form>
          <label>Title:</label>
          <input type='text' name='title' value={this.state.title} onChange={this.handleChange}/>
          <label>Author:</label>
          <input type='text' name='author' value={this.state.author} onChange={this.handleChange}/>
          <label>Image URL:</label>
          <input type='text' name='image_url' value={this.state.image_url} onChange={this.handleChange}/>
          <label>Read?:</label>
          <input type='checkbox' name='read' value={false} onChange={this.handleChange}/>
          <label>Rating:</label>
          <input type='text' name='rating' value={this.state.rating} onChange={this.handleChange}/>
          <input type='submit'/>
        </form>
      </div>
    )
  }
}

export default connect(null, {addBook})(BookForm)
