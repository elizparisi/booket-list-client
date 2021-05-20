import React from 'react'
import {connect} from 'react-redux'
import {deleteBook} from '../actions/deleteBook'

const Books = (props) => {

  const handleDelete = (book) => {
    props.deleteBook(book.id, book.list_id)
  }

  return (
    <div>
      {props.books && props.books.map(book =>
        <li key={book.id}><img src={book.image_url} height='250' width='200'/> <br/> {book.title} {book.author} {book.read} {book.rating} <button onClick={() => handleDelete(book)}>Delete</button></li>
      )}
    </div>
  )
}

export default connect(null, {deleteBook})(Books)
