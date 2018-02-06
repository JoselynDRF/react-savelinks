import React from 'react';
import PropTypes from 'prop-types';

import Login from './Login';

const propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  handleCurrentUser: PropTypes.func.isRequired,
};

function Content({ users, handleCurrentUser }) {
  return (
    <div className="container mt-4">
      <Login users={users} handleCurrentUser={handleCurrentUser} />
    </div>
  );
}

Content.propTypes = propTypes;
export default Content;
