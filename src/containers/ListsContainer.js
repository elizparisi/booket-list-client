import React from 'react'
import {connect} from 'react-redux'
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

// to see our data
const mapStateToProps = state => {
  return {
    lists: state.lists
  }
}

export default connect(mapStateToProps)(ListsContainer)
