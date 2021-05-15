import React from 'react'

class ListInput extends React.Component {

  render() {
    return(
      <div>
        <form>
          <label>List Name:</label>
          <input type='text' placeholder='Enter your book list name'/>
        </form>
      </div>
    )
  }
}

export default ListInput
