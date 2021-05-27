import React from 'react';

const heartStyle = {
  color: '#e25555',
};

const Footer = () => {

  return (
    <footer className="footer">
      <p>Made with <span style={heartStyle}>&#9829;</span> by Liz <br></br><a href='https://github.com/elizparisi/booket-list-client'>Github</a></p>
    </footer>
  )
}

export default Footer;
