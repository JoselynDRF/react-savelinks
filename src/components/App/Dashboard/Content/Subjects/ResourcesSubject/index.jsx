import React, { Component } from 'react';
import uuid from 'uuid'; // eslint-disable-line
import PropTypes from 'prop-types';
import './resourcesSubject.css';

import Resource from './Resource';
import InputLink from './InputLink';
import ResourcesHeader from './ResourcesHeader';
import Message from './../../../../common/Message';

const propTypes = {
  activeSubject: PropTypes.shape({
    name: PropTypes.string,
    links: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  textInputLink: PropTypes.string.isRequired,
  openInputLink: PropTypes.bool.isRequired,
  handleOpenInputLink: PropTypes.func.isRequired,
  handleCloseInputLink: PropTypes.func.isRequired,
  handleAddNewLink: PropTypes.func.isRequired,
  handleFavorites: PropTypes.func.isRequired,
  handleDeleteLink: PropTypes.func.isRequired,
  handleValueInputLink: PropTypes.func.isRequired,
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
          textInputLink={this.props.textInputLink}
          handleCloseInputLink={this.props.handleCloseInputLink}
          handleAddNewLink={this.props.handleAddNewLink}
          handleValueInputLink={this.props.handleValueInputLink}
        />
      );
    }
  }

  // Render favorites
  renderLinksFavorites() {
    const linksFavorites = this.getLinksFavorites();

    if (linksFavorites.length === 0) {
      return (
        <Message message="No tienes links favoritos!" />
      );
    }

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

  renderLinks() {
    const links = this.props.activeSubject.links.filter(link => !link.isDeleted);

    if (links.length > 0) {
      return (
        <div>
          <div>
            <div className="favorites-container">
              <span> Favoritos </span>
            </div>
            {this.renderLinksFavorites()}
          </div>

          {
            (this.getOthersLinks().length > 0)
              ?
                <div>
                  <div className="others-container">
                    <span> Otros </span>
                  </div>
                  {this.renderOthersLinks()}
                </div>
              : false
            }
        </div>
      );
    }

    return (
      <Message message="No existen links para este tema, adiciona uno nuevo!" />
    );
  }

  render() {
    return (
      <div className="resources-container">
        <ResourcesHeader
          activeSubject={this.props.activeSubject}
          handleOpenInputLink={this.props.handleOpenInputLink}
        />

        {this.renderInputLink()}
        {this.renderLinks()}
      </div>
    );
  }
}

ResourcesSubject.propTypes = propTypes;
export default ResourcesSubject;
