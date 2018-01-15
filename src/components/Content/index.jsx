import React, { Component } from 'react';
import Subjects from '../Subjects';

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h4> Main Component </h4>
        <Subjects />
      </div>
    );
  }
}

export default Content;
