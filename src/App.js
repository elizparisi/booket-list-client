import React from 'react'
import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import { connect } from 'react-redux'
import ListsContainer from './containers/ListsContainer'
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends React.Component {

  componentDidMount(){

  }

  render(){

    return (
      <div className="App">
        <Navbar/>
        <Home/>
        <div>
        <ListsContainer/>
        </div>
        <div>
          <Footer/>
        </div>
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
