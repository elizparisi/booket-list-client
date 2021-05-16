
export const addList = (formData) => {

  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/lists', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(list => dispatch({type: 'ADD_LIST', payload: list}))
  }
}
