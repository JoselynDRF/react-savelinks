import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './header.css';

const propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    photoProfile: PropTypes.string,
  }).isRequired,
};

function Header({ data }) {
  return (
    <header className="header-container">
      <div className="container">
        <div className="resources-header d-flex justify-content-between">
          <div>
            <img className="header-img" src={data.photoProfile} alt="" />
            <span className="header-title"> {data.name} </span>
          </div>
          {(data.session) ? <Link to="/" className="link-logout"> Cerrar sesión </Link> : false}
        </div>
      </div>
    </header>
  );
}

Header.propTypes = propTypes;
export default Header;
