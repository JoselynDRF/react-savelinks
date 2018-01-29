import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './resource.css';

const propTypes = {
  data: PropTypes.shape({
    picture: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    url: PropTypes.string,
    isFavorite: PropTypes.boolean,
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

          <div className="resource-content">
            <div className="d-flex justify-content-between mb-1">
              <span className="resource-title"> {this.props.data.title} </span>

              <div>
                {
                  this.props.data.isFavorite
                  ? <span className="icons"><i className="fas fa-star" /></span>
                  : <span className="icons"><i className="far fa-star" /></span>
                }
                <span className="icons"><i className="fas fa-trash" /></span>
              </div>
            </div>

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
