import React from 'react'
import {connect} from 'react-redux'
import {Route} from 'react-router-dom'
import {fetchLists} from '../actions/fetchLists'
import Lists from '../components/Lists'

import ListInput from '../components/ListInput'

class ListsContainer extends React.Component {

  componentDidMount() {
    this.props.fetchLists()
  }

  render() {
    return(
      <div>
        <Route path='/lists/new' component={ListInput}/>
        <Route exact path='/lists' render={() => <Lists lists={this.props.lists}/>}/>
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

export default connect(mapStateToProps, {fetchLists})(ListsContainer)
