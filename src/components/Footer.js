import React from 'react';

const heartStyle = {
  color: '#e25555',
};

const Footer = () => {

  return (
    <footer className="footer">
      <p>Made with <span style={heartStyle}>&#9829;</span> by Liz</p>
      <p><a href="https://github.com/">Github</a></p>
    </footer>
  )
}

export default Footer;
