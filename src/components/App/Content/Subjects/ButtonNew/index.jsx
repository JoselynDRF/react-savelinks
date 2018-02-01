import React from 'react';
import PropTypes from 'prop-types';
import './buttonNew.css';

const propTypes = {
  handleOpenInputSubject: PropTypes.func.isRequired,
};

function ButtonNew({ handleOpenInputSubject }) {
  return (
    <div className="d-flex justify-content-end">
      <span
        className="icon-new"
        onClick={e => handleOpenInputSubject(e)}
        role="presentation"
        onKeyDown={() => {}}
      >
        <i className="fas fa-pencil-alt" />
      </span>
    </div>
  );
}

ButtonNew.propTypes = propTypes;
export default ButtonNew;
