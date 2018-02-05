import React from 'react';
import PropTypes from 'prop-types';

import Login from './Login';

const propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

function Content({ users }) {
  return (
    <div className="container mt-4">
      <Login users={users} />
    </div>
  );
}

Content.propTypes = propTypes;
export default Content;
