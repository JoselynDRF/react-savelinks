import React from 'react';
import PropTypes from 'prop-types';
import './buttonNew.css';

const propTypes = {
  handleOpenInputSubject: PropTypes.func.isRequired,
};

function ButtonNew({ handleOpenInputSubject }) {
  return (
    <span
      className="icon-new"
      onClick={handleOpenInputSubject}
      role="presentation"
      onKeyDown={() => {}}
    >
      <i className="fas fa-pencil-alt" />
    </span>
  );
}

ButtonNew.propTypes = propTypes;
export default ButtonNew;
