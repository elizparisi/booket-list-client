import React from 'react'
import './App.css';
import { connect } from 'react-redux'
import ListsContainer from './containers/ListsContainer'

class App extends React.Component {

  componentDidMount(){

  }

  render(){

    return (
      <div className="App">
        <ListsContainer/>
      </div>
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
