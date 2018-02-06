import React from 'react';
import PropTypes from 'prop-types';

import Header from './../common/Header';
import Content from './Content';

const propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  infoApp: PropTypes.shape().isRequired,
};

function Home({ users, infoApp }) {
  return (
    <div>
      <Header data={infoApp} />
      <Content users={users} />
    </div>
  );
}

Home.propTypes = propTypes;
export default Home;
