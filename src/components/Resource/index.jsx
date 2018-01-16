import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
  }).isRequired,
};

class Resource extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <p> {this.props.data.title} </p>
      </div>
    );
  }
}

Resource.propTypes = propTypes;
export default Resource;
