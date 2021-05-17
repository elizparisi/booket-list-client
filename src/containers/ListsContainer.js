import React from 'react'
import {connect} from 'react-redux'
import {Route} from 'react-router-dom'
import {fetchLists} from '../actions/fetchLists'
import Lists from '../components/Lists'
import List from '../components/List'
import ListInput from '../components/ListInput'

class ListsContainer extends React.Component {

  componentDidMount() {
    this.props.fetchLists()
  }

  render() {
    return(
      <div>
        <Route path='/lists/new' component={ListInput}/>
        <Route path='/lists/:id' render={(routerProps) => <List {...routerProps} lists={this.props.lists}/>}/>
        <Route exact path='/lists' render={(routerProps) => <Lists {...routerProps} lists={this.props.lists}/>}/>
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
