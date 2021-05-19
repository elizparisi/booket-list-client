import React from 'react'

const Books = (props) => {

  return (
    <div>
      {props.books && props.books.map(book =>
        <li key={book.id}><img src={book.image_url} height='250' width='200'/> <br/> {book.title} {book.author} {book.read} {book.rating} <button>Delete</button></li>
      )}
    </div>
  )
}

export default Books
