import React, { Component } from 'react';
import uuid from 'uuid'; // eslint-disable-line
import PropTypes from 'prop-types';
import './resourcesSubject.css';

import Resource from './Resource';
import InputLink from './InputLink';
import ResourcesHeader from './ResourcesHeader';

const propTypes = {
  activeSubject: PropTypes.shape({
    name: PropTypes.string,
    links: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  openInputLink: PropTypes.bool.isRequired,
  handleOpenInputLink: PropTypes.func.isRequired,
  handleCloseInputLink: PropTypes.func.isRequired,
  handleAddNewLink: PropTypes.func.isRequired,
  handleFavorites: PropTypes.func.isRequired,
  handleDeleteLink: PropTypes.func.isRequired,
};

class ResourcesSubject extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // Get favorites links
  getLinksFavorites() {
    const listFavorites = this.props.activeSubject.links
      .filter(link => ((!link.isDeleted) ? link.isFavorite : false));

    return listFavorites;
  }

  // Get others links (no favorites)
  getOthersLinks() {
    const othersLinks = this.props.activeSubject.links
      .filter(link => ((!link.isDeleted) ? !link.isFavorite : false));

    return othersLinks;
  }


  // ******************** RENDER ******************** //

  // Render input Links
  renderInputLink() { // eslint-disable-line
    if (this.props.openInputLink) {
      return (
        <InputLink
          handleCloseInputLink={this.props.handleCloseInputLink}
          handleAddNewLink={this.props.handleAddNewLink}
        />
      );
    }
  }

  // Render favorites
  renderLinksFavorites() {
    const linksFavorites = this.getLinksFavorites();

    return linksFavorites.map(favorite => (
      <Resource
        key={favorite.id}
        link={favorite}
        handleFavorites={this.props.handleFavorites}
        handleDeleteLink={this.props.handleDeleteLink}
      />
    ));
  }

  // Render others links (no favorites)
  renderOthersLinks() {
    const othersLinks = this.getOthersLinks();

    return othersLinks.map(resource => (
      <Resource
        key={resource.id}
        link={resource}
        handleFavorites={this.props.handleFavorites}
        handleDeleteLink={this.props.handleDeleteLink}
      />
    ));
  }

  render() {
    return (
      <div className="resources-container">
        <ResourcesHeader
          activeSubject={this.props.activeSubject}
          handleOpenInputLink={this.props.handleOpenInputLink}
        />

        {this.renderInputLink()}

        <div>
          <div className="favorites-container">
            <span> Favoritos </span>
          </div>
          {this.renderLinksFavorites()}
        </div>

        <div>
          <div className="others-container">
            <span> Otros </span>
          </div>
          {this.renderOthersLinks()}
        </div>

      </div>
    );
  }
}

ResourcesSubject.propTypes = propTypes;
export default ResourcesSubject;
