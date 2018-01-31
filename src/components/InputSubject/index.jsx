import React from 'react';
import { Label } from 'reactstrap';
import PropTypes from 'prop-types';
import './inputSubject.css';

const propTypes = {
  onCloseInputSubject: PropTypes.func.isRequired,
  onAddNewSubject: PropTypes.func.isRequired,
};

function InputSubject({ onCloseInputSubject, onAddNewSubject }) {
  return (
    <div className="container">
      <div className="text-center">
        <span className="title-subject-form"> Crea un nuevo tema! </span>
      </div>
      <form onSubmit={onAddNewSubject} className="form-subject-container">
        <div className="form-group">
          <Label for="inputSubject" className="label-subject-form"> Nombre del tema: </Label>
          <input
            id="inputSubject"
            type="text"
            className="form-control"
            name="text"
            placeholder="Ej. Recetas"
          />
        </div>
        <div className="d-flex justify-content-end">
          <button className="btn btn-secondary" onClick={onCloseInputSubject}> Cerrar </button>
          <button type="submit" className="btn btn-form-subject-primary"> Enviar </button>
        </div>
      </form>
    </div>
  );
}

InputSubject.propTypes = propTypes;
export default InputSubject;
