import React from 'react';
import { Link } from 'react-router-dom';
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
        <div className="resources-header d-flex justify-content-between">
          <div>
            <img className="profile-img" src={user.photoProfile} alt="" />
            <span className="user-name"> {user.name} </span>
          </div>
          <Link to="/" className="link-logout"> Cerrar sesión </Link>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = propTypes;
export default Header;
