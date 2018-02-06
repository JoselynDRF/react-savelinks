import React from 'react';
import PropTypes from 'prop-types';

import Header from './../common/Header';
import Content from './Content';
import './../../../assets/img/favicon.ico';

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
