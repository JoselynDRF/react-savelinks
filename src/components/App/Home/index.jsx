import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Content from './Content';

const propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

function Home({ users }) {
  return (
    <div>
      <Header />
      <Content users={users} />
    </div>
  );
}

Home.propTypes = propTypes;
export default Home;
