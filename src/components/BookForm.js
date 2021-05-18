import React from 'react'
import {connect} from 'react-redux'

class BookForm extends React.Component {

  render() {
    return (
      <div>
        <form>
          <label>Book Title:</label>
          <input type='text' />
          <label>Author:</label>
          <input type='text' />
          <label>Image URL:</label>
          <input type='text' />
          <label>Read?:</label>
          <input type='checkbox' />
          <label>Rating:</label>
          <input type='text' />
        </form>
      </div>
    )
  }
}

export default connect(null, )(BookForm)
