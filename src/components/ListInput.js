import React from 'react'

class ListInput extends React.Component {

// set local state
  state = {
    name: ''
  }

  render() {
    return(
      <div>
        <form>
          <label>List Name:</label>
          <input type='text' placeholder='Enter your book list name' value={this.state.name}/>
        </form>
      </div>
    )
  }
}

export default ListInput
