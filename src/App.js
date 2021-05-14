import React from 'react'
import './App.css';
import { connect } from 'react-redux'

class App extends React.Component {

  componentDidMount(){
    fetch('http://localhost:3000/api/v1/lists')
    .then(response => response.json())
    .then(data => console.log(data))
  }

  render(){

    return (
      "In React App"
    );
  }
}

export default connect()(App);
