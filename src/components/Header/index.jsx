import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    photoProfile: PropTypes.string,
  }).isRequired,
};

function Header({ user }) {
  return (
    <header>
      <h4> Header Component </h4>
      <img src={user.photoProfile} alt="" height="50px" />
      <span> {user.name} </span>
    </header>
  );
}

Header.propTypes = propTypes;
export default Header;
