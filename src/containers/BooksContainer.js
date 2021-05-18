import React from 'react'
import BookForm from '../components/BookForm'
import Books from '../components/Books'

class BooksContainer extends React.Component {

  render() {
    return (
      <div>
        <BookForm/>
        <Books books={this.props.list && this.props.list.books}/>
      </div>
    )
  }
}

export default BooksContainer
