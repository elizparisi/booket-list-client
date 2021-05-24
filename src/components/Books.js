import React from 'react'
import {connect} from 'react-redux'
import {deleteBook} from '../actions/deleteBook'
import {Button, Card, Container, Row, Col} from 'react-bootstrap'

const Books = (props) => {

  const handleDelete = (book) => {
    props.deleteBook(book.id, book.list_id)
  }

  return (
    <Container>
      <Row>
      {props.books && props.books.map(book =>
        <Col xs={6} md={4}>
          <Card key={book.id} className='book-card' style={{ width: '18rem' }}>
          <Card.Img src={book.image_url} />
          <Card.Body>
            <Card.Title>{book.title}</Card.Title>
            <Card.Text>By: {book.author} <br/>
            Read: {book.read} <br/>
            Rating: {book.rating}
            </Card.Text>
            <Button variant='primary' onClick={() => handleDelete(book)}>Delete</Button>
          </Card.Body>
          </Card>
        </Col>
      )}
      </Row>
    </Container>
  )
}

export default connect(null, {deleteBook})(Books)
