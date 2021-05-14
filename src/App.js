import React from 'react'
import './App.css';
import { connect } from 'react-redux'
import {fetchLists} from './actions/fetchLists'

class App extends React.Component {

  componentDidMount(){

  }

  render(){

    return (
      "In React App"
    );
  }
}

// accessing our store values as props
// const mapStateToProps = (state) => {
//   return {
//     lists: state.lists
//   }
// }

export default connect()(App);
