import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  onCloseInputLink: PropTypes.func.isRequired,
  onAddNewLink: PropTypes.func.isRequired,
};

function InputLink({ onCloseInputLink, onAddNewLink }) {
  return (
    <form onSubmit={onAddNewLink}>
      <input type="text" name="text" />
      <div>
        <button onClick={onCloseInputLink}> Cerrar </button>
        <button type="submit"> Enviar </button>
      </div>
    </form>
  );
}

InputLink.propTypes = propTypes;
export default InputLink;
