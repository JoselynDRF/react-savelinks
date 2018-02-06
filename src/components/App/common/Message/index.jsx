import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  message: PropTypes.string.isRequired,
};

function Message({ message }) {
  return (
    <div className="p-3 text-center">
      <span> { message } </span>
    </div>
  );
}

Message.propTypes = propTypes;
export default Message;
