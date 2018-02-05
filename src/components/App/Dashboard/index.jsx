import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Content from './Content';

const propTypes = {
  user: PropTypes.shape().isRequired,
};

function Dashboard({ user }) {
  return (
    <div>
      <Header user={user} />
      <Content />
    </div>
  );
}

Dashboard.propTypes = propTypes;
export default Dashboard;
