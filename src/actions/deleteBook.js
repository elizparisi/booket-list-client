
export const deleteBook = (bookId, listId) => {

  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/lists/${listId}/books/${bookId}`, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(list => dispatch({type: 'DELETE_BOOK', payload: list}))
  }
}
