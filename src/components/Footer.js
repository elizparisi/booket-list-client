import React from 'react';
import {connect} from 'react-redux';

const heartStyle = {
  color: '#e25555',
};

class Footer extends React.Component {

  render() {
    return (
      <footer className="footer">
        <p>Made with <span style={heartStyle}>&#9829;</span> by Liz</p>
        <p><a href="https://github.com/">Github</a></p>
      </footer>
    )
  }
}

export default connect()(Footer);
