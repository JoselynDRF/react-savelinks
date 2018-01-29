import React, { Component } from 'react';
import uuid from 'uuid'; // eslint-disable-line
import PropTypes from 'prop-types';
import './resourcesSubject.css';

import Resource from '../Resource';
import InputLink from '../InputLink';

const propTypes = {
  subject: PropTypes.shape({
    name: PropTypes.string,
    links: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  openInputLink: PropTypes.bool.isRequired,
  handleOpenInputLink: PropTypes.func.isRequired,
  handleCloseInputLink: PropTypes.func.isRequired,
  addNewLink: PropTypes.func.isRequired,
};

class ResourcesSubject extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // Get favorites links
  getFavoritesResources() {
    const listFavorites = this.props.subject.links.filter(link => link.isFavorite);
    return listFavorites.map((favorite) => {
      return (
        <Resource key={favorite.id} data={favorite} />
      );
    });
  }

  // Get others links (no favorites)
  getOthersResources() {
    const listOthers = this.props.subject.links.filter(link => !link.isFavorite);
    return listOthers.map((resource) => {
      return (
        <Resource key={resource.id} data={resource} />
      );
    });
  }

  // Render input Links
  renderInputLink() { // eslint-disable-line
    if (this.props.openInputLink) {
      return (
        <InputLink
          onCloseInputLink={this.props.handleCloseInputLink}
          onAddNewLink={this.props.addNewLink}
        />
      );
    }
  }

  render() {
    return (
      <div className="resources-container">
        <div className="resources-header d-flex justify-content-between">
          <span className="resources-title"> Links sobre {this.props.subject.name} </span>
          <div>
            <span className="icon-filter"> <i className="fas fa-filter" /> </span>
            <span
              className="icon-add"
              onClick={this.props.handleOpenInputLink}
              role="presentation"
              onKeyDown={this.props.handleOpenInputLink}
            >
              <i className="fas fa-plus-circle" />
            </span>
          </div>
        </div>

        {this.renderInputLink()}

        <div>
          <div className="favorites-container">
            <span> Favoritos </span>
          </div>
          {this.getFavoritesResources()}

        </div>

        <div>
          <div className="others-container">
            <span> Otros </span>
          </div>
          {this.getOthersResources()}
        </div>

      </div>
    );
  }
}

ResourcesSubject.propTypes = propTypes;
export default ResourcesSubject;
