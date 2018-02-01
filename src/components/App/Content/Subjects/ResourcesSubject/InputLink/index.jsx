import React from 'react';
import PropTypes from 'prop-types';
import './inputLink.css';

const propTypes = {
  onCloseInputLink: PropTypes.func.isRequired,
  onAddNewLink: PropTypes.func.isRequired,
};

function InputLink({ onCloseInputLink, onAddNewLink }) {
  return (
    <div>
      <form onSubmit={onAddNewLink} className="form-container">
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="URL del nuevo link"
            name="text"
          />
        </div>
        <div className="d-flex justify-content-end">
          <button className="btn btn-secondary" onClick={onCloseInputLink}> Cerrar </button>
          <button type="submit" className="btn btn-form-primary"> Enviar </button>
        </div>
      </form>
      <hr />
    </div>
  );
}

InputLink.propTypes = propTypes;
export default InputLink;
