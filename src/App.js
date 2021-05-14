import React from 'react'
import './App.css';

class App extends React.Component {

  componentDidMount(){
    fetch('http://localhost:3000/api/v1/lists/1/books')
    .then(response => response.json())
    .then(data => console.log(data))
  }

  render(){

    return (
      "In React App"
    );
  }
}

export default App;
