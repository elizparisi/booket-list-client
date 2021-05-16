
export const addList = (formData) => {

  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/lists', {
      header: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(formData)
    })

  }
}
