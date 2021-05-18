import React from 'react'
import {connect} from 'react-redux'

class BookForm extends React.Component {

  // set local state
  state = {
    title: '',
    author: '',
    image_url: '',
    read: false,
    rating: ''
  }

  render() {
    return (
      <div>
        <form>
          <label>Title:</label>
          <input type='text' name='title' value={this.state.title}/>
          <label>Author:</label>
          <input type='text' name='author' value={this.state.author}/>
          <label>Image URL:</label>
          <input type='text' name='image_url' value={this.state.image_url}/>
          <label>Read?:</label>
          <input type='checkbox' name='read' value={this.state.read}/>
          <label>Rating:</label>
          <input type='text' name='rating' value={this.state.rating}/>
        </form>
      </div>
    )
  }
}

export default connect(null, )(BookForm)
