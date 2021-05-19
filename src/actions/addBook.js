
export const addBook = (book, listId) => {

  return (dispatch) => {

    fetch(`http://localhost:3000/api/v1/lists/${listId}/books`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(book)
    })
    .then(response => response.json())
    .then(book => dispatch({type: 'ADD_BOOK', payload: book}))
  }
}
