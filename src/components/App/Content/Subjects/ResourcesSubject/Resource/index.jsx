import React from 'react';
import PropTypes from 'prop-types';
import './resource.css';

const propTypes = {
  link: PropTypes.shape({
    id: PropTypes.string,
    picture: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    url: PropTypes.string,
    isFavorite: PropTypes.boolean,
  }).isRequired,
  handleFavorites: PropTypes.func.isRequired,
  handleDeleteLink: PropTypes.func.isRequired,
};

function Resource({ link, handleFavorites, handleDeleteLink }) {
  return (
    <div className="m-2 resource-container">
      <div className="d-flex flex-row">
        <div>
          <img className="resource-img" src={link.picture} alt="" />
        </div>

        <div className="resource-content">
          <div className="d-flex justify-content-between mb-1">
            <span className="resource-title"> {link.title} </span>
            <div>
              <span
                className="icons"
                onClick={e => handleFavorites(e, link.id)}
                role="presentation"
                onKeyDown={() => {}}
              >
                { link.isFavorite ? <i className="fas fa-star" /> : <i className="far fa-star" /> }
              </span>

              <span
                className="icons"
                onClick={e => handleDeleteLink(e, link.id)}
                role="presentation"
                onKeyDown={() => {}}
              >
                <i className="fas fa-trash" />
              </span>
            </div>
          </div>

          <span className="resource-description"> {link.description} </span> <br />
          <a className="link" href={link.url}> {link.url} </a>
        </div>
      </div>
    </div>
  );
}

Resource.propTypes = propTypes;
export default Resource;
