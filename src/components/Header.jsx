import PropTypes from 'prop-types';
import React from 'react';
import './Header.css';

const Header = ({ black }) => (
  <header className={ black ? 'black' : '' }>
    <div className="header--logo">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="NetflixLogo"
      />
    </div>
    <div className="header--userLogo">
      <img
        src="https://i.pinimg.com/564x/b6/77/cd/b677cd1cde292f261166533d6fe75872.jpg"
        alt="User"
      />
    </div>
  </header>
);

Header.propTypes = {
  black: PropTypes.bool.isRequired,
};

export default Header;
