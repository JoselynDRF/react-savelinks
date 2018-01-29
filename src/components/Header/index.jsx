import React from 'react';
import PropTypes from 'prop-types';
import './header.css';

const propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    photoProfile: PropTypes.string,
  }).isRequired,
};

function Header({ user }) {
  return (
    <header className="header-container">
      <div className="container">
        <img className="profile-img" src={user.photoProfile} alt="" />
        <span className="user-name"> {user.name} </span>
      </div>
    </header>
  );
}

Header.propTypes = propTypes;
export default Header;
