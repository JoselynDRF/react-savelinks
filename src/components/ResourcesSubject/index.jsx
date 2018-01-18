import React, { Component } from 'react';
import { Button } from 'reactstrap';
import uuid from 'uuid'; // eslint-disable-line
import PropTypes from 'prop-types';

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
      <div>
        <h4> Links sobre {this.props.subject.name} </h4>
        <Button onClick={this.props.handleOpenInputLink}> Add link </Button>
        {this.renderInputLink()}
        <h6> Favoritos </h6>
        {this.getFavoritesResources()}
        <h6> Otros </h6>
        {this.getOthersResources()}
      </div>
    );
  }
}

ResourcesSubject.propTypes = propTypes;
export default ResourcesSubject;
