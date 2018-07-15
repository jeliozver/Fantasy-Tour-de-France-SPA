import React from 'react';

import '../../resources/style/Footer.css';

const Footer = () => {
  return (
    <footer>
      <span>Fantasy Tour de France Web App</span>
      <a href="https://developer.mozilla.org">
        <i className="fab fa-js" aria-hidden="true"></i>
      </a>
      <a href="https://reactjs.org">
        <i className="fab fa-react" aria-hidden="true"></i>
      </a>
      <a href="https://github.com/jeliozver">
        <i className="fab fa-github" aria-hidden="true"></i>
      </a>
      <span className="right"> &copy; 2018 fantasy tour de france - all rights reserved</span>
    </footer>
  );
};

export default Footer;