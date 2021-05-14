import React from 'react'
import Lists from '../components/Lists'
import ListInput from '../components/ListInput'

class ListsContainer extends React.Component {

  render() {
    return(
      <div>
        <ListInput/>
        <Lists/>
      </div>
    )
  }
}

export default ListsContainer
