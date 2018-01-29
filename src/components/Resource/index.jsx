import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './resource.css';

const propTypes = {
  data: PropTypes.shape({
    picture: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
};

class Resource extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="m-2 resource-container">
        <div className="d-flex flex-row">
          <div>
            <img className="resource-img" src={this.props.data.picture} alt="" />
          </div>
          <div className="">
            <span className="resource-title"> {this.props.data.title} </span> <br />
            <span className="resource-description">
              {this.props.data.description}
            </span> <br />
            <a className="link" href={this.props.data.url}> {this.props.data.url} </a>
          </div>
        </div>
      </div>
    );
  }
}

Resource.propTypes = propTypes;
export default Resource;
