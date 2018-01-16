import React, { Component } from 'react';
import uuid from 'uuid'; // eslint-disable-line
import PropTypes from 'prop-types';

import Resource from '../Resource';

const propTypes = {
  subject: PropTypes.shape({
    name: PropTypes.string,
    links: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

class ResourcesSubject extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getFavoritesResources() {
    const listFavorites = this.props.subject.links.filter(link => link.isFavorite);
    return listFavorites.map((favorite) => {
      return (
        <Resource key={favorite.id} data={favorite} />
      );
    });
  }

  getOthersResources() {
    const listOthers = this.props.subject.links.filter(link => !link.isFavorite);
    return listOthers.map((resource) => {
      return (
        <Resource key={resource.id} data={resource} />
      );
    });
  }

  render() {
    return (
      <div>
        <h4> Links sobre {this.props.subject.name} </h4>
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
