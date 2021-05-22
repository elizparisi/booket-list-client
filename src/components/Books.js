import React from 'react'
import {connect} from 'react-redux'
import {deleteBook} from '../actions/deleteBook'
import {Button, Card, Container, Row, Col} from 'react-bootstrap'

const Books = (props) => {

  const handleDelete = (book) => {
    props.deleteBook(book.id, book.list_id)
  }

  return (
    <div>
      {props.books && props.books.map(book =>
        <Container>
          <Row>
          <Col md={4}>
        <Card key={book.id} className='mb-3' style={{ width: '18rem' }}>
        <Card.Img src={book.image_url} height='250' width='200'/>
        <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Card.Text>{book.author} {book.read} {book.rating}
        </Card.Text>
        <Button variant='primary' onClick={() => handleDelete(book)}>Delete</Button>
        </Card.Body>
        </Card>
        </Col>
        </Row>
        </Container>

      )}
    </div>
  )
}

export default connect(null, {deleteBook})(Books)
