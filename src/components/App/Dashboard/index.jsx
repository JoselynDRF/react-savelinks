import React from 'react';
import PropTypes from 'prop-types';

import Header from './../common/Header';
import Content from './Content';

const propTypes = {
  user: PropTypes.shape().isRequired,
};

function Dashboard({ user }) {
  return (
    <div>
      <Header data={user} />
      <Content />
    </div>
  );
}

Dashboard.propTypes = propTypes;
export default Dashboard;
