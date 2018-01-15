import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  subject: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
};

class ResourcesSubject extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <span> ResourcesSubject Component </span>
        <h1> Links sobre {this.props.subject.name} </h1>
      </div>
    );
  }
}

ResourcesSubject.propTypes = propTypes;
export default ResourcesSubject;
