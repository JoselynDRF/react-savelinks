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
        <p> Links sobre {this.props.subject.name} </p>
      </div>
    );
  }
}

ResourcesSubject.propTypes = propTypes;
export default ResourcesSubject;
